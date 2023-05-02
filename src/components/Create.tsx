import React, { useState } from "react";
import CreateCard from "./CreateCard";
import { CreateData } from "@/Data/CreateData";

const Create = () => {
    const [isActive, setIsActive] = useState(0)
  return (
    <div className="max-w-[70%] mx-auto">
      <h2 className="text-4xl font-semibold mt-24 ml-4">
        See what your team can create
      </h2>

      <div className="mt-12">
        <div className="flex flex-col gap-4">
            {CreateData.map((card,index) => (
            <CreateCard heading={card.heading} desc={card.desc} icon={card.icon} index={index} isActive={isActive} setIsActive={setIsActive} />
            ))}
        </div>

      </div>
    </div>
  );
};

export default Create;
