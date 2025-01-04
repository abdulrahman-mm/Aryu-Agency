import sample11111 from "../../assets/sample11111.svg";
import brandidentitydesign_businesscard from "../../assets/brandidentitydesign_businesscard.svg";
import brandidentitydesign_idcard from "../../assets/brandidentitydesign_idcard.svg";
import brandidentitydesign_letterhead from "../../assets/brandidentitydesign_letterhead.svg";
import brandidentitydesign_logoidentity from "../../assets/brandidentitydesign_logoidentity.svg";

const BrandIdentityDesign_Main = () => {
  let cardData = [
    {
      cardTitle: "Logo Identity",
      cardDescription:
        "A logo is the heart of your brand; it captures attention and defines your identity. As a result, our design services craft logos that reflect your unique essence. This ensures your brand stands out and leaves a lasting impression in the competitive market.",
      cardImage: brandidentitydesign_logoidentity,
    },
    {
      cardTitle: "Business Card",
      cardDescription:
        "Your business card is your brand’s first impression. At networking events, it speaks volumes with a clean design and essential details. Consequently, we create visually appealing cards that make sure your brand is remembered long after the handshake.",
      cardImage: brandidentitydesign_businesscard,
    },
    {
      cardTitle: "ID Card",
      cardDescription:
        "ID cards are symbols of professionalism, representing both employees and the company. Beyond simple identification, they enhance security and team pride. Thus, our designs align with your brand values, ensuring every card reflects your organization’s identity and commitment to excellence.",
      cardImage: brandidentitydesign_idcard,
    },
    {
      cardTitle: "Letterhead",
      cardDescription:
        "A letterhead represents your company in every communication, doubling as a promotional tool with legal validity. Moreover, we design personalized letterheads that strengthen your brand identity, ensuring every document reflects professionalism and leaves a lasting impression.",
      cardImage: brandidentitydesign_letterhead,
    },
  ];
  return (
    <section className="mt-32 px-5 py-5 md:px-14 md:py-14  lg:px-20 lg:py-20">
      <div className="flex flex-col justify-center items-center gap-10 mt-16 lg:mt-36">
        {cardData.map((item, index) => (
          <div
            className={`bg-white rounded-3xl gap-5 md:gap-10  flex flex-col-reverse md:flex-row ${
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

export default BrandIdentityDesign_Main;
