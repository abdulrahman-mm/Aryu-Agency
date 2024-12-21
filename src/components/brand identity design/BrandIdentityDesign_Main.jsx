import sample11111 from "../../assets/sample11111.svg";
import brandidentitydesign_businesscard from '../../assets/brandidentitydesign_businesscard.svg'
import brandidentitydesign_idcard from '../../assets/brandidentitydesign_idcard.svg'
import brandidentitydesign_letterhead from '../../assets/brandidentitydesign_letterhead.svg'

const BrandIdentityDesign_Main = () => {
  let cardData = [
    {
      cardTitle: "Logo Identity",
      cardDescription:
        "The logo is the heart of your brand—it grabs attention and defines who you are. With our design services, we craft logos that capture your unique essence, making sure you shine in the market.",
      cardImage: sample11111,
    },
    {
      cardTitle: "Business Card",
      cardDescription:
        "Your brand is powerfully introduced by your business card. At networking gatherings, we create appealing cards with simple information that leave a lasting impression.",
      cardImage: brandidentitydesign_businesscard,
    },
    {
      cardTitle: "ID Card",
      cardDescription:
        "ID cards symbolize your brand's professionalism. They’re more than just IDs; they represent both your employees and the company. We design ID cards that reflect your company's values, boost security, and promote team pride.",
      cardImage: brandidentitydesign_idcard,
    },
    {
      cardTitle: "Letterhead",
      cardDescription:
        "Letterhead is crucial for communication and reflects your company. It serves as a promotional tool and holds legal validity. We create custom letterheads that enhance your brand identity, ensuring every message is memorable.",
      cardImage: brandidentitydesign_letterhead,
    },
  ];
  return (
    <section className="mt-32 px-20">
      

      <div className=" flex flex-col gap-5 mt-36">
        {cardData.map((item, index) => (
          <div
            

            className={` bg-white rounded-3xl gap-5 items-center my-8 px-10 py-10 flex ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            } h-[90vh] justify-between`}
          >
            <div className="basis-[40%] flex flex-col justify-center gap-10 items-start">
              <p className="text-5xl font-opensans font-semibold text-black">{item.cardTitle}</p>
              <p className="text-xl font-poppins  text-gray-500">{item.cardDescription}</p>

              
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

export default BrandIdentityDesign_Main;
