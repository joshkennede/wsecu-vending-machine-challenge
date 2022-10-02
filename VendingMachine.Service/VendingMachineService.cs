using VendingMachine.Repository;
using VendingMachine.Repository.Models;

namespace VendingMachine.Service
{
    public class VendingMachineService : IVendingMachineService
    {
        #region Declaration

        private readonly VendingMachineRepository repository;

        #endregion

        #region Constructor

        public VendingMachineService(VendingMachineRepository repository)
        {
            this.repository = repository;
        }

        #endregion

        #region Fetch Data Calls

        public async Task<List<Transaction>> GetTransactions()
            => await repository.GetTransactions();

        public async Task<Transaction> GetTransactionById(int id)
            => await repository.GetTransactionById(id);
        

        public async Task<List<Product>> GetProducts()
            => await repository.GetProducts();
        

        public async Task<Product> GetProductById(int id)
            => await repository.GetProductById(id);

        #endregion

        #region Transform data

        public async Task AddTransactionToLedger(Transaction transaction)
            => repository.AddTransactionToLedger(transaction);

        public async Task<bool> RemoveTransactionFromLedger(Transaction transaction)
            => await repository.RemoveTransactionFromLedger(transaction);

        #endregion
    }
}
