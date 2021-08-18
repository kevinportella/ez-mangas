import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { CardManga } from "../../components/CardManga";
import { Header } from "../../components/Header";

export default function Manhwas() {
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
            Manhwas da semana:
          </Heading>

          <Grid
            templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)","repeat(5, 1fr)","repeat(6, 1fr)"]}
            gap={[2,4,6,8]}
            my={["4","6"]}
          >
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />
            <CardManga />

          </Grid>
        </Flex>
      </Box>
    </>

  );
}
