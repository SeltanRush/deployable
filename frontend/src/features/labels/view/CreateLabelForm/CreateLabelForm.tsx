import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { useCreateLabelMutation } from "features/labels/store/labels";
import "react-toastify/dist/ReactToastify.css";

interface Form {
  name: string;
}

const CreateLabelForm = () => {
  const { register, handleSubmit, reset } = useForm<Form>();

  const { mutate, isLoading } = useCreateLabelMutation({ onSuccess: reset });

  const onSubmit = (d: Form) => {
    mutate(d);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <TextField
          label="Name"
          {...register("name")}
          required
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          Create
        </Button>
        <div style={{ opacity: isLoading ? 1 : 0 }}>
          <CircularProgress />
        </div>
      </Stack>
    </form>
  );
};

export default CreateLabelForm;
