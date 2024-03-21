import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrivacyPolicy Page | PrimeReserved",
  description: "PrimeReserved's PrivacyPolicy page",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="p-4 pt-28 md:px-20">
        <PrivacyPolicy />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
