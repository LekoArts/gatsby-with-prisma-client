import * as React from 'react'
import { PageProps, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, Heading } from '@chakra-ui/core'
import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'
import ListItem from '../components/list-item'
import { Book } from '../types'

type Category = {
  category: {
    id: number
    name: string
    bio: string
    books: Book[]
  }
}

const Category: React.FC = ({ pageContext }: PageProps<null, Category>) => {
  const { category } = pageContext

  return (
    <Layout>
      <Helmet title={category.name} />
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/categories">
            Categories
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{category.name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Header>{category.name}</Header>
      <Text fontSize="lg">{category.bio}</Text>
      <Heading size="lg" mt={10}>
        List of Books wit the category <em>{category.name}</em>
      </Heading>
      <Stack spacing={8} as="main" paddingY={6}>
        {category.books.map((category) => (
          <ListItem key={category.id} item={category} />
        ))}
      </Stack>
      <Footer />
    </Layout>
  )
}

export default Category
