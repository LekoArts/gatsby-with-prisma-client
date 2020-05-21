import * as React from 'react'
import { PageProps, Link as GLink } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Link } from '@chakra-ui/core'
import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'

type Authors = {
  authors: {
    id: number
    name: string
    bio: string
  }[]
}

const Authors: React.FC = ({ pageContext }: PageProps<null, Authors>) => {
  const { authors } = pageContext
  return (
    <Layout>
      <Helmet title="All Authors" />
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={GLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Authors</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Header>List of Authors</Header>
      <Stack>
        {authors.map((author) => (
          <Box key={author.id} fontSize="lg">
            <Link as={GLink} to={`/author/${author.id}`}>
              {author.name}
            </Link>
          </Box>
        ))}
      </Stack>
      <Footer />
    </Layout>
  )
}

export default Authors
