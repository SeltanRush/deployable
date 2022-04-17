import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Form {
  name: string;
}

interface Props {}

const CreateLabelForm = (props: Props) => {
  const { register, handleSubmit } = useForm<Form>();

  const mutation = useMutation(
    (form: Form) => axios.post("/api/labels/add", form),
    {
      onSuccess: () => {
        toast("Label added", {
          type: "success",
        });
      },
    }
  );

  const onSubmit = (d: Form) => {
    mutation.mutate(d);
  };

  useEffect(() => {
    if (mutation.error) {
      toast(String(mutation.error), {
        type: "error",
      });
    }
  }, [mutation.error]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <TextField label="Name" {...register("name")} required />
        <Button type="submit" disabled={mutation.isLoading}>
          Create
        </Button>
        <div style={{ opacity: mutation.isLoading ? 1 : 0 }}>
          {" "}
          <CircularProgress />
        </div>
      </Stack>
    </form>
  );
};

export default CreateLabelForm;
