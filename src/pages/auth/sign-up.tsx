import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useColorModeValue, useToast } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import NextLink from 'next/link';
import { useState } from 'react';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { supabase } from "../../services/supabase";


export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const router = useRouter();

  const handleSignUp = async (email, password) => {
    setLoading(true)

    try {

      const { error } = await supabase.auth.signUp({email, password})

      if (error) throw error

    } catch (error) {
      alert(error.error_description || error.message)

    } finally {
      setLoading(false)
      router.push('/auth/sign-in')
    }
  }

  return (
    <Flex minHeight="100vh" direction="column">

      <Header />

      <Flex
        flex="1"
        justify="center"
        align="center"
        pt="8"
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8}>
          <Stack align={'center'} mt="4">
            <Heading fontSize={'4xl'}>Crie sua conta</Heading>

            <Text fontSize={'lg'} color={'gray.600'}>
              para aproveitar todos os recursos ✌️
            </Text>
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl >
                <FormLabel>Nome</FormLabel>
                <Input
                  type="name"
                  id="inputEmail"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  rounded="full"
                  border="0"
                  bg={useColorModeValue('gray.300', 'gray.800')}
                  _focus={{
                    bg: useColorModeValue('gray.200', 'gray.800'),
                    outline: 'none'
                  }}
                />
              </FormControl>

              <FormControl >
                <FormLabel>Endereço de e-mail</FormLabel>
                <Input
                  type="text"
                  id="inputEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  rounded="full"
                  border="0"
                  bg={useColorModeValue('gray.300', 'gray.800')}
                  _focus={{
                    bg: useColorModeValue('gray.200', 'gray.800'),
                    outline: 'none'
                  }}
                />
              </FormControl>

              <FormControl >
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  id="inputPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  rounded="full"
                  border="0"
                  bg={useColorModeValue('gray.300', 'gray.800')}
                  _focus={{
                    bg: useColorModeValue('gray.200', 'gray.800'),
                    outline: 'none'
                  }}
                />
              </FormControl>

              <Stack spacing={6}>
                <Button
                  colorScheme="blue"
                  type="submit"
                  onClick={() => {
                    handleSignUp(email, password);

                  }}
                >
                  <span>{loading ? 'Loading' : 'Cadastrar'}</span>
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

                <NextLink href="/auth/sign-in" passHref>
                  <Button
                    as="a"
                    colorScheme="teal"
                  >
                    Acesse conta
                  </Button>
                </NextLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </Flex>
  )
}
