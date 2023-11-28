import { getPost } from "@/api/getPost";
import Link from "next/link";
import { FaBackward } from "react-icons/fa6";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const post = await getPost(slug);

  return (
    <>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog">
        <div className="flex cursor-pointer mt-12">
          <FaBackward className="w-6 h-6 mr-3" />
          <span>Back to blog page</span>
        </div>
      </Link>
    </>
  )
}

export default page;