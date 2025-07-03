"use client";
import React, { useState } from "react";

const jobTabs = [
  {
    name: "All Position",
    jobs: [
      {
        title: "Cloud Visualization Engineer",
        department: "Operations",
        description:
          "We are seeking for new team members who are motivated by our objective and share our values. Goal getters with strong work ethics, self-motivated, excellence mindset, fit in well at Layer3.",
        type: "Full-Time",
        location: "Remote",
        link: "#",
      },
    ],
  },
  {
    name: "Design",
    jobs: [
      {
        title: "UI/UX Designer",
        department: "Design",
        description:
          "Join our creative team to design intuitive interfaces and delightful experiences.",
        type: "Full-Time",
        location: "Remote",
        link: "#",
      },
    ],
  },
  {
    name: "Accounting",
    jobs: [
      {
        title: "Accountant",
        department: "Accounting",
        description:
          "Manage company finances and ensure compliance with regulations.",
        type: "Full-Time",
        location: "Remote",
        link: "#",
      },
    ],
  },
  {
    name: "Sales",
    jobs: [
      {
        title: "Sales Executive",
        department: "Sales",
        description:
          "Drive revenue growth by building relationships with clients.",
        type: "Full-Time",
        location: "Remote",
        link: "#",
      },
    ],
  },
  {
    name: "Marketing",
    jobs: [
      {
        title: "Marketing Specialist",
        department: "Marketing",
        description:
          "Develop and execute marketing strategies to grow our brand.",
        type: "Full-Time",
        location: "Remote",
        link: "#",
      },
    ],
  },
  {
    name: "Operations",
    jobs: [
      {
        title: "Operations Manager",
        department: "Operations",
        description:
          "Oversee daily operations and ensure efficiency across teams.",
        type: "Full-Time",
        location: "Remote",
        link: "#",
      },
    ],
  },
  {
    name: "Engineering",
    jobs: [
      {
        title: "Software Engineer",
        department: "Engineering",
        description:
          "Build and maintain scalable software solutions for our platform.",
        type: "Full-Time",
        location: "Remote",
        link: "#",
      },
    ],
  },
  {
    name: "Products",
    jobs: [
      {
        title: "Product Manager",
        department: "Products",
        description: "Lead product development and strategy for new offerings.",
        type: "Full-Time",
        location: "Remote",
        link: "#",
      },
    ],
  },
];

export default function CareersTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" py-24">
      <div className="mx-8 md:mx-24 py-24">
        <h1 className="text-5xl md:text-5xl font-bold text-black max-w-3xl">
          Build a Career That Shapes Africa’s Digital Future
        </h1>
      </div>
      <div className="w-full max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="relative">
          {/* Mobile: scrollable, Desktop: static */}
          <div
            className="flex md:justify-between overflow-x-auto md:overflow-visible no-scrollbar space-x-2 md:space-x-0 bg-[#F3F3F3] rounded-2xl px-2 md:px-8 py-2 md:py-2"
            style={{ minWidth: 0 }}
          >
            {jobTabs.map((tab, idx) => (
              <button
                key={tab.name}
                className={`flex-shrink-0 md:flex-1 md:w-auto px-4 md:px-2 py-2 md:py-4 rounded-2xl font-medium text-sm md:text-lg transition-all
                ${
                  activeTab === idx
                    ? "bg-white shadow text-black"
                    : "bg-transparent text-[#282828] hover:bg-white/70"
                }
                md:mx-1
              `}
                onClick={() => setActiveTab(idx)}
                style={{ minWidth: "110px", maxWidth: "150px" }}
              >
                {tab.name}
              </button>
            ))}
          </div>
          {/* Dot indicator for mobile */}
          <div className="flex justify-center mt-2 md:hidden">
            {jobTabs.map((_, idx) => (
              <span
                key={idx}
                className={`mx-1 w-2 h-2 rounded-full transition-all ${
                  activeTab === idx ? "bg-[#282828]" : "bg-[#D1D5DB]"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="py-8 mx-auto text-center items-center justify-center">
          <h3 className="text-[#282828]">
            Showing roles across all nation and all teams
          </h3>
        </div>
        {/* Job Card */}
        <div className="bg-white border border-[#CDCDCD] rounded-lg p-8 mt-8">
          {jobTabs[activeTab].jobs.map((job, i) => (
            <div key={i}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h2 className="font-semibold text-[#282828] text-2xl md:text-3xl">
                    {job.title}
                  </h2>
                  <span className="flex items-center bg-[#E9F7EF] text-[#219653] px-2 py-2 rounded-full font-medium text-sm ml-4">
                    <span className="w-2 h-2 bg-[#219653] rounded-full mr-2"></span>
                    {job.department}
                  </span>
                </div>
                <a
                  href={job.link}
                  className="text-[#EB1C29] hidden md:flex font-medium text-lg items-center hover:underline"
                >
                  View Job
                  <svg
                    className="ml-1"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.5 5l5 5-5 5"
                      stroke="#EB1C29"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-[#434343] mt-4 mb-6">{job.description}</p>
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <span className="flex items-center text-[#282828] gap-4 text-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                      stroke="#5F5F5F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                      stroke="#5F5F5F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {job.location}
                </span>
                <span className="flex items-center text-[#282828] text-lg gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#5F5F5F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {job.type}
                </span>
              </div>
              <a
                href={job.link}
                className="text-[#EB1C29] block md:hidden font-medium text-lg flex items-center hover:underline"
              >
                View Job
                <svg
                  className="ml-1"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7.5 5l5 5-5 5"
                    stroke="#EB1C29"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
