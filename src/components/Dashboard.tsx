import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { CardManga } from "./CardManga";

const mangaInf = {
  title: "My hero academy",
  image: "https://mangayabu.top/ezoimgfmt/cdn.mangayabu.com/capas/boku-no-hero-academia-manga.jpg?ezimgfmt=ng:webp/ngcb1",
  alt: "My hero academy"
}

export function Dashboard() {
  return(
    <Box  >
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxWidth="1420px"
        mx="auto"
        p="2rem"
      >
        <Heading
          as="h2"
          size="lg"

        >
          Atualizados recentemente:
        </Heading>

        <Grid
          templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)","repeat(5, 1fr)","repeat(6, 1fr)"]}
          gap={[2,4,6,8]}
          my={["6","8"]}
        >
          <CardManga mangaInf={mangaInf} />
          <CardManga mangaInf={mangaInf} />
          <CardManga mangaInf={mangaInf} />
          <CardManga mangaInf={mangaInf} />
          <CardManga mangaInf={mangaInf} />
          <CardManga mangaInf={mangaInf} />

        </Grid>
      </Flex>
    </Box>
  );
}
