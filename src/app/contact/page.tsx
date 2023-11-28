import Image from "next/image";

import { FaFacebook, FaGithub, FaSquareXTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
      <div className="mt-4">
        <p className="font-bold">Contact info</p>
      </div>
      <div className="flex justify-center mt-4">
        <Image
          className="rounded-full"
          src="/avatar.jpg"
          width={60}
          height={60}
          alt="Avatar"
        />
      </div>
      <div className="mt-4">
        <p className="font-bold">Address</p>
        <p className="text-xs mt-2 text-gray-600">city A</p>
        <p className="font-bold mt-3">E-mail</p>
        <p className="text-xs mt-2 text-gray-600">abc@gmail.com</p>
        <p className="font-bold mt-3">Phone</p>
        <p className="text-xs mt-2 text-gray-600">000-123-456</p>
      </div>
      <div className="mt-6 flex justify-around">
        <FaSquareXTwitter className="text-2xl" />
        <FaFacebook className="text-2xl" />
        <FaGithub className="text-2xl" />
      </div>
    </div>
  )
}

export default page;