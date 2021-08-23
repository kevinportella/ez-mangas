import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CardMangaProps {
  mangaInf: {
    title: string;
    image_url: string;
    alt: string;
    mal_id: string;
    url: string;
  }
}

export function CardManga(props : CardMangaProps) {

  const manga = props.mangaInf;

  return(
    <Box width="200px">
      <Flex as="a" direction="column" href={manga.url}>
      <Image
        src={manga.image_url}
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
