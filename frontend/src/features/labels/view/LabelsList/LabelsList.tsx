import { Box, Chip, Stack } from "@mui/material";
import MatchQuery from "components/utils/MatchQuery";
import { Label } from "features/labels/model/Label";
import {
  useClickLabelMutation,
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
              <LabelListItem label={label} />
            ))}
          </Stack>
        )}
      </MatchQuery>
    </Box>
  );
};

const LabelListItem = (props: { label: Label }) => {
  const { mutate } = useClickLabelMutation();
  return (
    <Chip
      label={`${props.label.name} ${props.label.clickCount}`}
      onClick={() => mutate({ labelId: props.label.id })}
    />
  );
};

export default LabelsList;
