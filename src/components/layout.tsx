import * as React from 'react'
import { Box } from '@chakra-ui/core'
import { Helmet } from 'react-helmet'

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s | Gatsby + Prisma" defaultTitle="Gatsby + Prisma" />
      <Box marginX="auto" marginY={6} padding={6} maxWidth="1000px">
        {children}
      </Box>
    </React.Fragment>
  )
}

export default Layout
