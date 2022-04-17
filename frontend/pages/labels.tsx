import type { NextPage } from "next";

import CreateLabelForm from "components/domain/labels/CreateLabelForm/CreateLabelForm";

import SEO from "../src/components/utils/SEO";

const LabelsPage: NextPage = () => {
  return (
    <div>
      <SEO title="Home" description="Deployable app home page" />

      <CreateLabelForm />
    </div>
  );
};

export default LabelsPage;
