import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import SuccessModal from '../Layout/SuccessModal/SuccessModal';

function CreateCourse({ coursesHandler }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [error, setError] = useState({
    title: false,
    description: false,
    createdBy: false,
    category: false,
    image: false,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const submitHandler = e => {
    e.preventDefault();
    if (title === '') {
      setError({ ...error, title: true });
    } else if (description === '') {
      setError({ ...error, description: true });
    } else if (createdBy === '') {
      setError({ ...error, createdBy: true });
    } else if (category === '') {
      setError({ ...error, category: true });
    } else {
      coursesHandler({
        title,
        description,
        creator: createdBy,
        imageSrc: image,
        id: crypto.randomUUID(),
      });
      onOpen();
    }
  };
  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Strcuture and Algorithms',
    'Game Development',
    'Blockchain',
    'Machine Learning',
    'App Development',
  ];
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <SuccessModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} successText={"The course is successfully added."} buttonText={"Browse All Courses"} buttonLink={"/courses"} colorTheme={"purple"}  />
      <Container py="16">
        <form onSubmit={submitHandler}>
          <Heading
            textTransform="uppercase"
            children="Create Course"
            my="16"
            textAlign={['center', 'left']}
          />
          <VStack m="auto" spacing="8">
            <FormControl isInvalid={error.title}>
              <Input
                value={title}
                onChange={e => {
                  setTitle(e.target.value);
                  if (e.target.value === '') {
                    setError({ ...error, title: true });
                  } else {
                    setError({ ...error, title: false });
                  }
                }}
                placeholder="Title"
                type="text"
                focusBorderColor="purple.300"
              />
              <FormErrorMessage>Course title is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.description}>
              <Input
                value={description}
                onChange={e => {
                  setDescription(e.target.value);
                  if (e.target.value === '') {
                    setError({ ...error, description: true });
                  } else {
                    setError({ ...error, description: false });
                  }
                }}
                placeholder="Description"
                type="text"
                focusBorderColor="purple.300"
              />
              <FormErrorMessage>
                Course Description is required.
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.createdBy}>
              <Input
                value={createdBy}
                onChange={e => {
                  setCreatedBy(e.target.value);
                  if (e.target.value === '') {
                    setError({ ...error, createdBy: true });
                  } else {
                    setError({ ...error, createdBy: false });
                  }
                }}
                placeholder="Creator Name"
                type="text"
                focusBorderColor="purple.300"
              />
              <FormErrorMessage>Creator name is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.category}>
              <Select
                focusBorderColor="purple.300"
                value={category}
                onChange={e => {
                  setCategory(e.target.value);
                  if (e.target.value === '') {
                    setError({ ...error, category: true });
                  } else {
                    setError({ ...error, category: false });
                  }
                }}
              >
                <option value="">Category</option>
                {categories.map(category => (
                  <option key={category}>{category}</option>
                ))}
              </Select>
              <FormErrorMessage>Category is required.</FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input
                accept="image/*"
                type="file"
                focusBorderColor="purple.300"
                css={{
                  '&::file-selector-button': {
                    cursor: 'pointer',
                    width: '110%',
                    marginLeft: '-5%',
                    border: 'none',
                    height: '100%',
                    color: 'purple',
                    backgroundColor: '#FFFFFF',
                  },
                }}
                onChange={changeImageHandler}
              />
            </FormControl>
            {imagePrev && (
              <Image src={imagePrev} boxSize="64" objectFit="contain" />
            )}
            <Button w="full" colorScheme="purple" type="submit">
              Create
            </Button>
          </VStack>
        </form>
      </Container>
    </Grid>
  );
}

export default CreateCourse;
