using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VendingMachine.Repository;
using VendingMachine.Repository.Models;

namespace VendingMachine.Service
{
    public class VendingMachineService : IVendingMachineService
    {
        private readonly VendingMachineRepository repository;

        public VendingMachineService(VendingMachineRepository repository)
        {
            this.repository = repository;
        }

        public async Task<List<Transaction>> GetTransactions()
        {
            return await repository.GetTransactions();
        }

        public async Task<Transaction> GetTransactionById(int id)
        {
            return await repository.GetTransactionById(id);
        }

        public async Task<Product> GetProductById(int id)
        {
            return await repository.GetProductById(id);
        }

        public async Task AddTransactionToLedger(Transaction transaction)
        {
            repository.AddTransactionToLedger(transaction);
        }

        public async Task<bool> RemoveTransactionFromLedger(Transaction transaction)
        {
            var isRemoved = await repository.RemoveTransactionFromLedger(transaction);
            return isRemoved;
        }
    }
}
