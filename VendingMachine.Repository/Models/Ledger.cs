using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VendingMachine.Repository.Models
{
    public class Ledger
    {
        public List<Transaction> Transactions { get; set; }
    }
}
