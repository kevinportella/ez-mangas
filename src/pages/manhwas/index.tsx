import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CardManga } from "~/components/CardManga";
import { Header } from "~/components/Header";

interface MangaInf {
  title: string;
  mal_id: string;
  image_url: string;
  alt: string;
  url: string;
}

export default function Manhwas() {
  const [topManga, setTopManga] = useState<MangaInf[]>([]);

  const getTopManga = async () => {

    const temp = await fetch(`https://api.jikan.moe/v3/top/manga/1/manhwa`)
      .then(response => response.json())
      .then(data => setTopManga(data.top.slice(0, 24)));
    ;
  }

  useEffect(() => {
    getTopManga()
  }, [])

  return(
    <>
      <Header/>

      <Box>
        <Flex
          direction="column"
          align="center"
          justify="center"
          maxWidth="1420px"
          mx="auto"
          my="2rem"
        >
          <Heading
            as="h2"
            size="lg"

          >
            Manhwas populares:
          </Heading>

          <Grid
            templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)","repeat(5, 1fr)","repeat(6, 1fr)"]}
            gap={[2,4,6,8]}
            my={["4","6"]}
          >

          {topManga.map(mangaInf => {
            return <CardManga key={mangaInf.mal_id} mangaInf={mangaInf} />
          })}

          </Grid>
        </Flex>
      </Box>
    </>

  );
}
