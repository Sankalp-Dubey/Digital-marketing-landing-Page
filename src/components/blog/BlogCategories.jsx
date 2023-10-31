"use client";
import axiosServices from "@/utils/axios";
import React, { useEffect, useState } from "react";
import BlogCardSkeleton from "@/components/common/BlogCardSkeleton";
import { SectionContainer } from "../layout.component";
import BlogCard from "./BlogCard";

function BlogCategories({ slug }) {
  const [categoryBlogList, setCategoryBlogList] = useState([]);

  useEffect(() => {
    axiosServices
      .get(`/api/blog_by_category?slug=${slug}`)
      .then((res) => setCategoryBlogList(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SectionContainer className="py-10">
      {categoryBlogList && categoryBlogList.length === 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          <div className="w-full md:col-span-2">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 flex-col gap-5 items-center justify-center">
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {categoryBlogList &&
            categoryBlogList.map((blog, key) => (
              <BlogCard blog={blog} key={key} />
            ))}
        </div>
      )}
    </SectionContainer>
  );
}

export default BlogCategories;
