import { Box, Flex, Image, Text } from "@chakra-ui/react";


export function CardManga(props) {

  const manga = props.mangaInf;

  return(
    <Box width="200px">
      <Flex as="a" direction="column" >
      <Image
        src={manga.image}
        alt={manga.alt}
        objectFit="cover"
      />
      <Box >
        <Text
          textAlign="center"
          fontWeight="md"
        >
          {manga.title}
        </Text>
      </Box>
    </Flex>
    </Box>
  );
}


// https://mangayabu.top/ezoimgfmt/cdn.mangayabu.com/capas/boku-no-hero-academia-manga.jpg?ezimgfmt=ng:webp/ngcb1
