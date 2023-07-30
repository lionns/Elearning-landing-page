export default function Card({key, img, title, bodyText}) {
  return (
    <div className="relative bg-white p-7 rounded-[10px] mt-10">
      <img
        className="absolute top-[-30px]"
        src={img}
        alt={key}
      />
      <h3 className="mt-5 text-[1.25rem] font-extrabold leading-none">
        {title}
      </h3>
      <p className="text-b-sm my-6 text-gray">
        {bodyText}
      </p>
      <a href="#" className="text-b-md text-pink-red font-bold">
        Get Started
      </a>
    </div>
  );
}
