import * as React from 'react'
import { Link as GLink } from 'gatsby'
import { Box, Heading, Stack, Icon, Link } from '@chakra-ui/core'

type Item = {
  id: number
  title: string
  date: string
  authorName: string
  author: {
    id: number
    name: string
    bio: string
  }
  categories: {
    id: number
    name: string
  }[]
}

const ListItem: React.FC<{ item: Item; hideAuthor?: boolean }> = ({ item, hideAuthor = false, ...rest }) => {
  const d = new Date(item.date)
  const dtfUS = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' })
  const date = dtfUS.format(d)

  return (
    <Box bg="gray.50" borderRadius="md" padding={4} {...rest}>
      <Heading as="h2" size="lg" color="gray.800">
        {item.title}
      </Heading>
      <Stack isInline mt={4} spacing={6}>
        <Stack isInline align="center">
          <Icon name="time" />{' '}
          <Box fontWeight="medium" color="gray.600">
            {date}
          </Box>
        </Stack>
        {!hideAuthor && (
          <Stack isInline align="center">
            <Icon name="edit" />{' '}
            <Box fontWeight="medium" color="gray.600" minWidth="150px">
              <Link as={GLink} to={`/author/${item.author.id}`}>
                {item.authorName}
              </Link>
            </Box>
          </Stack>
        )}
        <Stack isInline align="center">
          <Icon name="info-outline" />
          <Stack isInline align="center">
            {item.categories.map((category) => (
              <Box
                key={category.id}
                bg="blue.100"
                px={2}
                fontSize="sm"
                fontWeight="medium"
                color="blue.700"
                borderRadius="md"
              >
                <Link as={GLink} to={`/category/${category.id}`}>
                  {category.name}
                </Link>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default ListItem
