import { SectionContainer } from "@/components/layout.component";
import React from "react";
import "../../styles/hire_resources.css";
import {
  SectionSubTitle,
  SectionTitle,
} from "@/components/typography.component";
import { PrimaryButton, SecondaryButton } from "@/components/buttons.component";
import CurveShape from "@/components/common/CurveShape";
import OurValuableClients from "@/components/common/Solution";

const resources = [
  {
    id: 1,
    name: "Full Stack Developers",
    value: "full-stack",
  },
  {
    id: 2,
    name: "Front-End Developers",
    value: "front-end",
  },
  {
    id: 3,
    name: "UI/UX Experts",
    value: "ui-ux",
  },
  {
    id: 4,
    name: "WordPress Developers",
    value: "wordpress",
  },
  {
    id: 5,
    name: "WooCommerce Developers",
    value: "woocommerce",
  },
  {
    id: 6,
    name: "Drupal Developers",
    value: "drupal",
  },
  {
    id: 7,
    name: "PHP Developers",
    value: "php",
  },
  {
    id: 8,
    name: "Laravel Developers",
    value: "laravel",
  },
  {
    id: 9,
    name: "Node JS Developers",
    value: "node-js",
  },
  {
    id: 10,
    name: "Python Developers",
    value: "python",
  },
  {
    id: 11,
    name: "React JS Developers",
    value: "react",
  },
  {
    id: 12,
    name: "Angular Developers",
    value: "angular",
  },
  {
    id: 13,
    name: "Vue JS Developers",
    value: "vue",
  },
  {
    id: 14,
    name: "Next JS Developers",
    value: "next",
  },
  {
    id: 15,
    name: "ASP.NET Developers",
    value: "dot-net",
  },
  {
    id: 16,
    name: "Android Developers",
    value: "android",
  },
  {
    id: 17,
    name: "ios Developers",
    value: "ios",
  },
  {
    id: 18,
    name: "Kotlin Developers",
    value: "kotlin",
  },
  {
    id: 19,
    name: "React Native Developers",
    value: "react-native",
  },
  {
    id: 20,
    name: "SwiftUI Developers",
    value: "swift",
  },
  {
    id: 21,
    name: "Flutter Developers",
    value: "flutter",
  },
  {
    id: 22,
    name: "QA Software Testers",
    value: "qa",
  },
];

const timeCommitment = [
  {
    id: 1,
    name: "Full Time (40 or more hrs/week)",
    value: "full-time",
  },
  {
    id: 2,
    name: "Part Time (Less than 40 hrs/week)",
    value: "part-time",
  },
  {
    id: 3,
    name: "Hourly",
    value: "hourly",
  },
];

function HiringForm() {
  return (
    <div>
      <SectionContainer>
        <div className="form-for-hiring">
          <div className="hiring-content">
            <div className="flex flex-col gap-5">
              <SectionTitle className="text-center">
                Hire Trusted and Expert Web & APP Developers
              </SectionTitle>
              <p className="text-center">
                High Quality Coder Save Upto 60 % of the development cost and
                Time.
              </p>
              <p>
                We are a Web & App Development Company, having 50+ Team members,
                for designing & developing websites, web applications & mobile
                applications. We have a strong team for WordPress, Drupal, PHP,
                Laravel, Node.js, Python, .Net, react.js, Angular.js, vue.js,
                Android & iOS native, React Native, and Flutter. We work for
                more than 70+ countries of the world, including the USA, Canada,
                Caribbean countries, Latin American countries, Europe,
                Australia, Fiji, and 3-4 Asian countries.
              </p>
              <p>
                <b>Hire dedicated developers</b>, designers, and programmers who
                work on an hourly, full-time, or part-time basis for your
                specific project needs.
              </p>
              <ol type="i" className="text-left flex flex-col gap-3">
                <li>
                  <b>1. </b>100% Confidentiality on NDA
                </li>
                <li>
                  {" "}
                  <b>2. </b>We can provide you resources on an hourly basis or
                  monthly basis both.
                </li>
                <li>
                  {" "}
                  <b>3. </b>We provide a dedicated development team for every
                  Project
                </li>
                <li>
                  {" "}
                  <b>4. </b>We work dedicatedly for you and do daily work
                  reporting
                </li>
                <li>
                  {" "}
                  <b>5. </b>We provide a project coordinator free of cost, to
                  make sure work is going smoothly
                </li>
                <li>
                  {" "}
                  <b>6. </b>Our developers and coordinators will be in direct
                  communication with you through Skype, email, Trello, and Zira
                  and will share regular source code through bitbucket.
                </li>
                <li>
                  {" "}
                  <b>7. </b>We can replace any developer anytime if you do not
                  like it with only 1 week&apos;s notice period.
                </li>
                <li>
                  {" "}
                  <b>8. </b>We are always open to working according to your
                  direction.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default HiringForm;
