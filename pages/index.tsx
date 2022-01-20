import type {NextPage} from 'next'
import Head from 'next/head'
import {Box, Center, Container, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import client from "../apollo-client";
import gql from "graphql-tag";

const Home: NextPage = ({rickCount}) => {
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

      <Container pt={8}>
        <UnorderedList>
          <ListItem><Text><b>O número de Ricks encontrado foi:</b> {rickCount}</Text></ListItem>
        </UnorderedList>
      </Container>
    </Box>
  )
}

const GET_COUNT_OF_RICKS = `
  query {
    characters(filter: { name: "rick" }) {
      info {
        count
      }
    }
  }
`

export async function getStaticProps() {
  const {data} = await client.query({
    query: gql(GET_COUNT_OF_RICKS)
  })

  return {
    props: {
      rickCount: data.characters.info.count,
    }
  }
}

export default Home