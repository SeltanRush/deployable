import { Box, Chip, Stack } from "@mui/material";

import MatchQuery from "components/utils/MatchQuery";
import { Label } from "features/labels/model/Label";
import {
  useClickLabelMutation,
  useDeleteLabelMutation,
  useLabelsQuery,
} from "features/labels/store/labels";

const LabelsList = () => {
  const query = useLabelsQuery();

  return (
    <Box>
      <MatchQuery query={query}>
        {(data) => (
          <Stack direction="row">
            {data.data.map((label) => (
              <LabelListItem key={label.id} label={label} />
            ))}
          </Stack>
        )}
      </MatchQuery>
    </Box>
  );
};

const LabelListItem = (props: { label: Label }) => {
  const { mutate: click } = useClickLabelMutation();
  const { mutate: deleteLabel } = useDeleteLabelMutation();

  return (
    <Chip
      label={`${props.label.name} ${props.label.clickCount}`}
      onClick={() => click({ labelId: props.label.id })}
      onDelete={() => deleteLabel({ labelId: props.label.id })}
    />
  );
};

export default LabelsList;
