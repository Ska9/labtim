// Next
import { NextPage } from "next";
// Components
import Uploader from "../components/organisms/Uploader";
// Hooks
import useAnalyser from "../hooks/analyser";

const Analyser: NextPage = () => {
  const {
    actions: { handleUpload },
  } = useAnalyser();
  return <Uploader onClick={handleUpload} />;
};

export default Analyser;
