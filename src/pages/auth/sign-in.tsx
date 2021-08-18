import NextLink from 'next/link';
import { Button, Flex, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function SignIn() {
  return (
    <>
      <Header />

      <Flex align="center" justify="center" p="6" mx="auto" maxW="1420px" >
        <Text>Page sign-in in development </Text>
      </Flex>


      <Flex align="center" justify="center">
      <NextLink href="/auth/sign-up" passHref>
        <Button as="a" colorScheme="teal">
          Criar conta
        </Button>
      </NextLink>
      </Flex>

      <Footer />
    </>
  );
}
