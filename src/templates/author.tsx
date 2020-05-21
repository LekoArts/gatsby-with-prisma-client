import * as React from 'react'
import { PageProps, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, Heading } from '@chakra-ui/core'
import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'
import ListItem from '../components/list-item'
import { Book } from '../types'

type Author = {
  author: {
    id: number
    name: string
    bio: string
    books: Book[]
  }
}

const Author: React.FC = ({ pageContext }: PageProps<null, Author>) => {
  const { author } = pageContext
  return (
    <Layout>
      <Helmet title={author.name} />
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/authors">
            Authors
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{author.name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Header>{author.name}</Header>
      <Text fontSize="lg">{author.bio}</Text>
      <Heading size="lg" mt={10}>
        List of Books
      </Heading>
      <Stack spacing={8} as="main" paddingY={6}>
        {author.books.map((book) => (
          <ListItem hideAuthor key={book.id} item={book} />
        ))}
      </Stack>
      <Footer />
    </Layout>
  )
}

export default Author
