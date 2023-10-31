import BlogCardList from "@/components/common/BlogCardList";
import { SectionContainer } from "@/components/layout.component";
import React from "react";

const blogPosts = [
  {
    id: 1,
    created_at: "18 July 2023",
    title: "Which E-Commerce is best for dropshipping?",
    image: "/images/our-portfolio/carton.png",
    slug: "blog-1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    created_at: "18 July 2023",
    title: "Which E-Commerce is best for dropshipping?",
    image: "/images/our-portfolio/imvision.png",
    slug: "blog-2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    created_at: "18 July 2023",
    title: "Which E-Commerce is best for dropshipping?",
    image: "/images/our-portfolio/imvision.png",
    slug: "blog-2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function RecentPosts() {
  return (
    <div>
      <SectionContainer>
        <section className="blog-listing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between py-[50px] md:py-[100px]">
          {blogPosts &&
            blogPosts.map((blogItem, key) => (
              <BlogCardList blogItem={blogItem} key={key} />
            ))}
        </section>
      </SectionContainer>
    </div>
  );
}

export default RecentPosts;
