import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './Home.css';
import { Link } from 'react-router-dom';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import vg from '../assests/images/bg.png';
function Home() {
  return (
    <div className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['centre', 'flex-end']}>
            <Heading children="Learn from the experts" size={'2xl'} />
            <Text children="Find Valueable Content At Reasonable Price" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme={'yellow'}>
                Explore now
              </Button>
            </Link>
          </VStack>
          <Image boxSize={'md'} src={vg} objectFit="contain" />
        </Stack>
      </div>

      <Box>
        <Heading
          textAlign={"center"}
          fontFamily="body"
          color={'yellow.400'}
          children="OUR BRANDS"
        />
        <HStack>
            <CgGoogle />
            <CgYoutube />
            <SiCoursera />
            <SiUdemy />
            <DiAws />
        </HStack>
      </Box>
    </div>
  );
}

export default Home;
