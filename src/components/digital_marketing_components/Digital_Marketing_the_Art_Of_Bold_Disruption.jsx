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
import digitalmarketing_targetadcampaign from '../../assets/digitalmarketing_targetadcampaign.svg'



const Digital_Marketing_the_Art_Of_Bold_Disruption = () => {
  let navigate = useNavigate();

  let cardData = [
    {
      cardTitle: "Search Engine Optimization (SEO)",
      cardDescription:
        "SEO acts as a map for your website, guiding it to the top of search results. By using the right keywords, optimizing content, and improving user experience, SEO attracts more visitors, therefore making it easier for people to engage with your services. In the end, it boosts visibility and drives organic traffic to your site",
      cardImage: digitalmarketing_seo,
    },
    {
      cardTitle: "Pay-Per-Click Advertising (PPC)",
      cardDescription:
        "PPC is like buying a ticket to get noticed online, paying only when someone clicks. It helps your business reach more potential customers quickly. Consequently, it maximizes your advertising budget, providing the best return on investment and visibility in a competitive digital landscape.",
      cardImage: digitalmarketing_payperclick,
    },
    {
      cardTitle: "Social Media Marketing (SMM)",
      cardDescription:
        "Social media marketing is like storytelling around a campfire on platforms like Instagram, Facebook, and Twitter. You share captivating stories, engage with visuals and updates, and invite your audience to connect, creating a community eager to spread the word! ",
      cardImage: digitalmarketing_socialmediamarketing,
    },
    {
      cardTitle: "Content Marketing",
      cardDescription:
        "In digital marketing, content marketing is essential. By sharing valuable insights, stories, and tips through blogs and videos, you engage your audience, helping them connect with your brand. Consequently, this builds trust and fosters loyalty.",
      cardImage: digitalmarketing_contentmarketing,
    },
    {
      cardTitle: "Email Marketing",
      cardDescription:
        "Email marketing is like sending a handwritten letter, delivering personalized messages and offers directly to your audience. It builds relationships, keeps your audience informed, and helps maintain a strong connection with your brand. As a result, it fosters long-term loyalty and engagement. ",
      cardImage: digitalmarketing_emailmarketing,
    },

    {
      cardTitle: "Influencer Marketing",
      cardDescription:
        "Influencer marketing effectively connects brands with popular figures who share authentic stories and experiences. By partnering with trusted voices, brands not only build trust but also strengthen their connection with the audience. Consequently, leveraging recommendations fosters credibility and drives engagement.",
      cardImage: digitalmarketing_influencermarketing,
    },
    {
      cardTitle: "Local SEO",
      cardDescription:
        "Local SEO is about making your business visible in your neighbourhood. When people search for nearby services, it ensures your business pops up, guiding local customers right to your doorstep and helping you become a trusted part of the community!",
      cardImage: digitalmarketing_localseo,
    },
    {
      cardTitle: "Targeted Ad Campaigns",
      cardDescription:
        "Targeted ad campaigns are like giving a custom-made gift to the right person. You create ads tailored to specific audiences, ensuring they reach genuinely interested individuals. Therefore, this increases the likelihood of engagement and fosters a stronger connection with your brand.",
      cardImage: digitalmarketing_targetadcampaign,
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
    <section className="mt-32 px-5 py-5 md:px-14 md:py-14  lg:px-20 lg:py-20">
      <div className="flex items-center gap-5 flex-wrap justify-between">
        <p className="text-3xl md:text-6xl  md:basis-[35%] font-sans font-semibold">
          The Art of Bold Disruption
        </p>

        <p className="md:basis-[32%]  text-lg">
        Digital marketing is the art of promoting brands online, using social media, websites, and emails to connect with customers. It's like sharing a story about your product where everyone can listen and engage!	
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mt-16 lg:mt-36">
        {cardData.map((item, index) => (
          <div
            className={` bg-white rounded-3xl gap-5 md:gap-10  flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } h-auto lg:h-[90vh] items-center`}
          >
            <div className="basis-[100%] md:basis-[50%] flex flex-col gap-3 md:gap-8 items-start md:text-left">
              <p className="text-lg md:text-2xl lg:text-4xl font-opensans font-semibold text-black">
                {item.cardTitle}
              </p>
              <p className="text-sm md:text-lg font-poppins text-gray-500">
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
              className="w-full  md:w-1/2 lg:basis-[40%] object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Digital_Marketing_the_Art_Of_Bold_Disruption;
