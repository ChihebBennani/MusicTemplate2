import React from "react";
import PageTitle from "../components/PageTitle";
import AgencySection from "../components/sections/AgencySection";
import TeamSection from "../components/sections/TeamSection";
import CertificationsSection from "../components/sections/CertificationsSection";

const page = () => {
  return (
    <>
      <PageTitle title="L ’agence" />
      <AgencySection />
      <TeamSection />
      <CertificationsSection />
    </>
  );
};

export default page;
