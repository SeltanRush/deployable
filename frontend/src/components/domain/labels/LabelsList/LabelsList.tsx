import { Box, Chip } from "@mui/material";

import { Label } from "models/Label/Label";

interface Props {
  labels: Label[];
}

const LabelsList = (props: Props) => {
  return (
    <Box>
      {props.labels.map((label) => (
        <Chip key={label.id} label={label.name} />
      ))}
    </Box>
  );
};

export default LabelsList;
