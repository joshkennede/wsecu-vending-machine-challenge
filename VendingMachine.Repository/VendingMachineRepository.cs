using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VendingMachine.Repository.Models;

namespace VendingMachine.Repository
{
    public class VendingMachineRepository : IVendingMachineRepository
    {
        private Ledger ledger;
        private Dictionary<int, int> productInventory;

        public VendingMachineRepository()
        {
            this.ledger = new Ledger();
            this.productInventory = new Dictionary<int, int>();
            SeedLedgerData();
            SeedProductInventory();
        }

        private void SeedProductInventory()
        {
            productInventory.Add(1, 10);
            productInventory.Add(2, 10);
            productInventory.Add(3, 10);
        }

        private void SeedLedgerData()
        {
            ledger.Transactions = new List<Transaction>
            {
                new Transaction()
                {
                    Id = 1,
                    TotalCost = 2.54m,
                    TotalProducts = 3,
                    Products = new List<Product>()
                    {
                        new Product()
                        {
                            Id = 1, Name = "Soda", Price = 0.95m, Quantity = 1
                        },
                        new Product()
                        {
                            Id = 2, Name = "Chips", Price = 0.99m, Quantity = 1
                        },
                        new Product()
                        {
                            Id = 3, Name = "Candy Bar", Price = 0.60m, Quantity = 1
                        },
                    }
                }
            };
        }

        public async Task<List<Transaction>> GetTransactions() 
            => ledger.Transactions;
        
        public async Task<Transaction> GetTransactionById(int id)
            => ledger.Transactions.FirstOrDefault(w => w.Id == id);

        public async Task<Product> GetProductById(int id) => id switch
        {
            1 => new Product(1, "Soda", 0.95m, await GetInventoryTotalForProduct(id)),
            2 => new Product(2, "Chips", 0.99m, await GetInventoryTotalForProduct(id)),
            3 => new Product(3, "Candy Bar", 0.60m, await GetInventoryTotalForProduct(id)),
            _ => throw new NotImplementedException(),
        };

        public async Task AddTransactionToLedger(Transaction transaction)
        {
            RemoveInventory(transaction);
            transaction.Id = ledger.Transactions.Last().Id + 1;
            transaction.TotalCost = transaction.Products.Sum(s => s.Price * s.Quantity);
            transaction.TotalProducts = transaction.Products.Sum(s => s.Quantity);
            ledger.Transactions.Add(transaction);
        }

        public async Task<bool> RemoveTransactionFromLedger(Transaction transaction)
        {
            AddInventory(transaction);
            var removedCount = ledger.Transactions.RemoveAll(r => r.Id == transaction.Id);
            return removedCount > 0;
        }

        private async Task AddInventory(Transaction transaction)
        {
            foreach (var product in transaction.Products)
            {
                AddProductQuantityBackFromTransaction(product);
            }
        }

        private async Task RemoveInventory(Transaction transaction)
        {
            foreach (var product in transaction.Products)
            {
                if (await InventoryHasQuantity(product.Id))
                    RemoveProductQuantityFromInventory(product);
            }
        }

        private async Task AddProductQuantityBackFromTransaction(Product product)
        {
            productInventory[product.Id] += product.Quantity;
        }

        private async Task RemoveProductQuantityFromInventory(Product product)
        {
            if (productInventory[product.Id] == 0)
                productInventory.Remove(product.Id);
            else
                productInventory[product.Id] -= product.Quantity;
        }

        private async Task<bool> InventoryHasQuantity(int productId)
        {
            if (productInventory[productId] > 0)
                return true;
            return false;
        }

        private async Task<int> GetInventoryTotalForProduct(int productId)
        {
            return productInventory[productId];
        }
    }
}
