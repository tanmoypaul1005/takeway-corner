export const dynamic = "force-dynamic";
import Testimonial from "../../../models/Testimonial";
import connectMongo from "../../../util/connectMongo";

export async function POST(request) {
  try{
    const new_testimonial = await request.json();

    await connectMongo();
   
    const newTestimonial = new Testimonial({...new_testimonial});
    const response = await newTestimonial.save();

    return Response.json({
      success: true,
      status: 200,
      message: "Testimonial Created Successfully",
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