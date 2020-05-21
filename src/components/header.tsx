import * as React from 'react'
import { Heading, Box } from '@chakra-ui/core'

const Header: React.FC = ({ children }) => {
  return (
    <Box as="header" mt={4} mb={6}>
      <Heading as="h1" size="2xl">
        {children}
      </Heading>
    </Box>
  )
}

export default Header
