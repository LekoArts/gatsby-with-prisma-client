import * as React from 'react'
import { PageProps, Link as GLink } from 'gatsby'
import { Box, Stack, Icon, Link } from '@chakra-ui/core'
import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'
import ListItem from '../components/list-item'
import { Book } from '../types'

type Books = {
  books: Book[]
}

const Index: React.FC = ({ pageContext }: PageProps<null, Books>) => {
  const { books } = pageContext
  return (
    <Layout>
      <Header>Gatsby + Prisma</Header>
      <Stack isInline spacing={4}>
        <Link as={GLink} to={`/authors`}>
          <Box bg="orange.100" px={3} py={1} borderRadius="lg" fontWeight="medium" color="orange.800">
            All authors <Icon name="arrow-forward" />
          </Box>
        </Link>
        <Link as={GLink} to={`/categories`}>
          <Box bg="green.100" px={3} py={1} borderRadius="lg" fontWeight="medium" color="green.800">
            All categories <Icon name="arrow-forward" />
          </Box>
        </Link>
      </Stack>
      <Stack spacing={8} as="main" paddingY={12}>
        {books.map((book) => (
          <ListItem key={book.id} item={book} />
        ))}
      </Stack>
      <Footer />
    </Layout>
  )
}

export default Index
