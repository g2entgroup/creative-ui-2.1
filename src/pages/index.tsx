import Head from "next/head";
import { Box, Text, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Container } from '../components/common/container';
import CreativeCard from '../components/CreativeCard';
import BrandHero from '../components/BrandHero';
import { Content } from "../components/common/Content/Content";
import { Main } from "../components/common/Main/Main";

export default function Home() {
  return (
    <Content>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrandHero />
      <Main>
        <Heading as="h2" size="lg" color="white" my={4}>Active Brand Campaigns</Heading>
        <SimpleGrid columns={[1, 4]} spacing="40px">
          <CreativeCard />
          <CreativeCard />
          <CreativeCard />
          <CreativeCard />
          <CreativeCard />
          <CreativeCard />
          <CreativeCard />
          <CreativeCard />
        </SimpleGrid>
      </Main>
    </Content>
  );
}

