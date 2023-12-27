import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | PrimeReserved",
  description: "PrimeReserved's contact page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Feel free to reach out to us at PrimeReserved for any inquiries, collaborations, or just to say hello. We value your connection and are eager to discuss how we can assist you in achieving your digital goals."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
