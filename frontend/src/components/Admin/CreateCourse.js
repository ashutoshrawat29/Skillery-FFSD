import { Container, Grid, Heading, Input, Select, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

function CreateCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [imagePrev, setImagePrev] = useState("");
    const changeImageHandler = () => {
      console.log("Image changed");
    }
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
      <Container py="16">
        <form>
          <Heading
            textTransform="uppercase"
            children="Create Course"
            my="16"
            textAlign={['center', 'left']}
          />
          <VStack m="auto" spacing="8">
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" type="text" focusBorderColor="purple.300" />
            <Input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" type="text" focusBorderColor="purple.300" />
            <Input value={createdBy} onChange={e => setCreatedBy(e.target.value)} placeholder="Creator Name" type="text" focusBorderColor="purple.300" />
            <Select focusBorderColor="purple.300" value={category} onChange={e => setCategory(e.target.value)} >
                <option value="">Category</option>
                {categories.map(category => (<option key={category}>{category}</option>))}
            </Select>
            <Input accept="image/*" type="file" focusBorderColor="purple.300" onChange={changeImageHandler} />
          </VStack>
        </form>
      </Container>
    </Grid>
  );
}

export default CreateCourse;
