import axios from 'axios';
import connectMongo from '../../../util/connectMongo';
import Doctor from '../../../models/Doctor';


export const getDoctors = async () => {
    try {
        await connectMongo();
        const doctor = await Doctor.find({});
        return  doctor;
    } catch (err) {
        console.error(err);
        return [];
    }
}



const fetchDoctorSlots = async (doctorId, date) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/doctor/slots`, {
      params: {
        doctor_id: doctorId,
        date: date,
      },
    });
    console.log('Doctor Slots:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctor slots:', error);
    throw error; // Optionally rethrow the error for further handling
  }
};

