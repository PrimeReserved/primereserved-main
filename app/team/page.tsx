import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Page | PrimeReserved",
  description: "PrimeReserved's meet the team page",
  // other metadata
};

const TeamPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Meet the team page"
        description="Feel free to reach out to us at PrimeReserved for any inquiries, collaborations, or just to say hello. We value your connection and are eager to discuss how we can assist you in achieving your digital goals."
      />

      <Team />
    </>
  );
};

export default TeamPage;
