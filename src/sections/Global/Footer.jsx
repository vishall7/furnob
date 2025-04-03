import React from "react";
import Text from "../../components/Text";
import Container from "../../components/Container";
import Seperator from "../../components/Seperator";
import headerLogo from "../../assets/Images/furnob-logo.png"
// icons
import { Icon, Truck } from "lucide-react";
import { Headset } from "lucide-react";
import { CreditCard } from "lucide-react";
import { MoveRight } from "lucide-react";
import { FaCcStripe } from "react-icons/fa";
import { FaCcJcb } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

function Footer() {
  return (
    <>
      <Container>
        <Seperator />
        <div className="flex w-full flex-col items-center justify-center gap-8 py-8 md:flex-row md:gap-5 lg:gap-15 lg:py-13">
          {[
            {
              id: 1,
              title: "Free Shipping Orders $60+",
              desc: "A delivery service you can depend on",
              Icon: Truck,
            },
            {
              id: 2,
              title: "Customer Support",
              desc: "Satisfied customers are our best ads",
              Icon: Headset,
            },
            {
              id: 3,
              title: "100% Secure Payments",
              desc: "The highest level of security",
              Icon: CreditCard,
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex w-full gap-1 md:flex-col md:gap-5 lg:flex-row lg:gap-0"
            >
              {/* icon */}
              <div className="flex w-[40%] justify-center">
                <item.Icon size={60} strokeWidth={0.8} />
              </div>
              {/* details */}
              <div className="flex w-full flex-col gap-2">
                <Text variant="subheading" className="text-lg/5 font-semibold">
                  {item.title}
                </Text>
                <Text variant="description" className="text-sm/5">
                  {item.desc}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="bg-secondary">
        <div className="flex w-full flex-col gap-10 pt-9 pb-12 md:w-[70%] lg:w-full lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="w-full lg:w-[45%]">
            <Text
              as="p"
              variant="description"
              className="font-semibold text-amber-600"
            >
              <span className="text-[1rem]">J</span>oin our newsletter for £10
              off
            </Text>
            <Text
              as="h2"
              variant="subheading"
              className="mt-3 mb-2 text-[1.6rem]/8 font-semibold lg:mb-3 lg:text-[2rem]/10"
            >
              Get our emails for info on new items, sales and more.
            </Text>
            <Text
              as="p"
              variant="description"
              size={"md"}
              className={"text-[16px]/[24px] text-neutral-500"}
            >
              We'll email you a voucher worth £10 off your first order over £50.
            </Text>
          </div>
          <div className="w-full lg:w-[40%]">
            <span className="mb-4 flex items-center gap-1 border-b-3 border-black">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent py-2 text-[.95rem] outline-0"
              />
              <MoveRight size={23} strokeWidth={1.7} />
            </span>
            <p className="text-[12.9px] text-neutral-400">
              By subscribing you agree to our{" "}
              <span className="cursor-pointer font-medium text-black transition-all duration-300 hover:text-amber-600">
                Terms & Conditions and Privacy & Cookies Policy.
              </span>
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-5 py-7 lg:flex-row lg:items-center lg:justify-between lg:py-10">
          <Text as="p" className="text-[15px]">
            <span className="font-semibold">Hours: </span>
            9.30am-6.30pm Monday to Friday
          </Text>
          <div>
            <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-5">
              <img
                src="./app-store.webp"
                alt="apple store"
                className="w-[100px]"
              />
              <Text as="p" className="text-[15px]">
                <span className="font-semibold">Shopping App: </span>Try our
                View in Your Room feature, manage registries and save payment
                info.
              </Text>
            </div>
          </div>
        </div>
        <Seperator />
      </Container>

      <Container>
        <div className="flex flex-col gap-6 py-7 md:flex-row md:pb-10 lg:py-12">
          <div className="relative flex w-full flex-col gap-4 after:absolute after:top-0 after:-right-12.5 after:hidden after:h-[87%] after:w-[1px] after:bg-neutral-200 after:content-[''] lg:mr-33 lg:gap-5 lg:after:block">
            <p className="font-semibold">Do You Need Help ?</p>
            <div>
              <p className="text-[14px] text-black opacity-60">
                Mollura & C. SpA
              </p>
              <p className="text-[14px] text-black opacity-60">
                S.S. 114 Km 6,400 98128 Tremestieri
              </p>
              <p className="text-[14px] text-black opacity-60">
                Messina – Italy
              </p>
            </div>
            <div>
              <p className="cursor-pointer text-sm font-semibold text-neutral-500">
                info@example.com
              </p>
              <p className="cursor-pointer text-sm font-semibold text-neutral-500">
                +39 0906258945
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 lg:gap-5">
            <p className="font-semibold">Resources</p>
            <div className="flex flex-col gap-1">
              <p className="text-footernav">Customer Service</p>
              <p className="text-footernav">Gift Cards</p>
              <p className="text-footernav">Product Recalls</p>
              <p className="text-footernav">Accessibility Statement</p>
              <p className="text-footernav">CA Supply Chains Act</p>
              <p className="text-footernav">Cookie Settings</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 lg:gap-5">
            <p className="font-semibold">Be Inspired</p>
            <div className="flex flex-col gap-1">
              <p className="text-footernav">Furnob Magazine</p>
              <p className="text-footernav">LookBook FR Collections</p>
              <p className="text-footernav">Inspire Me</p>
              <p className="text-footernav">Brand News</p>
              <p className="text-footernav">Browse by Designers</p>
              <p className="text-footernav">Furnob for Elle Decor</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 lg:gap-5">
            <p className="font-semibold">Our Company</p>
            <div className="flex flex-col gap-1">
              <p className="text-footernav">About Us</p>
              <p className="text-footernav">Careers for Furnob</p>
              <p className="text-footernav">Social Responsibility</p>
              <p className="text-footernav">Store Locations and Events</p>
            </div>
          </div>
        </div>
        <Seperator />
      </Container>

      <Container>
        <footer className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:gap-10 items-start gap-2">
            <img src={headerLogo} alt="footer logo" className="h-auto w-36 md:w-36" />
            <div className="flex flex-col gap-2">
              <Text as="p" className="text-[13px]">
                Copyright 2025 © Furnob WordPress Theme. All right reserved.
                Powered by KLBTheme.
              </Text>
              <div className="flex items-center w-auto gap-2">
                {
                  [
                    {id: 1, Icon: FaCcJcb},
                    {id: 2, Icon: FaCcStripe},
                    {id: 3, Icon: FaCcDiscover},
                    {id: 4, Icon: FaCcPaypal},
                    {id: 5, Icon: FaCcMastercard},
                    {id: 6, Icon: FaCcVisa},
                  ].map(icon => (
                    <icon.Icon width={120} className="text-xl opacity-50 hover:opacity-100 duration-300 cursor-pointer" key={icon.id}/>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-x-6">
                <span className="hover-animation text-[13px] after:content-[''] after:absolute after:h-4/5 after:w-[2px] after:bg-black after:opacity-20 after:top-0.5 after:-right-3">Privacy Policy</span>
                <span className="hover-animation text-[13px] after:content-[''] after:absolute after:h-4/5 after:w-[2px] after:bg-black after:opacity-20 after:top-0.5 after:-right-3">Terms and Conditions</span>
                <span className="text-[13px] hover-animation">Refund and Return Policy</span>
          </div>
        </footer>
      </Container>
    </>
  );
}

export default Footer;
