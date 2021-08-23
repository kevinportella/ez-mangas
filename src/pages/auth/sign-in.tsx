import NextLink from 'next/link';
import { useState } from 'react';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import { supabase } from '../../services/supabase';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async ( email ) => {
    try {
      setLoading( true )
      const { error } = await supabase.auth.signIn({ email });
      if ( error ) throw error
      alert('Verifique seu e-mail para obter o link de login!') //verificar
    } catch ( error ) {
      alert(error.error_description || error.message)
    } finally {
      setLoading( false)
    }
  }

  return (
    <>
      <Header />

      <Flex minH={'90vh'} align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing="6" mx="auto" maxW={['md', 'lg']} >
          <Stack align="center">
            <Heading fontSize={["3xl","4xl"]}>Inscreva-se</Heading>
            <Text fontSize={['md','lg']} color="gray.600">
              Insira seu email e clique no magic link ✌️
            </Text>
          </Stack>
          <Box rounded="lg" bg={useColorModeValue('white', 'gray.900')} boxShadow="lg" p="8">
            <Stack spacing="4" >
              <FormControl id="email" >
                <FormLabel >Endereço de email</FormLabel>
                <Input
                  type="email"
                  placeholder="..."
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
              <Stack spacing="8">
                <Button
                  onClick={e => {
                    e.preventDefault();
                    handleLogin(email);
                  }}
                  disabled={loading}
                  colorScheme="blue"
                  >
                  <span>{loading ? 'Loading' : 'Send magic link'}</span>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
