import { Post } from './types/index'

export const getAllPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: 'force-cache',
  })
  const posts = await res.json()
  return posts
}
