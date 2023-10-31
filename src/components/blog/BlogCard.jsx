"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import moment from "moment";

const BlogCard = ({ blog }) => {
  const parse = require("html-react-parser");
  const router = useRouter();
  return (
    <div
      className="blog-item rounded-md card cursor-pointer"
      onClick={() => {
        router.push(`/blog/${blog?.slug}`);
      }}
    >
      <div className="blog-image">
        <Image
          src={blog?.image}
          alt="Blog"
          width={400}
          height={225}
          className="w-full h-[225px] rounded-t-md object-contain"
        />
      </div>
      <div className="blog-content p-5">
        <div>
          <span className="w-full text-sm text-md font-semibold text-primary text-left">
            {moment(blog?.updated_at).format("Do MMMM YYYY")} &nbsp;|&nbsp;
          </span>
          <Link
            href={`/category/${blog?.subcategory?.slug}`}
            className="text-sm text-md font-semibold mb-3 mt-[30px] hover:text-[#dc5914]"
          >
            {blog?.subcategory?.name}
          </Link>
        </div>
        <Link href={`/blog/${blog?.slug}`}>
          <h3 className="blog-title capitalize text-[22px] font-semibold">
            {blog?.title}
          </h3>
        </Link>
        <p className="py-3 h-[85px] overflow-hidden">
          {parse(`${blog?.body}`.slice(0, 150))}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
