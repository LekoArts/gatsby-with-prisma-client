import * as React from 'react'
import { PageProps, Link as GLink } from 'gatsby'
import { Box, Stack, Icon, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, Heading, Link } from '@chakra-ui/core'
import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'

type Categories = {
  categories: {
    id: number
    name: string
  }[]
}

const Categories: React.FC = ({ pageContext }: PageProps<null, Categories>) => {
  const { categories } = pageContext
  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={GLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Categories</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Header>List of Authors</Header>
      <Stack>
        {categories.map((category) => (
          <Box key={category.id}>
            <Link as={GLink} to={`/category/${category.id}`}>
              {category.name}
            </Link>
          </Box>
        ))}
      </Stack>
      <Footer />
    </Layout>
  )
}

export default Categories
