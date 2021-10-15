import { Alert, AlertIcon, AlertDescription, Heading, Button, Box, Grid, Icon, VStack } from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link'
import {BsDoorClosed} from 'react-icons/bs'
import Head from 'next/head'

const Categorys = ({ papers, error }) => {
  if (error) {
    return (
      <>
      <Head>
        <title>EasyHSC Categories</title>
      </Head>
    <Alert>
      <AlertIcon />
      <AlertDescription> An error occured try to reload the page if the error continues, contact me the devloper if you know me! If not start a discussion on GitHub</AlertDescription>
    </Alert>
    </>
    )
  }
  return (
      <VStack>  
        <Grid templateRows="repeat(5, 1fr)" gap={6} pl={4} pb={10} pr={4}>
          {papers.map(paper => ( 
          <Box w="100%" h="10" mb={10}>
            <Heading>{paper.name}</Heading>
            <Link href={`/${paper.web_link}`}>
              <Button rightIcon={<Icon as={BsDoorClosed} />} colorScheme="orange">See Papers</Button>
            </Link>
          </Box>
          ))}
        </Grid>
      </VStack>
  );
};

Categorys.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://api-easyhsc.herokuapp.com/Categories');
    const papers = res.data;
    console.log(res)
    return { papers };
  } catch (error) {
      console.log(error)
    return { error };
  }
};

export default Categorys;