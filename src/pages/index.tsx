import Head from "next/head";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { Container } from '../components/common/container';
import CreativeCard from '../components/CreativeCard';
import BrandHero from '../components/BrandHero';

export default function Home() {
  return (
    <Box flex="1" height="100vh">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrandHero />
      <Container>
        <Heading as="h2" size="lg" my={4}>Active Brand Campaigns</Heading>
        <CreativeCard />
      </Container>
    </Box>
  );
}

