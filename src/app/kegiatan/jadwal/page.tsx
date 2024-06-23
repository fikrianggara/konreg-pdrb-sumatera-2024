"use client";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import {
  IconCalendarEvent,
  IconCheck,
  IconMapPinFilled,
} from "@tabler/icons-react";
// import { Span } from "next/dist/trace";
import { formatDate } from "@/lib/utils";
const KEGIATAN = [
  {
    label: "Check-in hotel",
    deskripsi: "deskripsi kegiatan 1",
    deskripsi_panjang: <h1 className="text-green-500">fdsafdsaf</h1>,
    jadwal: "6/5/2024",
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
    jadwal: "6/10/2024",
    lokasi: "Hotel X",
  },
  {
    label: "Diskusi hari ke-2",
    deskripsi: "deskripsi kegiatan 3",
    deskripsi_panjang: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
    nostrum cupiditate, repudiandae aliquam debitis cumque, iure maxime
    sapiente at aliquid quidem dolor nam maiores, facere quisquam! Quia,
    inventore? Officia, aspernatur.`,
    jadwal: "6/12/2024",
    lokasi: "Hotel X",
  },
  {
    label: "Outbound",
    deskripsi: "deskripsi kegiatan 4",
    deskripsi_panjang: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
    officia omnis tenetur quasi fuga voluptatibus.`,
    jadwal: "6/14/2024",
    lokasi: "Lokasi Outbound",
  },
  {
    label: "Check-out hotel",
    deskripsi: "deskripsi kegiatan 5",
    deskripsi_panjang: `Lorem ipsum dolor sit amet.`,
    jadwal: "6/17/2024",
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
    <div className="w-full space-y-4 md:space-x-4 md:space-y-0 md:flex justify-between p-4 flex-col lg:flex-row">
      <div className="md:basis-1/3 flex flex-col justify-start items-end h-96 lg:h-full overflow-y-scroll">
        <Stepper
          active={active}
          onStepClick={setActive}
          orientation="vertical"
          allowNextStepsSelect={false}
          size="lg"
        >
          {KEGIATAN.map((k, i) => (
            <Stepper.Step
              key={i}
              label={
                activeDescription - 1 == i ? (
                  <h1
                    className="text-xs md:text-sm underline hover:cursor-pointer text-sky-600"
                    onClick={() => setActiveDescription(i + 1)}
                  >
                    {k.label}
                  </h1>
                ) : (
                  <h1
                    className="text-xs md:text-sm hover:underline hover:cursor-pointer"
                    onClick={() => setActiveDescription(i + 1)}
                  >
                    {k.label}
                  </h1>
                )
              }
              allowStepSelect={false}
              // onClick={() => setActiveDescription(i + 1)}
              icon={
                // <div className="h-36 w-36">
                activeDescription - 1 == i ? (
                  <h4 className="text-xs space-y-1 text-sky-600 text-center">
                    {formatDate(k.jadwal)}
                  </h4>
                ) : (
                  <h4 className="text-xs space-y-1 text-center">
                    {formatDate(k.jadwal)}
                  </h4>
                )

                // </div>
              }
              description={
                <div
                  className="space-y-2 w-full"
                  onClick={() => setActiveDescription(i + 1)}
                >
                  <div className="flex space-x-2 items-center text-xs md:text-sm">
                    <IconMapPinFilled size={24} />
                    <h3>{k.lokasi}</h3>
                  </div>
                </div>
              }
            ></Stepper.Step>
          ))}

          <Stepper.Completed>
            <div className="p-2 rounded-lg bg-green-50 text-green-500 mr-2 text-xs flex items-center space-x-2">
              <IconCheck size={24} />
              <span className="ml-2">
                {" "}
                Seluruh kegiatan telah selesai dilaksanakan
              </span>
            </div>
          </Stepper.Completed>
        </Stepper>
      </div>
      <div className="space-y-2 md:basis-2/3">
        <div className="flex items-center space-x-2">
          <Button
            variant="default"
            onClick={() => handleStepChange(active - 1)}
            disabled={active <= 1}
          >
            Kembali
          </Button>
          <Button
            variant="light"
            className="text-sky-800 bg-sky-100"
            onClick={() => handleStepChange(active + 1)}
            disabled={active >= KEGIATAN.length}
          >
            Selanjutnya
          </Button>
        </div>
        <div className="md:basis-1/2 bg-gray-100 rounded-lg p-4 h-96 text-xs md:text-base">
          <div>
            {KEGIATAN[activeDescription - 1].deskripsi_panjang
              ? KEGIATAN[activeDescription - 1].deskripsi_panjang
              : "tidak ada kegiatan"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
