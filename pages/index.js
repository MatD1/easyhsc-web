import {Heading, Text, Button, Badge, Icon, HStack, VStack, Center} from '@chakra-ui/react'
import { HomeCTA } from '../components/homeCta'

export default function Home() {
  return (
    <VStack maxH="1000px">
      <Center>
        <HomeCTA />
      </Center>
    </VStack>
  )
}
