import { Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Radio, RadioGroup, Textarea, VStack, } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Request() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [level, setLevel] = useState('Beginners');
  const [error, setError] = useState({
    name: false,
    email: false,
    course: false,
    level: false,
  });
  function ValidateEmail(x) {

    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        return false;
    }
    return true;
  } 
  function submitHandler(e) {
    e.preventDefault();
    if (name === '') {
        setError({ ...error, name: true });
        return;
    }
    else if(email === ''){
        setError({ ...error, email: true });
        return;
    }
    else if(course === ''){
        setError({ ...error, course: true });
        return;
    }
    else if(ValidateEmail(email) === false){
        setError({ ...error, email: true });
        return;
    }
    else if(level === ''){
        setError({ ...error, level: true });
        return;
      }
    console.log(name, email, course,level);

  }
  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY="8">
      <VStack h="full" justifyContent="center" spacing="16">
        <Heading children="Request New Course" m={'8'} />
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <FormControl my="4" isInvalid={error.name}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              id="name"
              value={name}
              onChange={e => {
                setName(e.target.value);
                if (e.target.value === '') {
                  setError({ ...error, name: true });
                }
                else{
                    setError({ ...error, name: false });
                }
              }}
              placeholder="Abhay Ray"
              type="text"
              focusBorderColor="yellow.500"
            />
            <FormErrorMessage>Name is required.</FormErrorMessage>
          </FormControl>
          <FormControl my="4" isInvalid={error.email}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              id="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                if(ValidateEmail(e.target.value) === false){
                  setError({...error, email: true});
              }
              else{
                  setError({...error, email: false});

              }
                if (e.target.value === '') {
                  setError({ ...error, email: true });
                }
                else{
                    setError({ ...error, email: false });
                }
              }}
              placeholder="abc@gmail.com"
              // type="email"
              focusBorderColor="yellow.500"
            />
          {!email.length==0 &&<FormErrorMessage>Not a valid email type</FormErrorMessage>}

          { email.length===0 && <FormErrorMessage>Email is required.</FormErrorMessage>}
          </FormControl>
          <FormControl my="4" isInvalid={error.course}>
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              id="course"
              value={course}
              onChange={e => {
                setCourse(e.target.value);
                if (e.target.value === '') {
                  setError({ ...error, course: true });
                }
                else{
                    setError({ ...error, course: false });
                }
              }}
              placeholder="Explain the course..."
              focusBorderColor="yellow.500"
            />
            <FormErrorMessage>Course Description is required.</FormErrorMessage>
          </FormControl>
          <FormControl my="4">
            <FormLabel htmlFor="level" children="Level of Course" />
            <RadioGroup
              colorScheme="yellow"
              defaultValue={level}
              onChange={e => setLevel(e)}
            >
              <HStack spacing="24px">
                <Radio value="Introductory">Introductory</Radio>
                <Radio value="Beginners">Beginners</Radio>
                <Radio value="Professional">Professional</Radio>
                <Radio value="Advance">Advance</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <Button my="4" colorScheme="yellow" type="submit">
            Send Request
          </Button>
          <Box my="4">
            Check available courses!{' '}
            <Link to="/courses">
              <Button colorScheme="yellow" variant="link">
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Request;
