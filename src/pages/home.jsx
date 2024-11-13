import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, projectsData } from "@/data";

export function Home() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature); // Guarda el objeto completo del proyecto
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                PROYECTOS DESARROLLADOS
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                En esta página web se presenta el avance, desarrollo y documentación de los proyectos desarrollados en el curso de Interacción Humano Computador
                en la Universidad Nacional de San Agustín (UNSA). Los datos de los participantes y sus contactos se detallan más adelante.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
                onClick={() => handleFeatureClick(projectsData.find(p => p.title === title))}
                isSelected={selectedFeature?.title === title}
              />
            ))}
          </div>

          {selectedFeature && (
            <div className="mt-32 flex flex-wrap items-center">
              <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                  <selectedFeature.icon className="h-8 w-8 text-white" />
                </div>
                <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                  {selectedFeature.title}
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  {selectedFeature.description}
                </Typography>

                {/* Nuevas secciones de Objetivos y enlaces */}
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  <strong>Objetivos:</strong> {selectedFeature.objectives}
                </Typography>

                <div className="flex items-center justify-around">
                  {selectedFeature.documentLink && (
                    <a href={selectedFeature.documentLink} target="_blank" rel="noopener noreferrer">
                      <IconButton color="blue" variant="outlined">
                        <selectedFeature.icon className="w-5 h-5" />
                      </IconButton>
                      <Typography variant="button" color="blue">
                        Documento
                      </Typography>
                    </a>
                  )}
                  {selectedFeature.githubLink && (
                    <a href={selectedFeature.githubLink} target="_blank" rel="noopener noreferrer">
                      <IconButton color="black" variant="outlined">
                        <selectedFeature.icon className="w-5 h-5" />
                      </IconButton>
                      <Typography variant="button" color="blue">
                        GitHub
                      </Typography>
                    </a>
                  )}
                  {selectedFeature.demoLink && (
                    <a href={selectedFeature.demoLink} target="_blank" rel="noopener noreferrer">
                      <IconButton color="green" variant="outlined">
                        <selectedFeature.icon className="w-5 h-5" />
                      </IconButton>
                      <Typography variant="button" color="blue">
                        Demo
                      </Typography>
                    </a>
                  )}
                </div>
                { /* <Button variant="filled">read more</Button> */}
              </div>
            </div>
          )}
          
        </div>
      </section>

      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="" heading="Integrantes del equipo">
            Estos son los estudiantes que conforman el equipo de trabajo y que contribuyeron para la realización de todos los proyectos
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={ 
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
