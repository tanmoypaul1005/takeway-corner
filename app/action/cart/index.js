import { revalidatePath } from "next/cache";

export const addCart = async (formData, pathName) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL +"api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();

    if (data?.success) {
      revalidatePath(pathName);
      console.log("Success:", data?.message);
      return data;
    } else {
      console.error("Error:", data?.message);
    }
    return data;
  } catch (error) {
    console.error("Error:", error);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
};
