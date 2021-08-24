import NextLink from 'next/link';
import { useState } from 'react';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue } from "@chakra-ui/react";

import { supabase } from '../../services/supabase';
import { useRouter } from 'next/dist/client/router';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = async ( email, password ) => {
    setLoading( true )

    try {

      const { error } = await supabase.auth.signIn({ email, password });

      if ( error ) throw error;

      router.push('/')
    } catch ( error ) {
      alert(error.error_description || error.message)
    }
      setLoading(false)
  }

  return (
    <Flex minH="100vh" direction="column">
      <Header />
      <Flex flex="1" justify="center" align="center" pt="12">
        <Stack spacing="8" maxW={['md', 'lg']}>
          <Stack align="center">
            <Heading fontSize={["3xl","4xl"]}>Entre na sua conta</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              para aproveitar todos os recursos ✌️
            </Text>
          </Stack>
          <Box rounded="lg" bg={useColorModeValue('white', 'gray.900')} boxShadow="2xl" p="8">
            <Stack spacing="4" >

              <FormControl id="email" >
                <FormLabel >Endereço de email</FormLabel>
                <Input
                  type="email"
                  id="InputEmail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  rounded="full"
                  border="0"
                  bg={useColorModeValue('gray.300', 'gray.800')}
                  _focus={{
                    bg: useColorModeValue('gray.200', 'gray.800'),
                    outline: 'none'
                  }}
                />

              </FormControl>
              <FormControl id="password" >
                <FormLabel >Sua senha</FormLabel>
                <Input
                  type="password"
                  id="InputPassword"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  rounded="full"
                  border="0"
                  bg={useColorModeValue('gray.300', 'gray.800')}
                  _focus={{
                    bg: useColorModeValue('gray.200', 'gray.800'),
                    outline: 'none'
                  }}
                />
              </FormControl>
              <Stack spacing="8">
                <Button
                  onClick={e => {
                    e.preventDefault();
                    handleLogin(email, password);
                  }}
                  disabled={loading}
                  colorScheme="blue"
                  >
                  <span>{loading ? 'Loading' : 'Entrar'}</span>
                </Button>
                <Flex
                    align={'center'}
                    _before={{
                      content: '""',
                      borderBottom: '1px solid',
                      flexGrow: 1,
                      mr: 8,
                    }}
                    _after={{
                      content: '""',
                      borderBottom: '1px solid',
                      flexGrow: 1,
                      ml: 8,
                    }}
                  >
                    Ou
                  </Flex>

                  <NextLink href="/auth/sign-up" passHref>
                    <Button as="a" colorScheme="teal">
                      Criar conta
                    </Button>
                  </NextLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    <Footer />
    </Flex>

  );
}
