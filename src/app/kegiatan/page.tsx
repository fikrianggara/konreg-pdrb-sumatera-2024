"use client";

import { Tabs as MantineTabs } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Demo() {
  return (
    <>
      <Carousel withIndicators height={200}>
        <Carousel.Slide className="bg-green-500">1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <MantineTabs defaultValue="first">
        <MantineTabs.List>
          <MantineTabs.Tab value="first">First tab</MantineTabs.Tab>
          <MantineTabs.Tab value="second">Second tab</MantineTabs.Tab>
          <MantineTabs.Tab value="third">Third tab</MantineTabs.Tab>
          <MantineTabs.Tab value="first">First tab</MantineTabs.Tab>
          <MantineTabs.Tab value="second">Second tab</MantineTabs.Tab>
          <MantineTabs.Tab value="third">Third tab</MantineTabs.Tab>
        </MantineTabs.List>
      </MantineTabs>
      <Tabs defaultValue="account" className="w-fit">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="account1">Account</TabsTrigger>
          <TabsTrigger value="password1">Password</TabsTrigger>
          <TabsTrigger value="account2">Account</TabsTrigger>
          <TabsTrigger value="password2">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
}

export default Demo;
