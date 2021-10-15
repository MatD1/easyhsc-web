import { Box, Button, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'

export const HomeCTA = () => {
  return (
    <Box as="section">
      <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: '6',
          lg: '8',
        }}
        py={{
          base: '16',
          sm: '20',
        }}
        textAlign="center"
      >
        <Text fontWeight="semibold" color={useColorModeValue('blue.600', 'blue.200')}>
          EASYHSC
        </Text>
        <Heading
          my="4"
          as="h2"
          fontSize={{
            base: '4xl',
            md: '6xl',
          }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
        >
          Get your HSC papers easily by category{' '}
          <Box
            as="mark"
            bg="unset"
            color={useColorModeValue('blue.600', 'blue.200')}
            whiteSpace="nowrap"
          >
            EasyHSC
          </Box>
        </Heading>
        <Text fontSize="lg" maxW="xl" mx="auto">
          EASYHSC is built with ease of use in mind, simply click the big blue button below to choose from a list of categories of HSC subjects then simply press the green button to see the list of past papers!
        </Text>
        <Stack
          direction={{
            base: 'column',
            sm: 'row',
          }}
          mt="10"
          justify="center"
          spacing={{
            base: '3',
            md: '5',
          }}
          maxW="md"
          mx="auto"
        >
        <Link href="/categorys">
          <Button
            as="a"
            href="#"
            size="lg"
            h="16"
            px="10"
            colorScheme="blue"
            fontWeight="bold"
            flex={{
              md: '1',
            }}
          >
            Categories
          </Button>
        </Link>
        </Stack>
      </Box>
    </Box>
  )
}
