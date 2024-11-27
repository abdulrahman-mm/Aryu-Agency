import footer_video from "../assets/Video/footer_video.mp4";
import aryu_logo from "../assets/aryu_logo.png";

function Footer() {
  const logos = Array(5).fill(aryu_logo); // Replace with actual image paths

  return (
    <section className="bg-black px-14">
      <div className="relative h-[600px]">
        <video
          src={footer_video}
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="relative overflow-hidden w-full flex h-full items-center">
          <div className="flex gap-36 px-20 absolute animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-60 h-32 object-cover flex-shrink-0 mr-4"
              />
            ))}
            {/* Duplicate for seamless looping */}
            {logos.map((logo, index) => (
              <img
                key={index + logos.length}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-60 h-32 object-cover flex-shrink-0 mr-4"
              />
            ))}
            {/* Duplicate for seamless looping */}
            {logos.map((logo, index) => (
              <img
                key={index + logos.length}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-60 h-32 object-cover flex-shrink-0 mr-4"
              />
            ))}

            {logos.map((logo, index) => (
              <img
                key={index + logos.length}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-60 h-32 object-cover flex-shrink-0 mr-4"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-20 gap-28">
        <div className="flex flex-col gap-5">
          <p className="text-white font-semibold text-lg">COMPANY</p>
          <div className="flex flex-col text-white/60 gap-2">
            <p className="cursor-pointer hover:text-white">ABOUT US</p>
            <p className="cursor-pointer hover:text-white">WHY CHOOSE US</p>
            <p className="cursor-pointer hover:text-white">PROJECTS</p>
            <p className="cursor-pointer hover:text-white">COLLOBORATIONS</p>
            <p className="cursor-pointer hover:text-white">WORK WITH US</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-white font-semibold text-lg">SERVICES</p>
          <div className="flex flex-col text-white/60 gap-2">
            <p className="cursor-pointer hover:text-white">
              STRATEGIC BRANDING
            </p>
            <p className="cursor-pointer hover:text-white">WEBSITE UI DESIGN</p>
            <p className="cursor-pointer hover:text-white">PRINTING DESIGN</p>
            <p className="cursor-pointer hover:text-white">DIGITAL MARKETING</p>
            <p className="cursor-pointer hover:text-white">
              PERSONALIZED SERVICE
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-white font-semibold text-lg">CLIENTS</p>
          <div className="flex flex-col text-white/60 gap-2">
            <p className="cursor-pointer hover:text-white">RESOURCES</p>
            <p className="cursor-pointer hover:text-white">CASE STUDIES</p>
            <p className="cursor-pointer hover:text-white">TESTIMONIALS</p>
            <p className="cursor-pointer hover:text-white">WORK PROCESS</p>
            <p className="cursor-pointer hover:text-white">CUSTOMER SERVICE</p>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#1A1A19" }}
          className="rounded-3xl px-8 py-8"
        >
          <p className="text-white font-semibold text-lg ">SUBSCRIBE TO OUR</p>
          <p className="font-bold text-white text-5xl mt-2">NEWSLETTER</p>
          <div className="flex gap-8 mt-8">
            <input
              className="border-b-2 border-white/20 outline-none bg-transparent text-white"
              type="text"
              name=""
              id=""
              placeholder="Enter your email address..."
            />
            <button className="bg-white cursor-pointer text-black px-5 py-2 rounded-full font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-white/60 py-14">
        <p>Copyright © ARYU AGENCY 2024</p>

        <div className="flex gap-5">
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p>|</p>
          <p className="cursor-pointer hover:text-white">Terms & Condition</p>
          <p>|</p>
          <p className="cursor-pointer hover:text-white">Site Map</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
