// import React, { useState, useEffect } from "react";
// import Clock from "react-clock"; // Assuming you're using the react-clock package
// import "react-clock/dist/Clock.css"; // Include the Clock CSS if needed
// import "./clock.css";

// const TimeDisplay = () => {
//   const [IndiaTime, setIndiaTime] = useState(new Date());
//   const [londonTime, setLondonTime] = useState(new Date());
//   const [russiaTime, setRussiaTime] = useState(new Date());
//   const [japanTime, setJapanTime] = useState(new Date());
//   const [newyorkTime, setNewyorkTime] = useState(new Date());
//   const [ChinaTime, setChinaTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       setIndiaTime(
//         new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }))
//       );
//       setLondonTime(
//         new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }))
//       );
//       setRussiaTime(
//         new Date(now.toLocaleString("en-US", { timeZone: "Europe/Moscow" }))
//       );
//       setJapanTime(
//         new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }))
//       );
//       setNewyorkTime(
//         new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }))
//       );
//       setChinaTime(
//         new Date(now.toLocaleString("en-US", { timeZone: "Asia/Shanghai" }))
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formatTime = (time) => {

//     const hours = time.getHours() % 12 || 12; // Convert to 12-hour format
//     const minutes = time.getMinutes().toString().padStart(2, "0"); // Pad single digit minutes
//     const seconds = time.getSeconds().toString().padStart(2, "0"); // Pad single digit seconds
//     const amPm = time.getHours() >= 12 ? "PM" : "AM";
//     return `${hours}:${minutes}:${seconds} ${amPm}`;
//   };

//   const timeZones = [
//     { label: "INDIA", time: IndiaTime },
//     { label: "LONDON", time: londonTime },
//     { label: "RUSSIA", time: russiaTime },
//     { label: "JAPAN", time: japanTime },
//     { label: "NEW YORK", time: newyorkTime },
//     { label: "CHINA", time: ChinaTime },
//   ];

//   return (
//     <div className="px-5 py-5 sm:px-10 sm:py-10  md:px-20  md:py-20">
//       <p className="font-lato font-semibold text-2xl sm:text-3xl ">
//         Who's When?
//       </p>

//       <div className="flex flex-col sm:flex-row sm:flex-wrap  gap-6 mt-8 sm:mt-10">
//         {timeZones.map(({ label, time }, index) => (
//           <div key={index} className="flex items-center gap-4 w-full sm:w-auto">
//             <Clock value={time} />
//             <div className="flex flex-col gap-1">
//               <p className="font-lato font-semibold text-lg sm:text-xl">
//                 {label}
//               </p>
//               <p className="text-gray-600">{formatTime(time)}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TimeDisplay;

import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import gsap from "gsap";
import "./clock.css";

const TimeDisplay = () => {
  const [IndiaTime, setIndiaTime] = useState(new Date());
  const [londonTime, setLondonTime] = useState(new Date());
  const [russiaTime, setRussiaTime] = useState(new Date());
  const [japanTime, setJapanTime] = useState(new Date());
  const [newyorkTime, setNewyorkTime] = useState(new Date());
  const [ChinaTime, setChinaTime] = useState(new Date());

  useEffect(() => {
    // Time update logic
    const interval = setInterval(() => {
      const now = new Date();
      setIndiaTime(
        new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }))
      );
      setLondonTime(
        new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }))
      );
      setRussiaTime(
        new Date(now.toLocaleString("en-US", { timeZone: "Europe/Moscow" }))
      );
      setJapanTime(
        new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }))
      );
      setNewyorkTime(
        new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }))
      );
      setChinaTime(
        new Date(now.toLocaleString("en-US", { timeZone: "Asia/Shanghai" }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // GSAP animations

    gsap.set(".whos-when", { opacity: 0, x: 50 });

    // Animation for text elements (from initial state)
    gsap.fromTo(
      ".whos-when",
      {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out",
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        delay: 3.5, // Delay to ensure it completes after initial animation
      }
    );

    gsap.fromTo(
      ".clock-item",
      {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        delay: 2, // Delay to ensure it completes after initial animation
      }
    );
  }, []); // Only run once when the component mounts

  const formatTime = (time) => {
    const hours = time.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const amPm = time.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes}:${seconds} ${amPm}`;
  };

  const timeZones = [
    { label: "INDIA", time: IndiaTime },
    { label: "LONDON", time: londonTime },
    { label: "RUSSIA", time: russiaTime },
    { label: "JAPAN", time: japanTime },
    { label: "NEW YORK", time: newyorkTime },
    { label: "CHINA", time: ChinaTime },
  ];

  return (
    <div className="px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-20">
      <p className="font-lato whos-when font-semibold text-2xl sm:text-3xl">
        Who's When?
      </p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 mt-8 sm:mt-10">
        {timeZones.map(({ label, time }, index) => (
          <div
            key={index}
            className="clock-item flex items-center gap-4 w-full sm:w-auto"
          >
            <Clock value={time} />
            <div className="flex flex-col gap-1">
              <p className="font-lato font-semibold text-lg sm:text-xl">
                {label}
              </p>
              <p className="text-gray-600">{formatTime(time)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeDisplay;
