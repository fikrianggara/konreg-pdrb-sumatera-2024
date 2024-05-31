"use client";
import { useEffect, useState } from "react";
import React from "react";
import {
  Flex,
  Text,
  Image,
  useMantineTheme,
  Card,
  Badge,
  Group,
  Grid,
  rem,
  Loader,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "./akomodasi.module.css";
import Link from "next/link";
import { IconMapPinFilled } from "@tabler/icons-react";

const hotels = [
  {
    id: 1,
    foto: "https://dbijapkm3o6fj.cloudfront.net/resources/5756,1004,1,6,4,0,600,450/-4601-/20210916185504/swiss-belhotel-jambi.jpeg",
    namahotel: "Swiss-Belhotel Jambi",
    star: "★★★★",
    rate: "4,6",
    jarak: 0,
    waktu: 0,
    harga: 1100,
    gmaps: "https://maps.app.goo.gl/DuxKgqhMvbKhW5wdA",
    href: "https://www.tiket.com/hotel/indonesia/swissbelhotel-jambi-108001534490350231",
  },
  {
    id: 2,
    foto: "https://imageresizer.arch.software/astoninternational/v2/Images/AstonJambi/Gallery/Aston-Jambi_1.jpg?d=1600x1066&location=center",
    namahotel: "ASTON Jambi Hotel & Conference Center",
    star: "★★★★",
    rate: "4,5",
    jarak: "0,5",
    waktu: 3,
    harga: 700,
    gmaps: "https://goo.gl/maps/bJP8JXx8Eee2X6dw6",
    href: "https://www.tiket.com/hotel/indonesia/aston-jambi-hotel-conference-center-502001645437761386",
  },
  {
    id: 4,
    foto: "https://www.waringinhospitality.com/images/hotel/642d09f15df18.webp",
    namahotel: "Abadi Suites",
    star: "★★★",
    rate: "4,3",
    jarak: "0,2",
    waktu: 1,
    harga: 750,
    gmaps: "https://maps.app.goo.gl/e3ZQR79XUz6kgPUf6",
    href: "https://www.tiket.com/hotel/indonesia/luminor-hotel-jambi-kebun-jeruk-108001534490356220",
  },
  {
    id: 5,
    foto: "https://www.waringinhospitality.com/images/hotel/642d09f15df18.webp",
    namahotel: "Odua Weston Hotel",
    star: "★★★",
    rate: "4,3",
    jarak: "0,2",
    waktu: 1,
    harga: 750,
    gmaps: "https://maps.app.goo.gl/e3ZQR79XUz6kgPUf6",
    href: "https://www.tiket.com/hotel/indonesia/luminor-hotel-jambi-kebun-jeruk-108001534490356220",
  },
  {
    id: 3,
    foto: "https://www.waringinhospitality.com/images/hotel/642d09f15df18.webp",
    namahotel: "Luminor Hotel Jambi Kebun Jeruk",
    star: "★★★",
    rate: "4,3",
    jarak: "0,2",
    waktu: 1,
    harga: 750,
    gmaps: "https://maps.app.goo.gl/e3ZQR79XUz6kgPUf6",
    href: "https://www.tiket.com/hotel/indonesia/luminor-hotel-jambi-kebun-jeruk-108001534490356220",
  },
];
export default function Hotel() {
  const theme = useMantineTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <h1>
      {isClient ? (
        <Grid className="container" my="sm" suppressHydrationWarning>
          {hotels.map((hotel) => {
            return (
              <Grid.Col span={3} key={hotel.id}>
                <Link href={hotel.href} target="_blank">
                  <Card shadow="sm" padding="md" radius="md" withBorder>
                    <Card.Section>
                      <Carousel
                        classNames={classes}
                        withIndicators
                        height={200}
                        dragFree
                        slideGap="md"
                        align="start"
                        loop
                      >
                        <Carousel.Slide>
                          <Image
                            src={hotel.foto}
                            alt="example"
                            width={200}
                            height={200}
                          />
                        </Carousel.Slide>
                        <Carousel.Slide>
                          <Image
                            src={"/assets/example.jpg"}
                            alt="example"
                            width={200}
                            height={200}
                          />
                        </Carousel.Slide>
                        <Carousel.Slide>
                          <Image
                            src={"/assets/example.jpg"}
                            alt="example"
                            width={200}
                            height={200}
                          />
                        </Carousel.Slide>
                      </Carousel>
                    </Card.Section>

                    <Grid mt="md" mb="xs">
                      <Grid.Col span={8}>
                        <Text fw={500}>{hotel.namahotel}</Text>
                        {/* <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink">On Sale</Badge>
                </Group> */}

                        <Text size="sm" c="dimmed">
                          Akomodasi di Kota Jambi
                        </Text>

                        <Link href={hotel.gmaps}>
                          <Text size="sm" c="blue" mt="xs">
                            Lihat Peta→
                          </Text>
                        </Link>
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <Text size="md" c={"yellow"}>
                          {hotel.star}
                        </Text>
                        <Flex direction={"row"} align={"center"}>
                          <IconMapPinFilled
                            style={{
                              width: rem(20),
                              height: rem(20),
                              color: "#ff2825",
                            }}
                          />
                          <Text size="sm">{hotel.jarak} Km</Text>
                        </Flex>
                      </Grid.Col>
                    </Grid>
                  </Card>
                </Link>
              </Grid.Col>
            );
          })}
        </Grid>
      ) : (
        <Loader color="rgba(6, 95, 70, 1)" />
      )}
    </h1>
  );
}
