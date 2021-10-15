import { Text } from '@chakra-ui/layout'
import * as React from 'react'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} EasyHSC, Inc. All rights reserved.
    <br />
    &copy; {new Date().getFullYear()} Department of Education - NESA Australia,  All rights reserved.
  </Text>
)
