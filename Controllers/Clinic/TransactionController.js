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
}

module.exports = new TransactionController();
