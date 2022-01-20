import type {NextPage} from 'next'
import Head from 'next/head'
import {Box, Center, Heading} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="A simple Rick and Morty application for testing purposes"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Center bg="brand.500" color="white" pt={16} pb={8}>
        <Heading fontWeight={100}>Rick and Morty</Heading>
      </Center>
    </Box>
  )
}

export default Home