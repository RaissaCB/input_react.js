
import React,{useState, FormEvent} from "react";
import {  Flex, Image, Button, Text } from '@chakra-ui/core'
import axios from 'axios';
import Input from '../components/Input'


export default function Home() {

  const [email, setEmail] =useState('');

  function handleSignUpToNewsletter(event: FormEvent){
 event.preventDefault();

    axios.post('/api/subscribe', {email });
  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%" 
        maxW="400px"
      >
        
        <Text > Digite Seu email </Text>
        
  
        <Input
          placeholder="Seu e-mail"
          marginTop={2}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
  
        <Button
          type="submit"
          height="50px"
          borderRadius="sm"
          marginTop={6}
         
        >
          INSCREVER
        </Button>
      </Flex>
    </Flex>
  )
}
