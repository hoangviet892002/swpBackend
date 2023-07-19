const Transaction = require('../../Models/Clinic/Transaction');

class TransactionController {
 
  async getall(req, res) {
    try {
      const transactions = await Transaction.findAll();
      return res.status(200).json(transactions);
    } catch (error) {
      console.error('Error retrieving transactions:', error);
      return res.status(500).json({ error: 'An error occurred while retrieving transactions' });
    }
  }

  async getTransactionByCustomer(req, res) {
    try {
      const customerId = req.query.id;
      const transactions = await Transaction.findAll({
        where: { comment: 'nap tien ' + customerId },
      });

      if (transactions.length > 0) {
        return res.json({ transactions });
      }

      return res.status(404).json({ error: 'No transactions found for the customer' });
    } catch (error) {
      console.error('Error retrieving transactions:', error);
      return res.status(500).json({ error: 'An error occurred while retrieving the transactions' });
    }
  }
}

module.exports = new TransactionController();
