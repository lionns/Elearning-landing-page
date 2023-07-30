import Card from "./components/Card.jsx";
import imgHero from "./assets/image-hero-mobile@2x.png";
import imgAnimation from "./assets/icon-animation.svg";
import imgDesign from "./assets/icon-design.svg";
import imgPhotography from "./assets/icon-photography.svg";
import imgCrypto from "./assets/icon-crypto.svg";
import imgBusiness from "./assets/icon-business.svg";

export default function App() {
  let cardInfo = [
    {
      title: "Animation",
      img: imgAnimation,
      bodyText:
        "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    },
    {
      title: "Design",
      img: imgDesign,
      bodyText:
        "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    },
    {
      title: "Photography",
      img: imgPhotography,
      bodyText:
        "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    },
    {
      title: "Crypto",
      img: imgCrypto,
      bodyText:
        "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    },
    {
      title: "Business",
      img: imgBusiness,
      bodyText:
        "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    },
  ];

  return (
    <>
      <div className="">
        <header className="flex justify-between items-center px-4 pt-4">
          <span className="text-[1.75rem] font-extrabold text-dark-purple">
            skilled
          </span>
          <button className="text-b-sm bg-dark-purple text-white px-6 py-2.5 rounded-[1.75rem]">
            Get Started
          </button>
        </header>
        <section className="px-4">
          <h1 className="text-h-lg text-dark-purple mt-[38px]">
            Maximize skill, minimize budget
          </h1>
          <p className="text-b-sm leading-[26px] text-gray mt-[26px] mb-6">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <button className="text-b-sm bg-pink-gradient text-white px-6 py-2.5 rounded-[1.75rem]">
            Get Started
          </button>
        </section>
        <img
          className="mt-10"
          src={imgHero}
          alt="Course hours and members"
        />
        <section className="px-4">
          <div className="bg-pink-gradient p-7 rounded-[10px] mb-10">
            <p className="text-h-sm text-white leading-8">
              Check out our most popular courses!
            </p>
          </div>
          {cardInfo.map((card) => (
            <Card
              key={card.title}
              img={card.img}
              title={card.title}
              bodyText={card.bodyText}
            />
          ))}
        </section>
      </div>
      <footer className="mt-[80px] px-4 py-9 flex justify-between items-center bg-dark-purple">
        <span className="text-[1.75rem] font-extrabold text-white">
          skilled
        </span>
        <button className="text-b-sm bg-purple-gradient text-white px-6 py-2.5 rounded-[1.75rem]">
          Get Started
        </button>
      </footer>
    </>
  );
}
