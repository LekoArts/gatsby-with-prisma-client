import * as React from 'react'
import { PageProps, Link as GLink } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Link } from '@chakra-ui/core'
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
      <Helmet title="All Categories" />
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
      <Header>List of Categories</Header>
      <Stack>
        {categories.map((category) => (
          <Box key={category.id} fontSize="lg">
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
