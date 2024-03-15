import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mx-32 my-16">
      <div
        className="hero min-h-[550px] items-center place-items-start"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/4sDXgNF/Highlight-Slim-Multi-Canvas-AEM-Game-Pass-Ultimate-VP5-1596x600.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-start ms-[5%] text-white">
          <div className="max-w-[60%]">
            <h1 className="mb-10 text-7xl font-bold">
              Xbox Game Pass <br /> Ultimate
            </h1>
            <p className="mb-10 text-white text-2xl">
              Play new games on day one. Plus, enjoy hundreds of high-quality
              games with friends on console and PC.
            </p>
            <Link to="/" className=" bg-blue-600 font-bold p-4 text-white text-3xl">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
