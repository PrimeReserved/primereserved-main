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
      <div className="p-4 pt-28 md:px-20">
        <TermsAndConditions />
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
