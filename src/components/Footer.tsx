import React, { ReactNode } from 'react';
import { FaDiscord } from 'react-icons/fa';

import {
  Box,
  Container,
  Flex,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

import { LogoSite } from './LogoEZMangas';
import { configLinks } from "../configs/links";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer: React.FC = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      mt="10"
      pb="10"
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={['center','flex-start']}>
            <ListHeader>EZ Mangás</ListHeader>
            <Link href={'#'}>Equipe</Link>
            <Link href={'#'}>Contato</Link>
          </Stack>

          <Stack align={['center','flex-start']}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Política de cookies</Link>
            <Link href={'#'}>Política de privacidade</Link>
            <Link href={'#'}>Termos do serviço</Link>
            <Link href={'#'}>DMCA</Link>
          </Stack>

          <Stack align={['center','flex-start']}>
            <ListHeader>Redes sociais</ListHeader>
            <Stack direction={'row'} spacing={6}>
              <a target="_blank" href={configLinks.discord} rel="noreferrer">
                <IconButton
                  colorScheme="telegram"
                  aria-label="Discord"
                  size="lg"
                  icon={<FaDiscord />}
                  rounded="50"
                />
              </a>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: borderColor,
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: borderColor,
            flexGrow: 1,
            ml: 8,
          }}
        >
          <LogoSite />
        </Flex>

        <Box px="4">
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            {new Date().getFullYear()} EZ Mangás. Todos os direitos relacionados
            a marca EZ Mangás estão reservados.
          </Text>

          <Text fontSize={'xs'} textAlign={'center'}>
            Direitos das marcas relacionadas ao conteúdo apresentado nesse site
            pertence a seus respectivos donos, apenas criamos uma comunidade
            online com conteúdo que já estava de maneira publica na internet.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
