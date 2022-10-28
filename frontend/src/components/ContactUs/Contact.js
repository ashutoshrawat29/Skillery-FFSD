import { Box, Button, Container, FormLabel, FormControl, FormErrorMessage, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState({
        name: false,
        email: false,
        message: false,
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
        else if (email === '') {
            setError({ ...error, email: true });
            return;

        }
        else if (ValidateEmail(email) === false) {
            setError({ ...error, email: true });
            return;
        }
        else if (message === '') {
            setError({ ...error, message: true });
            return;
        }
        console.log(name, email, message);
    }

    return (
        <Container minH={'95vh'} maxW="container.lg" paddingY="8">
            <VStack h="full" justifyContent="center" spacing="16">
                <Heading children="Contact Us" m={'8'} />
                <form style={{ width: "100%" }} onSubmit={submitHandler}>
                    <FormControl my="4" isInvalid={error.name}>
                        <FormLabel htmlFor='name' children="Name" />
                        <Input
                            id="name"
                            value={name}
                            onChange={e => {
                                setName(e.target.value);
                                if (e.target.value === '') {
                                    setError({ ...error, name: true });
                                }
                                else {
                                    setError({ ...error, name: false });
                                }
                            }}
                            placeholder="Abhay Ray"
                            type="text"
                            focusBorderColor='yellow.500'
                        />
                        <FormErrorMessage>Name is required.</FormErrorMessage>
                    </FormControl>
                    <FormControl my="4" isInvalid={error.email}>
                        <FormLabel htmlFor='email' children="Email Address" />
                        <Input
                            id="email"
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value);
                                if(e.target.value === ''){
                                    setError({...error, email: true});
                                }
                                else{
                                    setError({...error, email: false});
                                }
                            }}
                            placeholder="abc@gmail.com"
                            focusBorderColor='yellow.500'
                        />
                        {email.length !== 0 && <FormErrorMessage>Not a valid email type</FormErrorMessage>}
                        {email.length === 0 && <FormErrorMessage>Email is required.</FormErrorMessage>}
                    </FormControl>
                    <FormControl my="4" isInvalid={error.message}>
                        <FormLabel htmlFor='message' children="Message" />
                        <Textarea
                            id="message"
                            value={message}
                            onChange={e => {
                                setMessage(e.target.value);
                                if (e.target.value === '') {
                                    setError({ ...error, message: true });
                                }
                                else {
                                    setError({ ...error, message: false });
                                }

                            }}
                            placeholder="Your Message..."
                            focusBorderColor='yellow.500'
                        />
                    <FormErrorMessage>Message is required.</FormErrorMessage>
                    </FormControl>
                    <Button my="4" colorScheme="yellow" type="submit">
                        Send Message
                    </Button>
                    <Box my="4">
                        Request for a course?{' '}
                        <Link to="/request">
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

export default Contact;
