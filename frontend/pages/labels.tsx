import type { NextPage } from "next";
import { useQuery } from "react-query";
import axios from "axios";

import CreateLabelForm from "components/domain/labels/CreateLabelForm/CreateLabelForm";
import LabelsList from "components/domain/labels/LabelsList/LabelsList";
import { Label } from "models/Label/Label";

import SEO from "../src/components/utils/SEO";

const LabelsPage: NextPage = () => {
  const { data, isSuccess } = useQuery(["labels"], () =>
    axios.get<Label[]>("/api/labels")
  );

  return (
    <div>
      <SEO title="Home" description="Deployable app home page" />

      <CreateLabelForm />

      {isSuccess ? <LabelsList labels={data.data} /> : null}
    </div>
  );
};

export default LabelsPage;
