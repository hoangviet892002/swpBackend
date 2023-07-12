const bcrypt = require('bcrypt');
const Customer = require('../../Models/Users/Customers');
const Doctor = require('../../Models/Users/Doctors');
const Admin = require('../../Models/Users/Admins');

class CustomerController {
    async index(req, res) {
        try {
            const customers = await Customer.findAll();
            return res.status(200).json({ customers: customers });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async detail(req, res) {
        try {
          const { id } = req.query;
          const customer = await Customer.findOne({ where: { id } });
          
          if (!customer) {
            return res.status(400).json({ error: 'User not found' });
          }
      
          return res.status(200).json({ customer: customer });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal server error' });
        }
      }

    async create(req, res) {
        try {
            const { email, password, fullname, address, phone, gender } = req.body;
            const doctor = await Doctor.findOne({ where: { email } });
            const admin = await Admin.findOne({ where: { email } });
            const customer = await Customer.findOne({ where: { email } });
            if (doctor || admin || customer) {
                return res.status(400).json({ error: 'Email already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            await Customer.create({
                email,
                password: hashedPassword,
                fullname,
                address,
                phone,
                gender,
            });
            return res.status(200).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.query;
            const { fullname, email, address, phone, gender } = req.body;
        
            const customer = await Customer.findByPk(id);
        
            if (!customer) {
              return res.status(400).json({ error: 'User not found' });
            }
        
            customer.fullname = fullname;
            customer.email = email;
            customer.address = address;
            customer.phone = phone;
            customer.gender = gender;
        
            await customer.save();
        
            return res.status(200).json({ message: 'Update successfully' });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
          }
    }

    async delete(req, res) {
        try {
            const { email } = req.body;
            const customer = await Customer.findOne({ where: { email } });
            if (!customer) {
                return res.status(400).json({ error: 'User not found' });
            }
            await customer.destroy();
            return res.status(200).json({ message: 'Delete successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }

    }

}

module.exports = new CustomerController;
