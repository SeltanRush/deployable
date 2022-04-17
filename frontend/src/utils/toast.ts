import { toast } from "react-toastify";

export const toastSuccess = (content: string) =>
  toast(content, {
    type: "success",
  });

export const toastError = (error: string) =>
  toast(error, {
    type: "error",
  });
