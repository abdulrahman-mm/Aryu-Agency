import React from "react";
import sample11111 from "../../assets/sample11111.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import digitalmarketing_seo from '../../assets/digitalmarketing_seo.svg'
import digitalmarketing_payperclick from '../../assets/digitalmarketing_payperclick.svg'
import digitalmarketing_socialmediamarketing from '../../assets/digitalmarketing_socialmediamarketing.svg'
import digitalmarketing_contentmarketing from '../../assets/digitalmarketing_contentmarketing.svg'
import digitalmarketing_emailmarketing from '../../assets/digitalmarketing_emailmarketing.svg'
import digitalmarketing_influencermarketing from '../../assets/digitalmarketing_influencermarketing.svg'
import digitalmarketing_localseo from '../../assets/digitalmarketing_localseo.svg'



const Digital_Marketing_the_Art_Of_Bold_Disruption = () => {
  let navigate = useNavigate();

  let cardData = [
    {
      cardTitle: "Search Engine Optimization (SEO)",
      cardDescription:
        "SEO is like a map for your website, guiding it to the top of search engine results. By using the right keywords, optimizing content, and improving user experience, SEO helps attract more visitors, making it easier for people to discover and engage with your valuable information and services online.",
      cardImage: digitalmarketing_seo,
    },
    {
      cardTitle: "Pay-Per-Click Advertising (PPC)",
      cardDescription:
        "PPC is like paying for a ticket to get noticed online; you only pay when someone clicks, helping your business reach more potential customers quickly and effectively while ensuring you maximize your advertising budget for the best possible return on investment and visibility in a competitive digital landscape!",
      cardImage: digitalmarketing_payperclick,
    },
    {
      cardTitle: "Social Media Marketing (SMM)",
      cardDescription:
        "Social media marketing is like being a storyteller around a campfire on platforms like Instagram, Facebook, and Twitter, among others. You share captivating tales about your brand, engage your audience with exciting visuals and updates, and invite them to share their experiences. This creates a warm community where everyone feels connected and eager to spread the word!",
      cardImage: digitalmarketing_socialmediamarketing,
    },
    {
      cardTitle: "Content Marketing",
      cardDescription:
        "Content marketing is like sharing an exciting book with friends. Through blogs and videos, you provide valuable insights, stories, and tips that engage your audience, helping them learn and feel connected to your brand along the way!",
      cardImage: digitalmarketing_contentmarketing,
    },
    {
      cardTitle: "Email Marketing",
      cardDescription:
        "Email marketing is like sending a handwritten letter; you share personalized messages and offers directly with your audience, building relationships and keeping them informed about your brand!",
      cardImage: digitalmarketing_emailmarketing,
    },

    {
      cardTitle: "Influencer Marketing",
      cardDescription:
        "Influencer marketing involves brands partnering with popular figures to share authentic stories and experiences. This strategy helps brands connect with their audience and build trust through the recommendations of trusted voices.",
      cardImage: digitalmarketing_influencermarketing,
    },
    {
      cardTitle: "Local SEO",
      cardDescription:
        "Local SEO is about making your business visible in your neighborhood. When people search for nearby services, it ensures your business pops up, guiding local customers right to your doorstep and helping you become a trusted part of the community!",
      cardImage: digitalmarketing_localseo,
    },
    {
      cardTitle: "Targeted Ad Campaigns",
      cardDescription:
        "Targeted ad campaigns are like delivering a custom-made gift to the right person. You craft ads tailored to specific audiences, ensuring they reach genuinely interested people, increasing the chances they’ll engage with your brand!",
      cardImage: sample11111,
    },
  ];

  // colorchanging
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#digital-marketing-main", // Target the section
      start: "top 30%",
      onEnter: () => {
        gsap.to("#digital-marketing-main", {
          backgroundColor: "#9B111E", // New background color
          duration: 1, // Instantly apply the background color
          color: "white",
        });
      },
      onLeaveBack: () => {
        gsap.to("#digital-marketing-main", {
          backgroundColor: "white", // Revert to the original background color
          duration: 1, // Instantly revert
          color: "black",
        });
      },
    });

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const triggers = document.querySelectorAll(".animated-card");

    triggers.forEach((trigger, index) => {
      const isLast = index === triggers.length - 1;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top top", // Trigger when the element's top hits the viewport top
            end: "+=600", // Adjust this value to match the desired pin duration in pixels
            scrub: 3, // Smooth scrubbing for the pin duration
            // pin: !isLast, // Pin all but the last element
            pin: true, // Pin all but the last element
          },
        })
        .to(trigger, {
          opacity: 0, // Fade out the element
          y: 100, // Move element downward
          scale: 0.9, // Shrink the element's size while scrolling
          duration: 1,
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  function onClickFindOutMore(title) {
    if (title === "UI and UX Design") {
      navigate("/uianduxdesign");

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    if (title === "Digital Design") {
      navigate("/digitaldesign");

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    if (title === "Brand Identity Design") {
      navigate("/brandidentitydesign");

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }

  return (
    <section id="digital-marketing-main" className="mt-32 py-20 px-20">
      <div className="flex items-center justify-between">
        <p className="text-6xl basis-[35%] font-semibold">
          The Art of Bold Disruption
        </p>

        <p className="basis-[32%]  text-lg">
        Digital marketing is the art of promoting brands online, using social media, websites, and emails to connect with customers. It's like sharing a story about your product where everyone can listen and engage!	
        </p>
      </div>

      <div className=" flex flex-col gap-5 mt-36">
        {cardData.map((item, index) => (
          <div
            className={`animated-card bg-white rounded-3xl my-8 px-10 py-10 flex ${index % 2 === 0 ? "" : "flex-row-reverse"} justify-between`}
          >
            <div className="basis-[40%] flex flex-col justify-center gap-10 items-start">
              <p className="text-5xl font-opensans font-semibold text-black">
                {item.cardTitle}
              </p>
              <p className="text-xl font-poppins  text-gray-500">
                {item.cardDescription}
              </p>

              <button
                onClick={() => onClickFindOutMore(item.cardTitle)}
                className="px-8 py-3 border-2 text-gray-500 rounded-full text-xl border-gray-500"
              >
                Find out more
              </button>
            </div>

            <img
              src={item.cardImage}
              alt=""
              className="basis-[50%] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Digital_Marketing_the_Art_Of_Bold_Disruption;
