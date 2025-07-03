"use client";

import HeroSection from "@/components/HeroSection";
import BannerSection from "@/components/BannerSection";

const contactCards = [
  {
    title: 'Sales Team',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 5.83333C3.5 4.54467 4.54467 3.5 5.83333 3.5H9.65911C10.1613 3.5 10.6071 3.82134 10.7659 4.29773L12.5134 9.54008C12.697 10.0909 12.4476 10.6929 11.9283 10.9525L9.29484 12.2692C10.5808 15.1214 12.8786 17.4192 15.7308 18.7052L17.0475 16.0717C17.3071 15.5524 17.9091 15.303 18.4599 15.4866L23.7023 17.2341C24.1787 17.3929 24.5 17.8387 24.5 18.3409V22.1667C24.5 23.4553 23.4553 24.5 22.1667 24.5H21C11.335 24.5 3.5 16.665 3.5 7V5.83333Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    descriptions: [
      'Are you considering starting your cloud journey? Our team of experts is ready to assist you.',
      'For a Seamless experience, please send an email to ',
      '<a href="mailto:help@layer3.com.ng" class="underline">help@layer3.com.ng</a>.'
    ],
    linkText: 'Fill the form Below →',
    linkHref: '#sales-form',
  },
  {
    title: 'Technical Support',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6673 8.16667C18.6673 10.744 16.578 12.8333 14.0007 12.8333C11.4233 12.8333 9.33398 10.744 9.33398 8.16667C9.33398 5.58934 11.4233 3.5 14.0007 3.5C16.578 3.5 18.6673 5.58934 18.6673 8.16667Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.0007 16.3333C9.49033 16.3333 5.83398 19.9897 5.83398 24.5H22.1673C22.1673 19.9897 18.511 16.3333 14.0007 16.3333Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    descriptions: [
      'Our Technical Team is available for our customers 24/7, round the clock.',
      'If you have created an account, Please submit a ticket, your issues will be attended to shortly.'
    ],
    linkText: 'Submit a Ticket →',
    linkHref: '#support-ticket',
  },
  {
    title: 'FAQs',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.59894 10.5C10.2396 9.14061 11.9682 8.16667 14.0001 8.16667C16.5774 8.16667 18.6667 9.73367 18.6667 11.6667C18.6667 13.2993 17.1762 14.6709 15.16 15.0577C14.5272 15.1791 14.0001 15.689 14.0001 16.3333M14 19.8333H14.0117M24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    descriptions: [
      'Read our FAQs to get answers or find more information about our company.',
      'For a Seamless experience, please send an email to ',
      '<a href="mailto:help@layer3.com.ng" class="underline">help@layer3.com.ng</a>.'
    ],
    linkText: 'Read FAQs →',
    linkHref: '#faqs',
  },
]; 

