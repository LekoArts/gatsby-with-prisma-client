import { PrismaClient } from '@prisma/client'
import { GatsbyNode } from 'gatsby'

const prisma = new PrismaClient()

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions

  const booksComplete = await prisma.book.findMany({
    include: {
      author: true,
      categories: true,
    },
  })

  const authorsComplete = await prisma.author.findMany({
    include: {
      books: {
        include: {
          categories: true,
        },
      },
    },
  })

  const authors = await prisma.author.findMany()

  const categoriesComplete = await prisma.category.findMany({
    include: {
      books: {
        include: {
          author: true,
          categories: true,
        },
      },
    },
  })

  const categories = await prisma.category.findMany()

  createPage({
    component: require.resolve(`./src/templates/index.tsx`),
    path: `/`,
    context: {
      books: booksComplete,
    },
  })

  authorsComplete.forEach((author) => {
    createPage({
      component: require.resolve(`./src/templates/author.tsx`),
      path: `/author/${author.id}`,
      context: {
        author,
      },
    })
  })

  createPage({
    component: require.resolve(`./src/templates/authors.tsx`),
    path: `/authors`,
    context: {
      authors,
    },
  })

  createPage({
    component: require.resolve(`./src/templates/categories.tsx`),
    path: `/categories`,
    context: {
      categories,
    },
  })

  categoriesComplete.forEach((category) => {
    createPage({
      component: require.resolve(`./src/templates/category.tsx`),
      path: `/category/${category.id}`,
      context: {
        category,
      },
    })
  })
}
