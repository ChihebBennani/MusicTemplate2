import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100 w-full min-h-screen grid grid-cols-1 lg:grid-cols-4 py-20">
      <div className="flex flex-col gap-2 px-10 ">
        <h4 className="font-bold text-3xl text-emerald-500">SIÈGE</h4>
        <h4 className="font-bold text-xl">8 rue de Bagatelle</h4>
        <h4 className="font-bold text-xl">92200 Neuilly Sur Seine</h4>
        <h4 className="font-bold text-xl">FRANCE</h4>

        <h4 className="font-bold text-3xl mt-10 text-emerald-500">BUREAUX</h4>
        <h4 className="font-bold text-xl">18 rue Valiton,</h4>
        <h4 className="font-bold text-xl">92110 Clichy</h4>
        <h4 className="font-bold text-xl">FRANCE</h4>

        <h4 className="font-bold text-2xl mt-10">Tél : +33(0)1 47 22 28 61</h4>
      </div>
      <div className="px-10 mt-14 lg:mt-0 col-span-2">
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <label className="font-bold text-xl">Prénom</label>
            <input
              type="text"
              required
              placeholder="John"
              className="bg-transparent border-b py-2 px-4 outline-none placeholder:font-semibold placeholder:text-zinc-500 focus:border-emerald-500 transition"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold text-xl">Nom</label>
            <input
              type="text"
              required
              placeholder="John"
              className="bg-transparent border-b py-2 px-4 outline-none placeholder:font-semibold placeholder:text-zinc-500 focus:border-emerald-500 transition"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold text-xl">Société</label>
            <input
              type="text"
              required
              placeholder="John"
              className="bg-transparent border-b py-2 px-4 outline-none placeholder:font-semibold placeholder:text-zinc-500 focus:border-emerald-500 transition"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold text-xl">E-mail</label>
            <input
              type="text"
              required
              placeholder="John"
              className="bg-transparent border-b py-2 px-4 outline-none placeholder:font-semibold placeholder:text-zinc-500 focus:border-emerald-500 transition"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold text-xl">Tél.</label>
            <input
              type="text"
              required
              placeholder="John"
              className="bg-transparent border-b py-2 px-4 outline-none placeholder:font-semibold placeholder:text-zinc-500 focus:border-emerald-500 transition"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold text-xl">Dites-nous tout</label>
            <textarea
              type="text"
              required
              placeholder="John"
              className="bg-transparent border py-2 px-4 outline-none placeholder:font-semibold placeholder:text-zinc-500 focus:border-emerald-500 transition h-32"
            />
          </div>
          <button
            type="submit"
            className="bg-zinc-100 text-zinc-900 py-2 mt-10 text-xl font-bold"
          >
            ENVOYER
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center pt-32 lg:pt-0 px-10 pb-10">
        <h3 className="font-bold text-3xl">Envie de nous voir ?</h3>
        <h2 className="font-semibold text-xl text-zinc-200">
          Je prends rendez-vous en ligne
        </h2>
        <p className="text-9xl">&#8964;</p>
        <button className="bg-emerald-500 w-full text-zinc-900 py-2 mt-10 text-xl font-bold">
          CHOISIR UN CRÉNEAU
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
