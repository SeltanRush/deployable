import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { Label } from "features/labels/model/Label";

const LABELS_QUERY_KEY = "labels";

export const useLabelsQuery = () => {
  return useQuery(LABELS_QUERY_KEY, () => axios.get<Label[]>("/api/labels"));
};

export interface CreateLabelSettings {
  name: string;
}

export const useCreateLabelMutation = (props: {
  onSuccess: (settings: CreateLabelSettings) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation(
    (data: { name: string }) => axios.post("/api/labels/add", data),
    {
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries("labels");
        toast("Label added", {
          type: "success",
        });
        props.onSuccess(variables);
      },
    }
  );
};

export const useClickLabelMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (data: { labelId: string }) =>
      axios.put(`/api/labels/${data.labelId}/click`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("labels");
      },
    }
  );
};
