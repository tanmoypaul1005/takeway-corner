import Doctor from "../../../models/Doctor";
import connectMongo from "../../../util/connectMongo";


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