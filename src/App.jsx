import imgHero from "./assets/image-hero-mobile@2x.png";

export default function App() {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center">
        <span className="text-[1.75rem] font-extrabold text-dark-purple">
          skilled
        </span>
        <button className="text-b-sm bg-dark-purple text-white px-6 py-2.5 rounded-[1.75rem]">
          Get Started
        </button>
      </header>
      <h1 className="text-h-lg text-dark-purple mt-[38px]">
        Maximize skill, minimize budget
      </h1>
      <p className="text-b-sm leading-[26px] text-gray mt-[26px] mb-6">
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </p>
      <button className="text-b-sm bg-pink-gradient text-white px-6 py-2.5 rounded-[1.75rem]">
        Get Started
      </button>
      <img className="w-full" src={imgHero} alt="Image hero" />
    </div>
  );
}
