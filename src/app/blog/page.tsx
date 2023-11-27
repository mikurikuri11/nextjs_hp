import { getAllPosts } from "@/api/getAllPosts";
import { PostCard } from "@/components/ui/PostCard";

const page = async () => {
  const posts = await getAllPosts();
  return (
    <ul className="m-10">
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </ul>
  )
}

export default page;