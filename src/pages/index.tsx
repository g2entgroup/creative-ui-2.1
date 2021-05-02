// import Head from "next/head";
import { Heading, SimpleGrid, Box, Text } from "@chakra-ui/react";
// import { Container } from '../components/common/container';
import CreativeCard from '../components/CreativeCard';
import BrandHero from '../components/BrandHero';
import { Content } from "../components/common/Content/Content";
import { Main } from "../components/common/Main/Main";

export default function Home() {
  return (
    <Content>
      <BrandHero />
      <Main>
        <Heading as="h2" size="lg" color="white" my={4}>Latest Brand Campaigns</Heading>
        <SimpleGrid columns={[1, 4]} spacing="2rem">
          <CreativeCard />
          <CreativeCard />
          <CreativeCard />
          <CreativeCard />
        </SimpleGrid>
      </Main>
      <Main>
        <Heading as="h2" size="lg" color="white" my={4}>Top Creatives</Heading>
        <SimpleGrid columns={ 5 } spacing="2rem">
          
          <Box height="80px">
            <Text color="whiteAlpha.700">1.</Text>
            <Text color="whiteAlpha.700">2.</Text>
            <Text color="whiteAlpha.700">3.</Text>
          </Box>
          <Box height="80px">
          <ol>
            <Text color="whiteAlpha.700">4.</Text>
            <Text color="whiteAlpha.700">5.</Text>
            <Text color="whiteAlpha.700">6.</Text>
          </ol>
          </Box>
          <Box height="80px">
          <ol>
            <Text color="whiteAlpha.700">7.</Text>
            <Text color="whiteAlpha.700">8.</Text>
            <Text color="whiteAlpha.700">9.</Text>
          </ol>
          </Box>
          <Box height="80px">
          <ol>
            <Text color="whiteAlpha.700">10.</Text>
            <Text color="whiteAlpha.700">11.</Text>
            <Text color="whiteAlpha.700">12.</Text>
          </ol>
          </Box>
          <Box height="80px">
          <ol>
            <Text color="whiteAlpha.700">13.</Text>
            <Text color="whiteAlpha.700">14.</Text>
            <Text color="whiteAlpha.700">15.</Text>
          </ol>
          </Box>
        </SimpleGrid>
      </Main>
    </Content>
  );
}

