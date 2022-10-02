using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VendingMachine.Repository.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public decimal TotalCost { get; set; }
        public int TotalProducts { get; set; }
        public List<Product> Products { get; set; }
    }
}
