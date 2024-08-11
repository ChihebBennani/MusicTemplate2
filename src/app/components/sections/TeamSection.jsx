import { team } from "@/app/utils/constants";
import React from "react";
import TeamMember from "../TeamMember";

const TeamSection = () => {
  return (
    <section className="py-10 px-6 md:px-6 md:py-20 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
      {team.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
      <div className="relative aspect-video col-span-1 md:col-span-2 lg:col-span-3 py-6">
        <video
          className="object-cover object-center"
          loop
          autoPlay="autoplay"
          muted
        >
          <source src="/img/team/team1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default TeamSection;
