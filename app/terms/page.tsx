import Breadcrumb from "@/components/Common/Breadcrumb";
import TermsAndConditions from "@/components/TermsAndConditions/TermsAndConditions";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TermsAndConditions Page | PrimeReserved",
  description: "PrimeReserved's TermsAndConditions page",
  // other metadata
};

const TermsAndConditionsPage = () => {
  return (
    <>
      <div className="px-20 py-28">
        <TermsAndConditions />
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
