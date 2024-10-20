import { toast, ToastOptions, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    type: type,
  } as ToastOptions);
};