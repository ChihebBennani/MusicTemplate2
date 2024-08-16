import React from "react";

const NewsLetterSection = () => {
  return (
    <section className="h-screen px-6 py-20 flex flex-col items-center justify-center">
      <div className="text-center">
        <h4 className="font-bold text-3xl md:text-5xl lg:text-7xl xl:text-9xl bg-emerald-500 py-4 px-8">
          En manque de lecture ?
        </h4>
        <p className="py-6 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-zinc-800">
          La newsletter est faite pour vous !
        </p>
        <form className="pt-10 flex flex-col gap-2">
          <label className="font-semibold self-start text-xl text-zinc-800">
            E-mail
          </label>
          <input
            type="email"
            className="py-2 px-2 placeholder:font-bold font-bold text-xl focus:outline-emerald-500"
            placeholder="John@exapmle.com"
          />
          <button className="bg-zinc-900 text-zinc-100 font-bold text-2xl py-2 mt-2">
            S&apos;INSCRIRE
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetterSection;
