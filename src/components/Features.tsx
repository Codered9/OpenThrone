import { FeaturesData } from "@/Data/FeaturesData";
import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <div className="text-center pt-16">
      <h2 className="text-4xl font-semibold mt-12">
        Write as a team, in one voice
      </h2>
      <p className="mt-6 font-light text-grey opacity-60 mx-auto text-xl text-center max-w-3xl">
        Hypotenuse AI takes your existing high-performing, on-brand content to
        train an AI that'll be your team's brainstorming partner and first draft
        writer.
      </p>

      <div className="mt-24 flex flex-col gap-32">
        {FeaturesData.map((feat, index) => (
          
            <FeaturesCard
              heading={feat.heading}
              subHeading={feat.subHeading}
              features={feat.features}
              gif={feat.gif}
              key={index}
              reverse={feat.reverse}
            />
          
        ))}
      </div>
    </div>
  );
};

export default Features;
