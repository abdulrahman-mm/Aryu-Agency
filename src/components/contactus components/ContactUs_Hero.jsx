// import React from "react";

// const ContactUs_Hero = () => {
//   return (
//     <section className="px-5 py-5 sm:px-10 sm:py-10  md:px-20  md:py-20 ">
//       <div className="flex flex-col-reverse gap-5  md:flex-row items-center md:justify-between">
//         {/* Text Section */}
//         <div className="flex flex-col basis-full md:basis-[60%] text-center md:text-left">
//           <p
//             style={{ letterSpacing: "12px" }}
//             className="text-purple-900 font-poppins"
//           >
//             CONTACT US
//           </p>
//           <p className="text-2xl md:text-4xl lg:text-7xl">
//             <span className="text-purple-900 font-medium">Good things</span>{" "}
//             happen when you say{" "}
//             <span className="text-purple-900 font-medium">hey</span>
//           </p>
//         </div>

//         {/* Circle Section */}
//         <div className="w-36 h-36 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-gray-300 rounded-full mt-6 md:mt-0"></div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs_Hero;

// import React, { useEffect } from "react";
// import gsap from "gsap";

// const ContactUs_Hero = () => {
//   useEffect(() => {
//     // Animation for text elements (from initial state)
//     gsap.from(".contact-text", {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//     });

//      // Add to animation for text elements (to final state)
//      gsap.to(".contact-text", {
//       opacity: 1,
//       y: 0,
//       duration: 2,
//       ease: "power3.out",
//       delay: 1.5, // Delay to ensure it completes after initial animation
//     });

//     // Animation for the circle (from initial state)
//     gsap.from(".circle", {
//       opacity: 0,
//       scale: 0,
//       duration: 1,
//       ease: "power3.out",
//       delay: 0.5, // Delay to make it appear after text animation
//     });

//     // Add to animation for the circle (to final state)
//     gsap.to(".circle", {
//       opacity: 1,
//       scale: 1,
//       duration: 2,
//       ease: "power3.out",
//       delay: 2, // Delay to ensure it completes after initial animation
//     });
//   }, []);

//   return (
//     <section className="px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-20">
//       <div className="flex flex-col-reverse gap-5 md:flex-row items-center md:justify-between">
//         {/* Text Section */}
//         <div className="flex flex-col basis-full md:basis-[60%] text-center md:text-left">
//           <p
//             style={{ letterSpacing: "12px" }}
//             className="contact-text text-purple-900 font-poppins"
//           >
//             CONTACT US
//           </p>
//           <p className="contact-text text-2xl md:text-4xl lg:text-7xl">
//             <span className="text-purple-900 font-medium">Good things</span>{" "}
//             happen when you say{" "}
//             <span className="text-purple-900 font-medium">hey</span>
//           </p>
//         </div>

//         {/* Circle Section */}
//         <div className="circle w-36 h-36 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-gray-300 rounded-full mt-6 md:mt-0"></div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs_Hero;

import React, { useEffect } from "react";
import gsap from "gsap";
import contactus_hero_image from '../../assets/contactus_hero_image.svg'

const ContactUs_Hero = () => {
  useEffect(() => {
    // Reset animations in case the component is revisited
    gsap.set(".contact-text", { opacity: 0, y: 50 });
    gsap.set(".circle", { opacity: 0, scale: 0 });

    // Animation for text elements (from initial state)
    gsap.fromTo(
      ".contact-text",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        delay: 1.5, // Delay to ensure it completes after initial animation
      }
    );

    // Animation for the circle (from initial state)
    gsap.fromTo(
      ".circle",
      {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5, // Delay to make it appear after text animation
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        delay: 2, // Delay to ensure it completes after initial animation
      }
    );
  }, []);

  return (
    <section className="px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-20">
      <div className="flex flex-col-reverse gap-5 md:flex-row items-center md:justify-between">
        {/* Text Section */}
        <div className="flex flex-col basis-full md:basis-[60%] text-center md:text-left">
          <p
            style={{ letterSpacing: "12px" }}
            className="contact-text text-purple-900 font-poppins"
          >
            CONTACT US
          </p>
          <p className="contact-text text-2xl md:text-4xl lg:text-7xl">
            <span className="text-purple-900 font-medium">Good things</span>{" "}
            happen when you say{" "}
            <span className="text-purple-900 font-medium">hey</span>
          </p>
        </div>

        <img src={contactus_hero_image} alt="" className="circle" />
      </div>
    </section>
  );
};

export default ContactUs_Hero;
