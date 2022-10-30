import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [enteredEmail, setEnteredEmail] = useState('');

    const [enteredPwd, setEnteredpwd] = useState('');

    const [error,setError] = useState({
        enteredEmail: false,
        enteredPwd: false
    })

    function ValidateEmail(x) {
        var atposition = x.indexOf("@");
        var dotposition = x.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
            return false;
        }
        return true;
    }


    const EmailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        if(event.target.value===''){
            setError({...error,enteredEmail: 'Email is Required'})
        }

        else{
            setError({...error,enteredEmail: false});
        }
    };

    const pwdChangeHandler = (event) => {
        setEnteredpwd(event.target.value);
        if(event.target.value===''){
            setError({...error,enteredPwd:true});
        }
        else{
            setError({...error,enteredPwd:false});
        }
    };


    const submitHandler = (event) => {
        event.preventDefault();

        if(enteredEmail===''){
            setError({...error,enteredEmail:'Email is Required'});
        }

        else if(enteredPwd===''){
            setError({...error,enteredPwd: true})

        }

        else if(ValidateEmail(enteredEmail) === false) {
            setError({ ...error, enteredEmail: 'Enter valid Email Id' });
        }

        else{

        const submittedData = {
            email: enteredEmail,
            password: enteredPwd
        };

        console.log(submittedData);
    }
    }


    return (
        <Container minH={'85vh'} maxW="container.sm" paddingY="8">
            <VStack h="full" justifyContent="center" spacing="16">

                <Heading children="Welcome to Skillery" m={'8'} />

                <form onSubmit={submitHandler}style={{width: "100%"}}>
                <FormControl isInvalid={error.enteredEmail}>
                    <FormLabel htmlFor="email" children="Email"/>

                    <Input type="text" id="email" name="email" value={enteredEmail} onChange={EmailChangeHandler}
                    focusBorderColor='yellow.500' />
                    <FormErrorMessage>{error.enteredEmail}</FormErrorMessage>
                    </FormControl>
                
                <FormControl my="4" isInvalid={error.enteredPwd}>
                    <FormLabel htmlFor="pwd" children="Password"/>
                        

                    <Input type="password" id="pwd" name="pwd" value={enteredPwd} onChange={pwdChangeHandler} autoComplete="on"
                    focusBorderColor='yellow.500'/>
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                    </FormControl>   
                    <Button my="4" colorScheme="yellow" type="submit">
                Submit
            </Button>

            <Box my="4">
                Click here to{' '}
                <Link to="/register">
                    <Button colorScheme="yellow" variant="link">
                        SignUp
                    </Button>
                    
                </Link>
            </Box>
                    {/* <h3>Click  here to <Link to='/SignUp'>SignUp</Link></h3> */}
                </form>
            </VStack>
        </Container>
    );
};

export default Login;

