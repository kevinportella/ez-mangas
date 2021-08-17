import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function CardManga() {
  return(
    <Box width="225px">
      <Flex as="a" direction="column" >
      <Image
        src="https://mangayabu.top/ezoimgfmt/cdn.mangayabu.com/capas/boku-no-hero-academia-manga.jpg?ezimgfmt=ng:webp/ngcb1"
        alt="My hero academy"
        objectFit="cover"
      />
      <Box bg="black" borderBottomRadius="md">
        <Text
          textAlign="center"
          fontWeight="md"
        >
          My hero academy
        </Text>
      </Box>
    </Flex>
    </Box>
  );
}
