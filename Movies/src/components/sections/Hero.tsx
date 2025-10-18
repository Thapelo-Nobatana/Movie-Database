import React from "react";

const Hero: React.FC = () => {
  return (
    <section>
      <div
        className="container flex flex-col justify-center items-center gap-1.5 md:flex  md:justify-between md:items-center"
        style={{ marginBottom: "50px", marginTop: "20px" }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="text-2xl font-bold md:items-center  text-white">
              FIND MOVIES
            </div>
            <div className=" text-sm  md:items-center  md:text-6xl font-bold bg-[linear-gradient(135deg,#2203FF,#C40D60)] bg-clip-text text-transparent">
              TV SHOWS AND MORE
            </div>
          </div>
          <div className=" md:w-150">
            <p className="text-white text">
              Discover and explore the world of movies! From timeless classics
              {/* <br /> */}
              to the latest blockbusters, our movie app helps you find, watch,
              and keep track of your favorite films all in one place.
            </p>
          </div>
        </div>
        <div className="self-center">
          <img
            src="/image/Hero.png"
            className=" w-50 md:w-full md:h-160"
            alt="Hero photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
