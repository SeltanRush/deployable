import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Form {
  name: string;
}

interface Props {}

const CreateLabelForm = (props: Props) => {
  const { register, handleSubmit, reset } = useForm<Form>();

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (form: Form) => axios.post("/api/labels/add", form),
    {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries("labels");
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
        <TextField
          label="Name"
          {...register("name")}
          required
          disabled={mutation.isLoading}
        />
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
