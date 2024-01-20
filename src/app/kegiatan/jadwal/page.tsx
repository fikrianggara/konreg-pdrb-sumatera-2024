"use client";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { IconCalendarEvent, IconMapPinFilled } from "@tabler/icons-react";
// import { Span } from "next/dist/trace";

const KEGIATAN = [
  {
    label: "Check-in hotel",
    deskripsi: "deskripsi kegiatan 1",
    deskripsi_panjang:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, eaque.",
    jadwal: new Date().toLocaleString(),
    lokasi: "Hotel X",
  },
  {
    label: "Peresmian Konreg PDRB regional sumatera 2024",
    deskripsi: "deskripsi kegiatan 2",
    deskripsi_panjang: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore
    nostrum perspiciatis magni corporis voluptates aperiam incidunt
    provident veritatis odio soluta minima sunt quasi esse dolor earum
    officiis, asperiores cupiditate quos iure! Expedita corrupti officiis,
    iste laboriosam obcaecati error minus.`,
    jadwal: new Date().toLocaleString(),
    lokasi: "Hotel X",
  },
  {
    label: "Diskusi hari ke-2",
    deskripsi: "deskripsi kegiatan 3",
    deskripsi_panjang: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
    nostrum cupiditate, repudiandae aliquam debitis cumque, iure maxime
    sapiente at aliquid quidem dolor nam maiores, facere quisquam! Quia,
    inventore? Officia, aspernatur.`,
    jadwal: new Date().toLocaleString(),
    lokasi: "Hotel X",
  },
  {
    label: "Outbound",
    deskripsi: "deskripsi kegiatan 4",
    deskripsi_panjang: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
    officia omnis tenetur quasi fuga voluptatibus.`,
    jadwal: new Date().toLocaleString(),
    lokasi: "Lokasi Outbound",
  },
  {
    label: "Check-out hotel",
    deskripsi: "deskripsi kegiatan 5",
    deskripsi_panjang: `Lorem ipsum dolor sit amet.`,
    jadwal: new Date().toLocaleString(),
    lokasi: "Hotel X",
  },
];

function Page() {
  const [active, setActive] = useState(1);
  const [activeDescription, setActiveDescription] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > KEGIATAN.length || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setActiveDescription(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) =>
    highestStepVisited >= step && active !== step;

  return (
    <div className="w-full space-y-4 md:space-x-4 md:space-y-0 md:flex justify-between p-4">
      <div className="md:basis-1/2 flex flex-col justify-start items-end">
        <Stepper
          active={active}
          onStepClick={setActive}
          orientation="vertical"
          color="teal"
          allowNextStepsSelect={false}
        >
          {KEGIATAN.map((k, i) => (
            <Stepper.Step
              key={i}
              label={k.label}
              allowStepSelect={false}
              description={
                <div
                  className="space-y-2 hover:cursor-pointer hover:bg-gray-100 rounded-lg p-2 hover:text-emerald-600 duration-300 ease-in-out"
                  onClick={() => setActiveDescription(i + 1)}
                >
                  <div className="flex space-x-2 items-center ">
                    <IconCalendarEvent size={24} />
                    <h3>{k.jadwal}</h3>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IconMapPinFilled size={24} />
                    <h3>{k.lokasi}</h3>
                  </div>
                </div>
              }
            >
              <div className="text-emerald-800">{k.deskripsi}</div>
            </Stepper.Step>
          ))}

          <Stepper.Completed>
            <div className="text-emerald-800">
              Seluruh kegiatan telah selesai
            </div>
          </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button
            variant="default"
            onClick={() => handleStepChange(active - 1)}
            disabled={active <= 1}
          >
            Kembali
          </Button>
          <Button
            variant="light"
            className="text-teal-800 bg-teal-100"
            onClick={() => handleStepChange(active + 1)}
            disabled={active >= KEGIATAN.length}
          >
            Selanjutnya
          </Button>
        </Group>
      </div>
      <div className="md:basis-1/2 bg-gray-100 rounded-lg p-4 h-96">
        <span>
          {KEGIATAN[activeDescription - 1].deskripsi_panjang
            ? KEGIATAN[activeDescription - 1].deskripsi_panjang
            : "tidak ada kegiatan"}
        </span>
      </div>
    </div>
  );
}

export default Page;