export default function Contact() {
  return (
    <div>
      <div className="bg-[#12255B] py-16">
        <HeroSection
          heading="Contact Us"
          description="Whether you have a question, need support, or want to explore solutions for your business, our team is ready to connect with you. Reach out and let's talk."
          breadcrumbText="Contact Us"
          textColor="white"
          buttonText="Contact Sales"
        />
      </div>

      <section className="py-16">
        <div className="mb-12">
          <h3 className="text-2xl md:text-4xl font-semibold mx-4 md:mx-24 text-[#282828] py-8 md:py-16 text-left ">
            We&apos;re Here to Help—
            <span className="font-semibold">
              Anytime, <br /> Anywhere
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-8 md:mx-auto">
          {contactCards.map((card, idx) => (
            <div
            key={idx}
            className="p-[2px] rounded-xl transition-shadow hover:shadow-lg h-full"
            style={{
              background: 'linear-gradient(360deg, #8D2EC3 0%, #2143A6 100%)'
            }}
          >
              <div className="bg-white rounded-xl p-8 flex flex-col h-full">
                <span className="mr-2">{card.icon}</span>
                <span className="font-semibold text-[#282828] text-xl">{card.title}</span>
                {card.descriptions.map((desc, i) => (
                  <p key={i} className="text-[#434343] mb-4" dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
                <a
                  href={card.linkHref}
                  className="mt-auto text-sm text-[#EB1C29] font-normal flex items-center"
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sales Team Contact Section */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="py-8 mx-24">
          <h2 className="text-3xl text-[#282828] md:text-4xl font-semibold mb-10">
            Talk to Our Sales Team
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start px-4 md:px-0">
          {/* Left: Contact Info */}
          <div className="text-gray-900">
            {/* Email */}
            <div className="mb-8">
              <div className="flex items-center mb-2 text-lg font-normal">
                <span className="mr-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                      stroke="#0F172A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Email
              </div>
              <div className="text-[#434343] mb-1">
                Have Questions? Send a mail to
              </div>
              <a
                href="mailto:help@layer3.com.ng"
                className="text-[#3B82F6] underline text-sm"
              >
                help@layer3.com.ng
              </a>
            </div>
            <hr className="border-gray-300 mb-8" />
            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-center mb-2 text-lg font-normal">
                <span className="mr-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                      stroke="#0F172A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Phone
              </div>
              <div className="text-[#434343] mb-1">
                Need help with Layer3Cloud? Call
              </div>
              <a
                href="tel:+2349086293734"
                className="text-[#3B82F6] underline text-sm"
              >
                +234 (0) 908 629 3734
              </a>
            </div>
            <hr className="border-gray-300 mb-8" />
            {/* Socials */}
            <div>
              <div className="flex items-center mb-2 text-lg font-normal">
                <span className="mr-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
                      stroke="#0F172A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Socials
              </div>
              <div className="text-[#434343] mb-2">
                Need more information? Follow us on
              </div>
              <div className="flex space-x-4 text-2xl text-[#E11D48]">
                <a href="#" aria-label="Facebook">
                  {" "}
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                        fill="#EB1C29"
                      />
                    </svg>
                  </span>{" "}
                </a>
                <a href="#" aria-label="Instagram">
                  {" "}
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9991 7.19445C9.33898 7.19445 7.1921 9.34132 7.1921 12.0015C7.1921 14.6616 9.33898 16.8085 11.9991 16.8085C14.6593 16.8085 16.8062 14.6616 16.8062 12.0015C16.8062 9.34132 14.6593 7.19445 11.9991 7.19445ZM11.9991 15.1257C10.2788 15.1257 8.87492 13.7218 8.87492 12.0015C8.87492 10.2812 10.2788 8.87726 11.9991 8.87726C13.7194 8.87726 15.1234 10.2812 15.1234 12.0015C15.1234 13.7218 13.7194 15.1257 11.9991 15.1257ZM17.003 5.87726C16.3819 5.87726 15.8804 6.37882 15.8804 6.99992C15.8804 7.62101 16.3819 8.12257 17.003 8.12257C17.6241 8.12257 18.1257 7.62335 18.1257 6.99992C18.1259 6.85243 18.097 6.70637 18.0406 6.57008C17.9843 6.43378 17.9016 6.30995 17.7973 6.20567C17.693 6.10138 17.5692 6.01869 17.4329 5.96234C17.2966 5.90599 17.1505 5.87707 17.003 5.87726ZM21.3694 12.0015C21.3694 10.7077 21.3812 9.4257 21.3085 8.13429C21.2359 6.63429 20.8937 5.30304 19.7968 4.20617C18.6976 3.10695 17.3687 2.7671 15.8687 2.69445C14.5749 2.62179 13.2929 2.63351 12.0015 2.63351C10.7077 2.63351 9.4257 2.62179 8.13429 2.69445C6.63429 2.7671 5.30304 3.10929 4.20617 4.20617C3.10695 5.30538 2.7671 6.63429 2.69445 8.13429C2.62179 9.42804 2.63351 10.7101 2.63351 12.0015C2.63351 13.2929 2.62179 14.5773 2.69445 15.8687C2.7671 17.3687 3.10929 18.6999 4.20617 19.7968C5.30538 20.896 6.63429 21.2359 8.13429 21.3085C9.42804 21.3812 10.7101 21.3694 12.0015 21.3694C13.2952 21.3694 14.5773 21.3812 15.8687 21.3085C17.3687 21.2359 18.6999 20.8937 19.7968 19.7968C20.896 18.6976 21.2359 17.3687 21.3085 15.8687C21.3835 14.5773 21.3694 13.2952 21.3694 12.0015ZM19.3069 17.528C19.1359 17.9546 18.9296 18.2734 18.5991 18.6015C18.2687 18.9319 17.9523 19.1382 17.5257 19.3093C16.2929 19.7991 13.3655 19.689 11.9991 19.689C10.6327 19.689 7.70304 19.7991 6.47023 19.3116C6.04367 19.1405 5.72492 18.9343 5.39679 18.6038C5.06632 18.2734 4.86007 17.9569 4.68898 17.5304C4.20148 16.2952 4.31163 13.3679 4.31163 12.0015C4.31163 10.6351 4.20148 7.70538 4.68898 6.47257C4.86007 6.04601 5.06632 5.72726 5.39679 5.39913C5.72726 5.07101 6.04367 4.86242 6.47023 4.69132C7.70304 4.20382 10.6327 4.31398 11.9991 4.31398C13.3655 4.31398 16.2952 4.20382 17.528 4.69132C17.9546 4.86242 18.2734 5.06867 18.6015 5.39913C18.9319 5.7296 19.1382 6.04601 19.3093 6.47257C19.7968 7.70538 19.6866 10.6351 19.6866 12.0015C19.6866 13.3679 19.7968 16.2952 19.3069 17.528Z"
                        fill="#EB1C29"
                      />
                    </svg>
                  </span>{" "}
                </a>
                <a href="#" aria-label="LinkedIn">
                  {" "}
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.93945 5.001C6.93919 5.53143 6.72822 6.04004 6.35296 6.41492C5.9777 6.78981 5.46889 7.00027 4.93845 7C4.40802 6.99973 3.89942 6.78877 3.52453 6.41351C3.14965 6.03825 2.93919 5.52943 2.93945 4.999C2.93972 4.46857 3.15069 3.95996 3.52595 3.58508C3.90121 3.21019 4.41002 2.99974 4.94045 3C5.47089 3.00027 5.97949 3.21123 6.35437 3.58649C6.72926 3.96175 6.93972 4.47057 6.93945 5.001ZM6.99945 8.481H2.99945V21.001H6.99945V8.481ZM13.3195 8.481H9.33945V21.001H13.2795V14.431C13.2795 10.771 18.0495 10.431 18.0495 14.431V21.001H21.9995V13.071C21.9995 6.901 14.9395 7.131 13.2795 10.161L13.3195 8.481Z"
                        fill="#EB1C29"
                      />
                    </svg>
                  </span>{" "}
                </a>
                <a href="#" aria-label="YouTube">
                  {" "}
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.6996 8.03425C21.606 7.32363 21.3346 6.64812 20.9106 6.07025C20.3851 5.5409 19.6725 5.23953 18.9266 5.23125C16.1596 5.03125 12.0006 5.03125 12.0006 5.03125C12.0006 5.03125 7.84361 5.03125 5.07261 5.23125C4.32711 5.23979 3.61486 5.54114 3.08961 6.07025C2.66275 6.64701 2.39077 7.32352 2.29961 8.03525C2.17574 9.09958 2.10897 10.1698 2.09961 11.2413V12.7413C2.10897 13.8127 2.17574 14.8829 2.29961 15.9473C2.39361 16.6593 2.66361 17.3373 3.08361 17.9193C3.68761 18.4553 4.46361 18.7563 5.27061 18.7673C6.85361 18.9183 12.0016 18.9672 12.0016 18.9672C12.0016 18.9672 16.1626 18.9672 18.9296 18.7673C19.6759 18.759 20.389 18.4572 20.9146 17.9272C21.3366 17.3481 21.6071 16.6726 21.7016 15.9622C21.8255 14.8979 21.8922 13.8277 21.9016 12.7562V11.2403C21.8897 10.1688 21.8223 9.09871 21.6996 8.03425ZM10.0076 14.5882V8.96825L15.4076 11.7873L10.0076 14.5882Z"
                        fill="#EB1C29"
                      />
                    </svg>
                  </span>{" "}
                </a>
                <a href="#" aria-label="X">
                  {" "}
                  <span className="">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_757_21598"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="18"
                        height="18"
                      >
                        <path d="M0 0H18V18H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_757_21598)">
                        <path
                          d="M14.175 0.84375H16.9354L10.9054 7.75318L18 17.1569H12.4457L8.09229 11.4547L3.11657 17.1569H0.353571L6.80271 9.76403L0 0.845036H5.69571L9.62486 6.05604L14.175 0.84375ZM13.2043 15.5009H14.7343L4.86 2.41361H3.21943L13.2043 15.5009Z"
                          fill="#EB1C29"
                        />
                      </g>
                    </svg>
                  </span>{" "}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Sales Form */}
          <form className="p-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[#282828] font-normal mb-1">
                  <span className="text-[#E11D48]">*</span>First Name{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter your first Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-[#949494] focus:outline-none focus:border-[#E11D48]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#282828] font-normal mb-1">
                  <span className="text-[#E11D48]">*</span>Last Name{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter your last Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-[#949494] focus:outline-none focus:border-[#E11D48]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#282828] font-normal mb-1">
                  <span className="text-[#E11D48]">*</span>Business Email{" "}
                </label>
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-[#949494] text-[#949494] focus:outline-none focus:border-[#E11D48]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#282828] font-normal mb-1">
                  <span className="text-[#E11D48]">*</span>Phone Number{" "}
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-[#949494] focus:outline-none focus:border-[#E11D48]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#282828] font-normal mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-[#949494] focus:outline-none focus:border-[#E11D48]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#282828] font-normal mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="Enter your Job Title"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-[#949494] focus:outline-none focus:border-[#E11D48]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#282828] font-normal mb-1">
                  <span className="text-[#E11D48]">*</span>Country{" "}
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-[#949494] focus:outline-none focus:border-[#E11D48]"
                  required
                >
                  <option value="">Select your country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#282828] font-normal mb-1">
                  <span className="text-[#E11D48]">*</span>Inquiry Type{" "}
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-[#949494] focus:outline-none focus:border-[#E11D48]"
                  required
                >
                  <option value="">Select your inquiry</option>
                  <option value="General">General</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm text-[#282828] font-normal mb-1">
                <span className="text-[#E11D48]">*</span>Enquiry/Complaint{" "}
              </label>
              <textarea
                rows={4}
                placeholder="Enter your enquiry or complaint"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-[#949494] focus:outline-none focus:border-[#E11D48] resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-8 w-32 bg-[#EB1C29] text-white font-semibold py-2 rounded-md text-lg hover:bg-[#b31336] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Local Coverage Section */}
      <section className="py-20 bg-white">
        <div className="mx-4 md:mx-24">
          <h2 className="text-2xl md:text-4xl text-[#282828] font-bold mb-4">
            Local Coverage
          </h2>
          <p className="text-[15px] text-[#434343] mb-10">
            Based in Nigeria. Serving Africa. Trusted by the world!
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-0">
          {/* Left: Addresses */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl text-[#282828] font-semibold mb-1">
                Abuja
              </h3>
              <p className="text-sm text-[#434343]">
                Plot 316,No 14, Y.P.O Shodeinde Street, Utako, Abuja
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl text-[#282828] font-semibold mb-1">
                Lagos
              </h3>
              <p className="text-sm text-[#434343]">
                Plot 196B Jide Oki Street Off Ligali Ayorinde Street Victoria
                Island, Lagos Nigeria
              </p>
            </div>
            <div>
              <h3 className="text-xl text-[#282828] font-semibold mb-1">
                Lagos
              </h3>
              <p className="text-sm text-[#434343]">
                OADC Lagos, Open Access Data Centres Limited Lekki Penninsula II
                106104, Lagos Nigeria.
              </p>
            </div>
          </div>
          {/* Right: Map Image */}
          <div className="flex justify-center md:justify-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.760964479836!2d7.444062075872837!3d9.05785099099337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5b2e2c7b2d%3A0x2e8b8b8b8b8b8b8b!2sUtako%2C%20Abuja!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
              width="100%"
              height="350"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
              className=" w-full max-w-xl"
            ></iframe>
          </div>
        </div>
      </section>

      <BannerSection
        title="Not Sure Where to Begin?"
        subtitle="Our expert support team is here to walk you through every step—fast, friendly, and always available."
        primaryButtonText="Contact Us"
        onPrimaryClick={() => {
          /* handle Talk to Sales click */
        }}
        onSecondaryClick={() => {
          /* handle Request a Demo click */
        }}
      />
    </div>
  );
}
