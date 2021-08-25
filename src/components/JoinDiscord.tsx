import { Box, chakra, Flex, Heading, Text } from "@chakra-ui/react";

import { FaDiscord } from 'react-icons/fa';
import { configLinks } from "~/configs/links";

export const JoinDiscord: React.FC = () => {
  return (
    <Box bg="#7289DA">
      <Box
        w="100%"
        pb="12"
        pt="3"
        mx="auto"
        maxW="75rem"
        px= {{base: '2', md: '6'}}
        py="8"
      >
        <Flex
          direction={{base: 'column', md: 'row'}}
          align="center"
          justify="space-between"
        >
          <Flex color="withe" align="center">
            <Box fontSize="48px" mr="5">
              <FaDiscord />
            </Box>
            <Box>
              <Heading size="md" lineHeight="1.2" mb="1">
                Conecte-se com a comunidade
              </Heading>
              <Text opacity={0.7}>
                Sinta-se à vontade para fazer perguntas, relatar problemas e
                conhecer novas pessoas.
              </Text>
            </Box>
          </Flex>

          <chakra.button
            width={{ base: '100%', md: 'auto' }}
            mt={{ base: '6', md: 0 }}
            color="gray.800"
            as="a"
            justifyContent="center"
            display="inline-flex"
            alignItems="center"
            href={configLinks.discord}
            rel="noopener"
            target="_blank"
            fontWeight="bold"
            shadow="md"
            bg="white"
            px="24px"
            h="56px"
            rounded="lg"
            fontSize="md"
          >
            Entrar no Discord EZ Mangás
          </chakra.button>

        </Flex>
      </Box>

    </Box>
  );
}
