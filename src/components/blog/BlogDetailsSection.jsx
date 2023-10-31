"use client";
import { SectionContainer } from "@/components/layout.component";
import {
  PageTitle,
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import axiosServices from "@/utils/axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";
import { useSelector } from "react-redux";
import Iconify from "@/components/iconify";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { OutlinedButton } from "../buttons.component";

function BlogDetailsSection() {
  const router = useRouter();
  const { blog } = useSelector((state) => state.blog);
  const parse = require("html-react-parser");
  const params = useParams();
  const [blogDetailsData, setBlogDetailsData] = useState(undefined);
  const [categoryBlogList, setCategoryBlogList] = useState(undefined);
  console.log(params, "useParams");

  useEffect(() => {
    axiosServices
      .get(`/api/blog_details?slug=${params?.slug}`)
      .then((res) => setBlogDetailsData(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axiosServices
      .get(`/api/blog_by_category?slug=${blogDetailsData?.subcategory?.slug}`)
      .then((res) => setCategoryBlogList(res?.data?.data))
      .catch((err) => console.log(err));
  }, [blogDetailsData]);

  const customStyle = {
    backgroundImage: `linear-gradient(to right, 
      rgba(39,61,80, 1), rgba(39,61,80, 1))`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "400px",
  };
  // if (!blogDetailsData) {
  //   return (
  //     <SectionContainer>
  //       <div className="py-10">Loading...</div>
  //     </SectionContainer>
  //   );
  // }
  return (
    <div className="mt-[-88px] mb-[90px]">
      <div
        className="py-14 md:py-20 lg:py-24 text-white flex items-center"
        style={customStyle}
      >
        <div className="w-full">
          <SectionContainer className="">
            {blogDetailsData ? (
              <div className="flex items-center">
                <div className="w-full">
                  <PageTitle>{blogDetailsData?.title}</PageTitle>
                  <span className="text-sm text-md font-semibold text-white mb-3 mt-[30px]">
                    {moment(blogDetailsData?.created_at).format("Do MMMM YYYY")}
                    &nbsp;|&nbsp;
                  </span>
                  <Link
                    href={`/category/${blogDetailsData?.subcategory?.slug}`}
                    className="text-sm text-md font-semibold text-white mb-3 mt-[30px] hover:text-red-600"
                  >
                    {blogDetailsData?.subcategory?.name}
                  </Link>
                </div>
              </div>
            ) : (
              <div role="status" className="w-full animate-pulse">
                <div className="h-10 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-2.5"></div>
                <div className="h-10 bg-gray-200 rounded-md dark:bg-gray-700 w-1/2 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-40 mb-4"></div>
              </div>
            )}
          </SectionContainer>
        </div>
      </div>
      {blogDetailsData ? (
        <SectionContainer className="py-10">
          <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-10 md:gap-5 gap-10 justify-between">
            <div className="md:col-span-2 col-span-1">
              <div>
                <Image
                  src={blogDetailsData?.image}
                  alt={blogDetailsData?.title}
                  height={500}
                  width={800}
                  className="h-full w-full rounded-2xl mb-5 "
                  style={{ aspectRatio: 16 / 9, objectFit: "cover" }}
                />
              </div>
              {/* <p className="text-sm text-md font-semibold mb-3">
                {moment(blogDetailsData?.created_at).format("DD/MM/YYYY")}
              </p> */}
              <div className="blog-body">
                {blogDetailsData?.body
                  ? parse(`${blogDetailsData?.body}`)
                  : "-"}
              </div>
              <div className="">
                <p className="text-xl font-bold mt-5 ">Share This Blog</p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <a
                  className="hover:text-[#BB04F4] hover:scale-150 duration-300 ease-out transition-all"
                  target="blank"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=spirehubs.com/blog/${params?.slug}&cancel`}
                >
                  <Iconify
                    icon="mdi:linkedin"
                    fontSize={30}
                    className="cursor-pointer"
                  />
                </a>
                <a
                  className="hover:text-[#BB04F4] hover:scale-150 duration-300 ease-out transition-all"
                  target="_blank"
                  href={`https://twitter.com/share?url=spirehubs.com/blog/${params?.slug}&cancel`}
                >
                  <Iconify icon="ri:twitter-fill" fontSize={30} />
                </a>
                <a
                  className="hover:text-[#BB04F4] hover:scale-150 duration-300 ease-out transition-all"
                  href={`https://www.facebook.com/sharer/sharer.php?u=spirehubs.com/blog/${params?.slug}&cancel`}
                  target="blank"
                >
                  <Iconify icon="ic:outline-facebook" fontSize={30} />
                </a>
              </div>
            </div>
            <div className="w-full sticky top-0 table-of-content">
              <div className="w-full  py-5 flex flex-col gap-4 sticky top-0">
                <SectionSubTitle>
                  <span className="font-extrabold">Recent Post</span>
                </SectionSubTitle>
                <div className="flex flex-col gap-3">
                  {blog &&
                    blog.map((blog, key) => (
                      <div
                        key={key}
                        className="flex items-center gap-4 hover:text-[#DD642A] cursor-pointer"
                        onClick={() => {
                          router.push(`/blog/${blog?.slug}`);
                        }}
                      >
                        <Image
                          src={blog?.image}
                          width={150}
                          height={150}
                          className="h-full w-full object-fit max-w-[80px] max-h-[80px]"
                        />
                        <div className="flex flex-col gap-1 items-center">
                          <p className="blog-title text-left font-semibold">
                            {blog?.title}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  <SectionSubTitle>
                    <span className="font-extrabold">Categories</span>
                  </SectionSubTitle>
                  <Link
                    className={`hover:text-[#DD642A]`}
                    href="/category/web-design"
                  >
                    Web Design
                  </Link>
                  <Link
                    className={`hover:text-[#DD642A]`}
                    href="/category/web-development"
                  >
                    Web Development
                  </Link>
                  <Link
                    className={`hover:text-[#DD642A] `}
                    href="/category/mobile-app-development"
                  >
                    Mobile App Development
                  </Link>
                  <Link
                    className={`hover:text-[#DD642A] `}
                    href="/category/software-maintenance"
                  >
                    Software Maintenance
                  </Link>
                  <Link
                    className={`hover:text-[#DD642A]`}
                    href="/category/digital-marketing"
                  >
                    Digital Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      ) : (
        <SectionContainer>
          <div
            role="status"
            className="space-y-8 py-10 animate-pulse md:space-y-0 md:space-x-8 flex flex-col gap-5"
          >
            <div className="flex items-center justify-center w-full h-96 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
          </div>
        </SectionContainer>
      )}
      {categoryBlogList && categoryBlogList.length > 1 && (
        <SectionContainer className="py-10">
          <hr />
          <div className="w-full my-5 flex items-center justify-between">
            <p className="text-xl font-bold">Related Post</p>
            <OutlinedButton url="/blog">View All</OutlinedButton>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {categoryBlogList &&
              categoryBlogList.map(
                (blog, key) =>
                  blog?.slug !== params?.slug && (
                    <BlogCard blog={blog} key={key} />
                  )
              )}
          </div>
        </SectionContainer>
      )}
    </div>
  );
}

export default BlogDetailsSection;
