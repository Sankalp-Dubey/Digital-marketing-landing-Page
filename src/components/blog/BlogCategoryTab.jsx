import { SectionContainer } from "@/components/layout.component";
import Link from "next/link";

function BlogCategoryTab({ activeURL }) {
  return (
    <SectionContainer className="pt-10">
      <div className="flex flex-wrap gap-5 items-center justify-center text-lg">
        <Link
          className={`hover:text-[#DD642A] ${
            activeURL === "web-design" ? "text-[#DD642A]" : ""
          }`}
          href="/category/web-design"
        >
          Web Design
        </Link>
        <Link
          className={`hover:text-[#DD642A] ${
            activeURL === "web-development" ? "text-[#DD642A]" : ""
          }`}
          href="/category/web-development"
        >
          Web Development
        </Link>
        <Link
          className={`hover:text-[#DD642A] ${
            activeURL === "mobile-app-development" ? "text-[#DD642A]" : ""
          }`}
          href="/category/mobile-app-development"
        >
          Mobile App Development
        </Link>
        <Link
          className={`hover:text-[#DD642A] ${
            activeURL === "software-maintenance" ? "text-[#DD642A]" : ""
          }`}
          href="/category/software-maintenance"
        >
          Software Maintenance
        </Link>
        <Link
          className={`hover:text-[#DD642A] ${
            activeURL === "digital-marketing" ? "text-[#DD642A]" : ""
          }`}
          href="/category/digital-marketing"
        >
          Digital Marketing
        </Link>
      </div>
    </SectionContainer>
  );
}

export default BlogCategoryTab;
