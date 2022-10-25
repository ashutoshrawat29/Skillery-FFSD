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
import introVideo from '../assests/videos/video1.mp4'
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
          <VStack width={'full'} alignItems={['centre', 'flex-end']} spacing="8">
            <Heading children="Learn from the experts" size={'2xl'} />
            <Text alignItems={['center', 'left']} fontSize="2xl" children="Find Valueable Content At Reasonable Price" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme={'yellow'}>
                Explore now
              </Button>
            </Link>
          </VStack>
          <Image className="vector-graphics" boxSize={'md'} src={vg} objectFit="contain" />
        </Stack>
      </div>

      <Box padding={"8"} bg="blackAplha.800">
        <Heading
          textAlign={"center"}
          fontFamily="body"
          color={'yellow.400'}
          children="OUR BRANDS"
        />
        <HStack className="brandsBanner" justifyContent={"space-evenly"} marginTop="4">
            <CgGoogle />
            <CgYoutube />
            <SiCoursera />
            <SiUdemy />
            <DiAws />
        </HStack>
        <div className="container2">
            <video 
            autoPlay
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture = {true}
            disableRemotePlayback = {true}
            src={introVideo}
            >
            </video>
        </div>
      </Box>
    </div>
  );
}

export default Home;
