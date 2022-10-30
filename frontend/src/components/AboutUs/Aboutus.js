import React from 'react';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, HStack, Flex, Box, Text } from '@chakra-ui/layout';
import './About.css';

function Aboutus() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <Stack>
      <HStack>
        <Flex
          direction={isNotSmallerScreen ? 'row' : 'column'}
          spacing="200px"
          p={isNotSmallerScreen ? '32' : '0'}
          alignSelf="flex-start"
        >
          <div className="imageabout">
            <Image
              paddingTop={30}
              src="http://localhost:8080/resources/aboutus.jpg"
            />{' '}
          </div>
          <div>
            <Box mt={isNotSmallerScreen ? '0' : 16} align="flex-start">
              <Text className="text">Welcome, </Text>
              <Text
                className="font"
                fontWeight="bold"
                fontSize={30}
                paddingBottom={10}
              >
                We’re Skillery, and this is our Story :){' '}
              </Text>
              <Text fontSize="17px" fontWeight="">
                Skillery was a dream which was envisioned 4 months back to make
                programming education easy and accessible for Indian students.
                We designed a program which is market oriented, fun to learn and
                focus on setting a strong base for a programming career. Our
                students are an asset for any team from day one, and trained to
                be Supercoders.{' '}
              </Text>
            </Box>
          </div>
        </Flex>
      </HStack>
      <HStack>
        <div>
          <Flex
            rounded="l"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="33vh"
            w="33vh"
            justify="flex-end"
            _hover={{ bg: 'teal.400' }}
            marginLeft={20}
          >
            <Image src="http://localhost:8080/resources/avataricons/5co-f.svg" />
            <Text color="black" p="4" fontSize="l" fontWeight="semibold">
              Abhay Ray
            </Text>
          </Flex>
        </div>
        <div>
          <Flex
            rounded="l"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="33vh"
            w="33vh"
            justify="flex-end"
            _hover={{ bg: 'teal.400' }}
            marginLeft={10}
          >
            <Image src="http://localhost:8080/resources/avataricons/1co-f.svg" />
            <Text color="black" p="4" fontSize="l" fontWeight="semibold">
              Shubham Chandwani
            </Text>
          </Flex>
        </div>
        <div>
          <Flex
            rounded="l"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="33vh"
            w="33vh"
            justify="flex-end"
            _hover={{ bg: 'teal.400' }}
            marginLeft={10}
          >
            <Image src="http://localhost:8080/resources/avataricons/2co-f.svg" />
            <Text color="black" p="4" fontSize="l" fontWeight="semibold">
              Tanmay Pawar
            </Text>
          </Flex>
        </div>
        <div>
          <Flex
            rounded="l"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="33vh"
            w="33vh"
            justify="flex-end"
            _hover={{ bg: 'teal.400' }}
            marginLeft={10}
          >
            <Image src="http://localhost:8080/resources/avataricons/4co-f.svg" />
            <Text color="black" p="4" fontSize="l" fontWeight="semibold">
              Ashutosh Rawat
            </Text>
          </Flex>
        </div>
        <div>
          <Flex
            rounded="l"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="33vh"
            w="33vh"
            justify="flex-end"
            _hover={{ bg: 'teal.400' }}
            marginLeft={10}
          >
            <Image src="http://localhost:8080/resources/avataricons/3co-f.svg" />
            <Text color="black" p="4" fontSize="l" fontWeight="semibold">
              Tanmay Umredkar
            </Text>
          </Flex>
        </div>
      </HStack>

      <br />
    </Stack>
  );
}

export default Aboutus;
