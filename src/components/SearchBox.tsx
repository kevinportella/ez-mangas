import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, useColorModeValue } from "@chakra-ui/react";

export function SearchBox() {
  return(
    <Flex
      as="label"
      flex="1"
      py="2"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg={useColorModeValue('gray.300', 'gray.800')}
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="2"
        mr="2"
        placeholder="Buscar..."
        _placeholder={{
          color: useColorModeValue('gray.900', 'gray.100')
        }}
      />

      <SearchIcon fontSize="20" color={useColorModeValue('gray.900', 'gray.100')} />

    </Flex>
  );
}
