using VendingMachine.Repository.Models;

namespace VendingMachine.Service
{
    public interface IVendingMachineService
    {
        Task<List<Transaction>> GetTransactions();
        Task<Transaction> GetTransactionById(int id);
        Task<List<Product>> GetProducts();
        Task<Product> GetProductById(int id);
        Task AddTransactionToLedger(Transaction transaction);
        Task<bool> RemoveTransactionFromLedger(Transaction transaction);
    }
}