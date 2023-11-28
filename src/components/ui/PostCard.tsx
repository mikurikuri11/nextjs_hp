import { Post } from "@/api/types"
import Link from "next/link"

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/blog/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-d border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  )
}
