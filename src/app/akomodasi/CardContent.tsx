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
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "./akomodasi.module.css";
import Link from "next/link";
import { IconMapPinFilled, IconStarFilled } from "@tabler/icons-react";
export default function CardContent() {
  const theme = useMantineTheme();
  return (
    <Grid className="container" my="sm">
      <Grid.Col span={3}>
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
              <Text fw={500}>Norway Fjord Adventures</Text>
              {/* <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink">On Sale</Badge>
                </Group> */}

              <Text size="sm" c="dimmed">
                Akomodasi di Kota Jambi
              </Text>

              <Link href="/">
                <Text size="sm" c="blue" mt="xs">
                  Lihat Peta→
                </Text>
              </Link>
            </Grid.Col>
            <Grid.Col span={4}>
              <Flex direction={"row"} align={"center"}>
                <IconStarFilled
                  style={{ width: rem(20), height: rem(20), color: "#ffec00" }}
                />
                <Text size="sm"> 4,78</Text>
              </Flex>
              <Flex direction={"row"} align={"center"}>
                <IconMapPinFilled
                  style={{ width: rem(20), height: rem(20), color: "#ff2825" }}
                />
                <Text size="sm">1,5 Km</Text>
              </Flex>
            </Grid.Col>
          </Grid>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
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
              <Text fw={500}>Norway Fjord Adventures</Text>
              {/* <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink">On Sale</Badge>
                </Group> */}

              <Text size="sm" c="dimmed">
                Akomodasi di Kota Jambi
              </Text>

              <Link href="/">
                <Text size="sm" c="blue" mt="xs">
                  Lihat Peta→
                </Text>
              </Link>
            </Grid.Col>
            <Grid.Col span={4}>
              <Flex direction={"row"} align={"center"}>
                <IconStarFilled
                  style={{ width: rem(20), height: rem(20), color: "#ffec00" }}
                />
                <Text size="sm"> 4,78</Text>
              </Flex>
              <Flex direction={"row"} align={"center"}>
                <IconMapPinFilled
                  style={{ width: rem(20), height: rem(20), color: "#ff2825" }}
                />
                <Text size="sm">1,5 Km</Text>
              </Flex>
            </Grid.Col>
          </Grid>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
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
              <Text fw={500}>Norway Fjord Adventures</Text>
              {/* <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink">On Sale</Badge>
                </Group> */}

              <Text size="sm" c="dimmed">
                Akomodasi di Kota Jambi
              </Text>

              <Link href="/">
                <Text size="sm" c="blue" mt="xs">
                  Lihat Peta→
                </Text>
              </Link>
            </Grid.Col>
            <Grid.Col span={4}>
              <Flex direction={"row"} align={"center"}>
                <IconStarFilled
                  style={{ width: rem(20), height: rem(20), color: "#ffec00" }}
                />
                <Text size="sm"> 4,78</Text>
              </Flex>
              <Flex direction={"row"} align={"center"}>
                <IconMapPinFilled
                  style={{ width: rem(20), height: rem(20), color: "#ff2825" }}
                />
                <Text size="sm">1,5 Km</Text>
              </Flex>
            </Grid.Col>
          </Grid>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
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
              <Text fw={500}>Norway Fjord Adventures</Text>
              {/* <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink">On Sale</Badge>
                </Group> */}

              <Text size="sm" c="dimmed">
                Akomodasi di Kota Jambi
              </Text>

              <Link href="/">
                <Text size="sm" c="blue" mt="xs">
                  Lihat Peta→
                </Text>
              </Link>
            </Grid.Col>
            <Grid.Col span={4}>
              <Flex direction={"row"} align={"center"}>
                <IconStarFilled
                  style={{ width: rem(20), height: rem(20), color: "#ffec00" }}
                />
                <Text size="sm"> 4,78</Text>
              </Flex>
              <Flex direction={"row"} align={"center"}>
                <IconMapPinFilled
                  style={{ width: rem(20), height: rem(20), color: "#ff2825" }}
                />
                <Text size="sm">1,5 Km</Text>
              </Flex>
            </Grid.Col>
          </Grid>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
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
              <Text fw={500}>Norway Fjord Adventures</Text>
              {/* <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink">On Sale</Badge>
                </Group> */}

              <Text size="sm" c="dimmed">
                Akomodasi di Kota Jambi
              </Text>

              <Link href="/">
                <Text size="sm" c="blue" mt="xs">
                  Lihat Peta→
                </Text>
              </Link>
            </Grid.Col>
            <Grid.Col span={4}>
              <Flex direction={"row"} align={"center"}>
                <IconStarFilled
                  style={{ width: rem(20), height: rem(20), color: "#ffec00" }}
                />
                <Text size="sm"> 4,78</Text>
              </Flex>
              <Flex direction={"row"} align={"center"}>
                <IconMapPinFilled
                  style={{ width: rem(20), height: rem(20), color: "#ff2825" }}
                />
                <Text size="sm">1,5 Km</Text>
              </Flex>
            </Grid.Col>
          </Grid>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
