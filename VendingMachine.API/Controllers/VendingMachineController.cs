using Microsoft.AspNetCore.Mvc;
using VendingMachine.Service;
using VendingMachine.Repository.Models;

namespace VendingMachine.API.Controllers
{
    [ApiController]
    [Route("api/vendingmachine/")]
    [Produces("application/json")]
    public class VendingMachineController : ControllerBase
    {
        private readonly VendingMachineService vendingMachineService;

        public VendingMachineController(VendingMachineService service)
        {
            vendingMachineService = service;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetTransactions()
        {
            var transactions = vendingMachineService.GetTransactions();
            return Ok(transactions);
        }

        [HttpGet]
        [Route("{transactionId}/")]
        public async Task<IActionResult> GetTransactionById(int transactionId)
        {
            var transaction = vendingMachineService.GetTransactionById(transactionId);
            return Ok(transaction);
        }

        [HttpGet]
        [Route("product/{productId}/")]
        public async Task<IActionResult> GetInventoryForProductById(int productId)
        {
            var product = vendingMachineService.GetProductById(productId);
            return Ok(product);
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> RecordPurchase([FromBody]Transaction transaction)
        {
            vendingMachineService.AddTransactionToLedger(transaction);
            return Ok();
        }

        [HttpPut]
        [Route("")]
        public async Task<IActionResult> RefundPurchase([FromBody]Transaction transaction)
        {
            var isRefunded = vendingMachineService.RemoveTransactionFromLedger(transaction);
            return Ok(isRefunded);
        }
    }
}