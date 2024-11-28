import React from "react";
import { Typography } from "@material-tailwind/react";

const Timeline = ({ phases }) => {
  return (
    <div className="mt-10 flex flex-col space-y-6">
      {phases.map((phase, index) => (
        <div key={index} className="relative flex items-center">
          {/* Indicador circular */}
          <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-black">
            <span className="h-3 w-3 rounded-full bg-black"></span>
          </div>
          {/* Línea horizontal */}
          {index < phases.length - 1 && (
            <div className="absolute left-4 top-4 h-px w-full bg-gray-300"></div>
          )}
          {/* Contenido de la fase */}
          <div className="ml-16">
            <Typography variant="h5" className="font-bold text-black">
              {phase.title}
            </Typography>
            <Typography className="mt-2 text-gray-700">{phase.description}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
