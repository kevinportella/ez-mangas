import { Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import EZMangasDark from '../../public/logo-dark.svg';
import EZMangasLight from '../../public/logo-light.svg';


interface ILogoSiteProps {
  height?: number | string;
  width?: number | string;
}

export const LogoSite: React.FC<ILogoSiteProps> = (props) => {
  // const EZMangasLogo = useColorModeValue(EZMangasDark, EZMangasLight);

  return <Text fontWeight="bold" fontSize="1.5rem" fontFamily="Poppins" >EZ Mangás</Text>;
};
{/* <EZMangasLogo {...props} /> */}
