import { Post } from './types/index'

export const getPost = async (slug: string): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    cache: 'force-cache',
  })
  const posts = await res.json()
  return posts
}
