import { Post } from "@/api/types"

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <span className="cursor-pointer text-blue-500 border-d border-blue-500 hover:bg-gray-200">
        {post.title}
      </span>
    </div>
  )
}
