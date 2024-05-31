"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Image,
  useMantineTheme,
  Card,
  Badge,
  Group,
} from "@mantine/core";
import { Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import Hotel from "../../components/akomodasi/hotel";

export default function Page() {
  const theme = useMantineTheme();
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <div className="container mt-4">
      <Tabs color="gray" radius="md" defaultValue="hotel">
        <Tabs.List>
          <Tabs.Tab value="hotel" leftSection={<IconPhoto style={iconStyle} />}>
            Hotel
          </Tabs.Tab>
          <Tabs.Tab
            value="rumah-makan"
            leftSection={<IconMessageCircle style={iconStyle} />}
          >
            Rumah Makan
          </Tabs.Tab>
          <Tabs.Tab
            value="perbelanjaan"
            leftSection={<IconSettings style={iconStyle} />}
          >
            Perbelanjaan
          </Tabs.Tab>
          <Tabs.Tab
            value="transportasi"
            leftSection={<IconSettings style={iconStyle} />}
          >
            Transportasi
          </Tabs.Tab>
          <Tabs.Tab
            value="rumah-ibadah"
            leftSection={<IconSettings style={iconStyle} />}
          >
            Rumah Ibadah
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="hotel">
          <Hotel />
        </Tabs.Panel>

        <Tabs.Panel value="rumah-makan">
          <Hotel />
        </Tabs.Panel>

        <Tabs.Panel value="perbelanjaan">Settings tab content</Tabs.Panel>

        <Tabs.Panel value="transportasi">
          <Hotel />
        </Tabs.Panel>
        <Tabs.Panel value="rumah-ibadah">
          <Hotel />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
