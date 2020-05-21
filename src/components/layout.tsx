import * as React from 'react'
import { Box } from '@chakra-ui/core'

const Layout: React.FC = ({ children }) => {
  return (
    <Box marginX="auto" marginY={6} padding={6} maxWidth="1000px">
      {children}
    </Box>
  )
}

export default Layout
