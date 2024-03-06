import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page | PrimeReserved",
  description: "PrimeReserved's Services page",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services Page"
        description="Feel free to reach out to us at PrimeReserved for any inquiries, collaborations, or just to say hello. We value your connection and are eager to discuss how we can assist you in achieving your digital goals."
      />

      <Services />
    </>
  );
};

export default ServicesPage;
