export type Book = {
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
