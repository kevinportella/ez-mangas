import {
  Box, Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text, useColorModeValue
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import PersonalAvatar from '../components/PersonalAvatar';
import { supabase } from '../services/supabase';

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  async function getProfile() {
    try {
      setLoading(true)

      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from(`profiles`)
        .select(`username, avatar_url`)
        .eq(`id`, user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {

      alert(error.message)

    } finally {

      setLoading(false)
    }
  }

  useEffect(() => {
    getProfile()
  },[session])

  async function updateProfile({ username, avatar_url }) {
    try {

      setLoading( true )
      const user = await supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase
        .from(`profiles`)
        .upsert(updates, {
          returning:"minimal",
        })

        if (error) {
          throw error;
        }

    } catch (error) {

      alert(error.message)

    } finally {

      setLoading(false)
    }
  }

  return (
    <>
    <Header />

    <Flex
      minH={'90vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
    <Box
      maxW="425px"
      w="full"
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow="2xl"
      rounded="lg"
      p="6"
      textAlign="center"
      justifyItems="center"
      justifyContent="center">
      <PersonalAvatar
        url={avatar_url}
        onUpload={url => {
          setAvatarUrl(url);
          updateProfile({ username, avatar_url: url });
        }}
      />
      <Text fontSize={'sm'} fontWeight={['400','500']} color="gray.500" mb="4">
        {session}
      </Text>
      <Stack spacing="4" p="4">
        <FormControl>
          <FormLabel>Nome de usuário</FormLabel>
          <Input
            type="type"
            value={username || ''}
            onChange={e => setUsername(e.target.value)}
            placeholder={username || 'username'}
            color={useColorModeValue('gray.800', 'gray.100')}
            bg={useColorModeValue('gray.300', 'gray.800')}
            rounded="full"
            border="0"
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none'
            }}
          />
        </FormControl>
      </Stack>
      <Stack mt="8" direction={['column','row']} spacing="4">
        <Button
          p="2"
          onClick={() => supabase.auth.signOut()}
          flex="1"
          fontSize="sm"
          rounded="full"
          _focus={{
            bg: 'gray.200'
          }}>
          Logout
        </Button>
        <Button
          p="2"
          isLoading={loading}
          loadingText="Updating ..."
          onClick={() => updateProfile({ username, avatar_url })}
          flex={1}
          fontSize="sm"
          rounded="full"
          bg="green.400"
          color="white"
          boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
          _hover={{
            bg: 'green.500'
          }}
          _focus={{
            bg: 'green.500'
          }}>
          {loading || 'Update'}
        </Button>
      </Stack>
    </Box>
  </Flex>
  <Footer />
    </>
  );
}
