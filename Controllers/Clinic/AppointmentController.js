const Appointment = require('../../Models/Clinic/Appointments');
const Slot = require('../../Models/Clinic/Slots'); // Đường dẫn tới model Slot
const authController = require('../AuthController');

class AppointmentController {
  // CREATE - Tạo cuộc hẹn mới
  async createAppointment(req, res) {
    try {
      const appointmentData = req.body; // Lấy dữ liệu cuộc hẹn từ body của request

      console.log(appointmentData);
      const appointment = await Appointment.create(appointmentData); // Tạo một cuộc hẹn mới trong cơ sở dữ liệu

      // Cập nhật trạng thái của  slot trong cuộc hẹn thành "available"
      const slotId = appointmentData.slotID; // Lấy danh sách các slot trong cuộc hẹn từ dữ liệu cuộc hẹn

      const slot = await Slot.findByPk(slotId); // Tìm slot theo ID trong cơ sở dữ liệu
      if (slot) {
        slot.status = 'not available'; // Cập nhật trạng thái của slot thành "not available"
        await slot.save(); // Lưu thay đổi vào cơ sở dữ liệu

      }

      return res.status(200).json(appointment); // Trả về cuộc hẹn vừa tạo dưới dạng JSON
    } catch (error) {
      console.error('Error creating appointment:', error);
      return res.status(500).json({ error: 'An error occurred while creating the appointment' });
    }
  }

  // READ - Lấy thông tin cuộc hẹn theo ID
  async getAppointmentDetails(req, res) {
    try {
      const appointmentId = req.query.id; // Lấy ID của cuộc hẹn từ query parameter
      const appointment = await Appointment.findByPk(appointmentId, {
        
      });
  
      if (appointment) {
        return res.json({ appointment }); // Trả về thông tin cuộc hẹn bao gồm thông tin từ bảng Slot và Doctor
      }
  
      return res.status(404).json({ error: 'Appointment not found' });
    } catch (error) {
      console.error('Error retrieving appointment details:', error);
      return res.status(500).json({ error: 'An error occurred while retrieving the appointment details' });
    }
  }
  

  // READ - Lấy danh sách tất cả các cuộc hẹn
  async getAllAppointments(req, res) {
    try {
      const appointments = await Appointment.findAll(); // Lấy danh sách tất cả các cuộc hẹn từ cơ sở dữ liệu
      return res.json(appointments); // Trả về danh sách cuộc hẹn dưới dạng JSON
    } catch (error) {
      console.error('Error retrieving all appointments:', error);
      return res.status(500).json({ error: 'An error occurred while retrieving all appointments' });
    }
  }
  //Read appointment by custormer
  async appointmentcustomer(req, res) {
    try {
      const customerId = req.query.customerID; // Lấy customerID từ query parameters của request
      const appointments = await Appointment.findAll({
        where: { customerId },
      }); // Tìm tất cả các cuộc hẹn dựa trên customerId trong cơ sở dữ liệu
  
      if (appointments.length > 0) {
        return res.json({ appointments }); // Trả về danh sách cuộc hẹn dưới dạng JSON
      }
  
      return res.status(404).json({ error: 'No appointments found for the customer' }); // Trả về thông báo lỗi nếu không tìm thấy cuộc hẹn
    } catch (error) {
      console.error('Error retrieving appointments:', error);
      return res.status(500).json({ error: 'An error occurred while retrieving the appointments' });
    }
  }
  //Read appointment by doctor
  async  appointmentdoctor(req, res) {
    try {
      const doctorId = req.query.doctorID; // Lấy doctorID từ query parameters của request
      const appointments = await Appointment.findAll({
        where: { doctorId },
      }); // Tìm tất cả các cuộc hẹn dựa trên doctorId trong cơ sở dữ liệu
  
      if (appointments.length > 0) {
        return res.json({ appointments }); // Trả về danh sách cuộc hẹn dưới dạng JSON
      }
  
      return res.status(404).json({ error: 'No appointments found for the doctor' }); // Trả về thông báo lỗi nếu không tìm thấy cuộc hẹn
    } catch (error) {
      console.error('Error retrieving appointments:', error);
      return res.status(500).json({ error: 'An error occurred while retrieving the appointments' });
    }
  }
  
  

  // UPDATE - Cập nhật thông tin cuộc hẹn
  async updateAppointment(req, res) {
    try {
      const appointmentId = req.query.id; // Lấy ID của cuộc hẹn từ params của request
      const appointmentData = req.body; // Lấy dữ liệu cuộc hẹn từ body của request
  
      const appointment = await Appointment.findByPk(appointmentId); // Tìm cuộc hẹn theo ID trong cơ sở dữ liệu
      if (!appointment) {
        return res.status(404).json({ error: 'Appointment not found' }); // Trả về thông báo lỗi nếu không tìm thấy cuộc hẹn
      }
  
      // Cập nhật thông tin cuộc hẹn
      await appointment.update(appointmentData);
  
      return res.json(appointment); // Trả về thông tin cuộc hẹn đã được cập nhật dưới dạng JSON
    } catch (error) {
      console.error('Error updating appointment:', error);
      return res.status(500).json({ error: 'An error occurred while updating the appointment' });
    }
  }
  

  // DELETE - Xóa cuộc hẹn
  async deleteAppointment(req, res) {
    try {
      const appointmentId = req.params.id; // Lấy ID của cuộc hẹn từ params của request
      const appointment = await Appointment.findByPk(appointmentId); // Tìm cuộc hẹn theo ID trong cơ sở dữ liệu
      if (appointment) {
        await appointment.destroy(); // Xóa cuộc hẹn
        return res.json({ message: 'Appointment deleted successfully' }); // Trả về thông báo xóa thành công
      }
      return res.status(404).json({ error: 'Appointment not found' }); // Trả về thông báo lỗi nếu không tìm thấy cuộc hẹn
    } catch (error) {
      console.error('Error deleting appointment:', error);
      return res.status(500).json({ error: 'An error occurred while deleting the appointment' });
    }
  }
}

module.exports = new AppointmentController();
