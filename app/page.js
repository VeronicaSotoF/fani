import ovniPic from "../public/ovni.svg";
import Banner from "./components/Banner";

export default function Page() {
  return (
    <>
      <Banner title="Welcome to Fani" imageSrc={ovniPic} />
    </>
  );
}
