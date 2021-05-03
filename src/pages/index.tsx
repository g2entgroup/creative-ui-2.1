// import Head from "next/head";
import { Heading, SimpleGrid, Box, OrderedList, ListItem, HStack } from "@chakra-ui/react";
// import { Container } from '../components/common/container';
import CreativeCard from '../components/CreativeCard';
import BrandHero from '../components/BrandHero';
import { Content } from "../components/common/Content/Content";
import { Main } from "../components/common/Main/Main";
import LiveCampaigns from "../components/LiveCampaigns";
import FilterTab from "../components/common/FilterTab/FilterTab";

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
            <OrderedList>
            <ListItem color="whiteAlpha.700"></ListItem>
            <ListItem color="whiteAlpha.700"></ListItem>
            <ListItem color="whiteAlpha.700"></ListItem>
            </OrderedList>
          </Box>
          <Box height="80px">
          <OrderedList>
            <ListItem color="whiteAlpha.700" value="4"></ListItem>
            <ListItem color="whiteAlpha.700" value="5"></ListItem>
            <ListItem color="whiteAlpha.700" value="6"></ListItem>
          </OrderedList>
          </Box>
          <Box height="80px">
          <OrderedList>
            <ListItem color="whiteAlpha.700" value="7"></ListItem>
            <ListItem color="whiteAlpha.700" value="8"></ListItem>
            <ListItem color="whiteAlpha.700" value="9"></ListItem>
          </OrderedList>
          </Box>
          <Box height="80px">
          <OrderedList>
            <ListItem color="whiteAlpha.700" value="10"></ListItem>
            <ListItem color="whiteAlpha.700" value="11"></ListItem>
            <ListItem color="whiteAlpha.700" value="12"></ListItem>
          </OrderedList>
          </Box>
          <Box height="80px">
          <OrderedList>
            <ListItem color="whiteAlpha.700" value="12"></ListItem>
            <ListItem color="whiteAlpha.700" value="13"></ListItem>
            <ListItem color="whiteAlpha.700" value="14"></ListItem>
          </OrderedList>
          </Box>
        </SimpleGrid>
      </Main>
      <Main>
        <Heading as="h2" size="lg" color="white" my={4}>Live Brand Campaigns</Heading>
        <SimpleGrid columns={[1, 4]} spacing="2rem">
          <LiveCampaigns />
          <LiveCampaigns />
          <LiveCampaigns />
          <LiveCampaigns />
        </SimpleGrid>
      </Main>
      <Main>
        <Heading as="h2" size="lg" color="white" my={4}>Discover</Heading>
        <FilterTab />
      </Main>
    </Content>
  );
}

