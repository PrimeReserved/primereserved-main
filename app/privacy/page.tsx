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
      <div className="px-20 py-28">
        <PrivacyPolicy />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
