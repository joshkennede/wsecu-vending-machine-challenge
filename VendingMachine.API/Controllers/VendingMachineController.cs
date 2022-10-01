using Microsoft.AspNetCore.Mvc;

namespace VendingMachine.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VendingMachineController : ControllerBase
    {
        private readonly ILogger<VendingMachineController> _logger;

        public VendingMachineController(ILogger<VendingMachineController> logger)
        {
            _logger = logger;
        }
    }
}