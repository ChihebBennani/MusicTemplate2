import React from "react";

const AgencySection = () => {
  return (
    <section className="h-screen bg-zinc-900 text-zinc-100 flex flex-col items-center justify-center px-[10%] py-[5%]">
      <p className="font-semibold text-2xl leading-8 sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
        Nous sommes&nbsp;
        <span className="font-bold">des créateurs de contenus</span>. des
        producteurs inépuisables. des stratèges créatifs. SHARE & DARE. Pour
        faire face à l’évolution constante des usages, nous vous accompagnons
        pour définir votre stratégie de contenu pour émerger auprès de votre
        audience avec les bons talents. Nous créons des contenus à forte
        personnalité pour vous permettre&nbsp;
        <span className="bg-emerald-500 italic">d’exprimer la votre.</span>
      </p>
      <span className="text-9xl pt-6">&#8964;</span>
    </section>
  );
};

export default AgencySection;
