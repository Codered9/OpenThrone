import React from "react";

const Intro = () => {
  return (
    <div className="text-center pt-16 pb-24 bg-grey text-white">
      <h1 className="text-6xl font-bold ">Generative AI, tailored to your business</h1>
      <p className="text-xl mt-8">Train AI on your own data to create on-brand content at scale.</p>
      <div className="flex justify-center mt-12 gap-2 text-md">
        <button className="bg-white text-grey px-8 py-5 rounded-lg">Request demo</button>
        <button className="bg-btn-blue text-white px-8 py-5 rounded-lg">Get started</button>
      </div>
    </div>
  );
};

export default Intro;
