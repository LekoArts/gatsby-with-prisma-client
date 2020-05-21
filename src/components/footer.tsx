import * as React from 'react'
import { Text, Link, Box } from '@chakra-ui/core'

const Footer: React.FC = () => {
  return (
    <Box as="footer" borderTopColor="gray.100" borderTopStyle="solid" borderTopWidth="1px" py={4} mt={10}>
      <Text color="gray.700">
        This is an example showing how to use{' '}
        <Link isExternal href="https://gatsbyjs.org">
          Gatsby
        </Link>{' '}
        with{' '}
        <Link isExternal href="https://prisma.io">
          Prisma
        </Link>
        . Made by{' '}
        <Link isExternal href="https://www.lekoarts.de">
          LekoArts
        </Link>
        .
      </Text>
    </Box>
  )
}

export default Footer
