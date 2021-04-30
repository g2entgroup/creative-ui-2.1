import React from "react";

import { Box, Badge, useToken, Image } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import ReactPlayer from 'react-player/lazy';

const StarIcon = ({ color }) => <Icon name="star" color={color} />

export default function CreativeCard() {
  const property = {
    videoUrl: "https://youtu.be/wQlN0BVltZI",
    imageAlt: "Tesla Campaign",
    crtv: 40,
    apr: 18.78,
    title: "Tesla - Model Y",
    formattedPrice: "$79,900.00",
    reviewCount: 34,
    rating: 4
  };

  const [brand400, brand200] = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.red.100`
    ["brand.400", "brand.200"],
    // a single fallback or fallback array matching the length of the previous arg
  )

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" align="center" height="511px" width="full" boxShadow={`inset 0 4px 0 ${brand400}, 0 0 8px ${brand200}`}>
      <ReactPlayer 
        url={property.videoUrl}
        playing={true}
        loop={true}
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" colorScheme="pink">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.crtv} CRTV &bull; {property.apr} % APR
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" 
            bgGradient="linear(to-l, #7928CA, #e50168)"
            bgClip="text"
            fontSize="lg"
            fontWeight="extrabold" 
          >
            &nbsp;/ Weekly Prize
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "pink.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
