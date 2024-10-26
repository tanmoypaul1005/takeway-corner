import { toast, ToastOptions, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bcryptjs from 'bcryptjs';

interface ToastrProps {
  message?: string;
  type?: TypeOptions;
}

export const Toastr = ({ message = "", type = "error" }: ToastrProps) => {
  toast(message, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

// Function to hash a password
export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await bcryptjs.hash(password, 12);
  return hashedPassword;
}

// Function to verify a password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  const isValid = await bcryptjs.compare(password, hashedPassword);
  return isValid;
}