import type { NextPage } from "next";
import { Stack } from "@mui/material";

import CreateLabelForm from "features/labels/view/CreateLabelForm/CreateLabelForm";
import LabelsList from "features/labels/view/LabelsList/LabelsList";

import SEO from "../src/components/utils/SEO";

const LabelsPage: NextPage = () => {
  return (
    <div>
      <SEO title="Home" description="Deployable app home page" />

      <Stack spacing={2}>
        <CreateLabelForm />

        <LabelsList />
      </Stack>
    </div>
  );
};

export default LabelsPage;
