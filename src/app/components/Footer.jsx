import React from "react";
import FooterBlock from "./FooterBlock";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="bg-zinc-900 py-6">
      <div className="flex flex-col py-14 px-6 gap-6 md:flex-row flex-wrap">
        <div className="flex-1 h-full pb-10 w-full text-center">
          <h1 className="text-zinc-100 text-4xl font-bold">Music App</h1>
        </div>

        <FooterBlock title="Nos bureaux">
          <Link href="#">18, rue Valiton</Link>
          <Link href="#">92110 Clichy</Link>
          <Link href="#">FRANCE</Link>
        </FooterBlock>

        <FooterBlock title="Légal">
          <Link href="#">Confidentialité</Link>
          <Link href="#">Mentions légales</Link>
          <Link href="#">Conditions Générales de Vente</Link>
        </FooterBlock>

        <FooterBlock title="Envie de nous voir ?">
          <Link href="#">Je prends rendez-vous en ligne</Link>
        </FooterBlock>
      </div>
      <div className="flex items-center justify-center gap-8">
        <IconBrandX className="text-zinc-100" />
        <IconBrandInstagram className="text-zinc-100" />
        <IconBrandFacebook className="text-zinc-100" />
        <IconBrandLinkedin className="text-zinc-100" />
      </div>
    </div>
  );
};

export default Footer;
