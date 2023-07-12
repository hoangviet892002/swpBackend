const bcrypt = require('bcrypt');
const Customer = require('../../Models/Users/Customers');
const Doctor = require('../../Models/Users/Doctors');
const Admin = require('../../Models/Users/Admins');
const Slot = require('../../Models/Clinic/Slots');
class DoctorController {
  //get Doctor List
  async  getAllDoctor(req, res) {
    try {
      const doctors = await Doctor.findAll();
      return res.status(200).json({ doctors: doctors });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  async  getAllDoctorByName(req, res) {
    const { name } = req.query;
    try {
      const doctors = await Doctor.findAll({
        where: {
          fullname: {
            [Sequelize.Op.like]: `%${name}%`,
          },
          status :"active",
        },
      });
      return res.status(200).json({ doctors });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
    async index(req, res) {
        try {
            const doctors = await Doctor.findAll();
            return res.status(200).json({ doctors: doctors });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async detail(req, res) {
        try {
          const { id } = req.query;
          const doctor = await Doctor.findOne({ where:  {id:  id } });
          if (!doctor) {
            return res.status(400).json({ error: 'Doctor not found' });
          }
          return res.status(200).json({ doctor });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal server error' });
        }
      }

    async  update(req, res) {
        try {
          const { doctorId } = req.query;
          const {
            fullname,
            idCard,
            gender,
            dateOfBirth,
            phone,
            email,
            address,
            qualification,
            experience,
            password,
          } = req.body;
      
          const doctor = await Doctor.findByPk(doctorId);
          if (!doctor) {
            return res.status(400).json({ error: 'Doctor not found' });
          }
      
          const hashedPassword = await bcrypt.hash(password, 10);
      
          await doctor.update({
            fullname,
            idCard,
            gender,
            dateOfBirth,
            phone,
            email,
            address,
            qualification,
            experience,
            password: hashedPassword,
          });
      
          return res.status(200).json({ message: 'Update successfully' });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal server error' });
        }
      }
      

    

    async delete(req, res) {
        try {
            const { email } = req.body;
            const doctor = await Doctor.findOne({ where: { email } });
            if (!doctor) {
                return res.status(400).json({ error: 'User not found' });
            }
            await doctor.destroy();
            return res.status(200).json({ message: 'Delete successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getSlot(req,res){
        try {
            const { email } = req.body;
            const doctor = await Doctor.findOne({ where: { email } });
            if (!doctor) {
                return res.status(400).json({ error: 'Doctor not found' });
            }
            const slot = await Slot.findAll({where: { doctorID: doctor.id } })
            return res.status(200).json({ slot: slot });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = new DoctorController;