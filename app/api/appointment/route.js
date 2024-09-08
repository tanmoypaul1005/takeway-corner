export const dynamic = "force-dynamic";
import Appointment from "../../../models/Appointment";
import connectMongo from "../../../util/connectMongo";


export async function POST(request) {
  try{
    const new_doctor = await request.json();

    await connectMongo();
   
    const newDoctor = new Appointment({...new_doctor});
    const response = await newDoctor.save();

    return Response.json({
      success: true,
      status: 200,
      message: "Doctor Created Successfully",
      data: response,
    });
  }catch (err) {
    console.error(err);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
}