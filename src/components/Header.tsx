import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack, useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import NextLink from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { supabase } from '../services/supabase';
import { LogoSite } from './LogoEZMangas';
import PersonalAvatar from './PersonalAvatar';
import { SearchBox } from './SearchBox';
interface IHeaderLink {
  title: string;
  link: string;
}

const NavLink = ({ link } : { link :IHeaderLink } ) => (
  <NextLink href={link.link} passHref>
    <Link
      px={3}
      py={1}
      fontWeight="bold"
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
    {link.title}
    </Link>
  </NextLink>
);

export function Header() {
  const [ session, setSession] = useState(null)

  const mobileMenuDisclosure = useDisclosure();

  const { toggleColorMode, colorMode } = useColorMode();

  const linksMenu = useMemo<IHeaderLink[]>(
    () => [{
      title: 'Favoritos',
      link: '/favoritos',
    }, {
      title: 'Manhwas',
      link: '/manhwas',
    }, {
      title: 'Light Novels',
      link: '/light-novels',
    }, {
      title: 'Gênero',
      link: '/genero'
    }],
    []
  );

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px="4" width="100%">
      <Flex h="16" align="center" justify="space-between" maxWidth="1420px" mx="auto">
        <IconButton
            size={'md'}
            icon={mobileMenuDisclosure.isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={
              mobileMenuDisclosure.isOpen
                ? mobileMenuDisclosure.onClose
                : mobileMenuDisclosure.onOpen
            }
          />

          <HStack spacing={8} alignItems={'center'}>
            <NextLink href="/" passHref>
              <chakra.a>
                <LogoSite />
              </chakra.a>
            </NextLink>

            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {linksMenu.map((link) => (
                <NavLink key={link.title} link={link}/>
              ))}
            </HStack>
          </HStack>

          {isWideVersion && <SearchBox />}

          <Flex alignItems={'center'}>
            <Button
              mr="2"
              size="sm"
              onClick={toggleColorMode}
              variant="outline"
              colorScheme="gray"
            >
              {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>

            {session && (
              <Menu strategy="fixed">
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  width="40px"
                  height="40px"
                >

                  <Avatar
                    width="40px"
                    height="40px"
                    // src={`/api/profile-image/${userFire.uid}?reset=${userSiteData.profileUpdatedAt}`}
                  />
                </MenuButton>

                <MenuList>
                  <NextLink href="/profile" passHref>
                    <MenuItem as="a" icon={<FaUserAlt />}>
                      Perfil
                    </MenuItem>
                  </NextLink>
                  <MenuItem >Favoritos</MenuItem>
                  <MenuDivider />
                  <MenuItem
                    onClick={() => supabase.auth.signOut()}
                  >
                    Sair
                  </MenuItem>
                </MenuList>
              </Menu>
            )}

            {!session && (
              <NextLink href="/auth/sign-in" passHref>
                <Button as="a" colorScheme="blue" size="sm">
                  Entrar
                </Button>
              </NextLink>
            )}

          </Flex>
      </Flex>

      {mobileMenuDisclosure.isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {linksMenu.map((link) => (
              <NavLink key={link.title} link={link}/>
            ))}
            <SearchBox />
          </Stack>
        </Box>
      ) : null}
    </Box>

  );
}
