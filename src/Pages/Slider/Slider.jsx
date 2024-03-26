import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  ButtonPlay,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlinePauseCircle,
  MdOutlinePlayCircleOutline,
} from "react-icons/md";
import "./style.css";
import { useEffect, useState } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
// images here
import banner1 from '../../assets/banner/01.jpg'
import banner2 from '../../assets/banner/02.jpg'


const Sliders = () => {
  const [slide, setSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(slide)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setSlide((prevSlide) => (prevSlide === 1 ? 0 : prevSlide + 1));
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleBackClick = () => {
    // Decrement slide index
    if (slide === 0) {
      setSlide(1); // If the current slide is the first slide, set the slide index to the last slide
    } else {
      setSlide((prevSlide) => prevSlide - 1); // Otherwise, decrement the slide index
    }
  };
  const handleNextClick = () => {
    // Increment slide index
    if (slide === 1) {
      setSlide(0); // If the current slide is the last slide, set the slide index to the first slide
    } else {
      setSlide((prevSlide) => prevSlide + 1); // Otherwise, increment the slide index
    }
  };

  const renderDotButtons = () => {
    const totalSlides = 2; // Total number of slides
    const dots = [];
    for (let i = 0; i < totalSlides; i++) {
      // Conditionally render filled or unfilled dot based on current slide
      dots.push(
        slide === i ? ( // If current slide matches dot index, render filled dot
          <GoDotFill
            size="2.5em"
            key={i}
            onClick={() => setSlide(i)}
            className="cursor-pointer"
          />
        ) : (
          // Otherwise, render unfilled dot
          <GoDot
            size="2.5em"
            key={i}
            onClick={() => setSlide(i)}
            className="cursor-pointer"
          />
        )
      );
    }
    return dots;
  };

  return (
    <Link to="/">
      <div className="w-full cursor-pointer">
        <CarouselProvider
          visibleSlides={1}
          totalSlides={2}
          step={2}
          naturalSlideWidth={1000}
          naturalSlideHeight={300}
          hasMasterSpinner
          currentSlide={slide}
          isPlaying={isPlaying}
        >
          <Slider className="slider">
            <Slide index={0}>
              <Image src={banner1} />
              <div className="slide-text ">
                <h2 className="lg:text-7xl font-medium lg:mb-8 text-white">
                  Save up to $610 on Surface <br /> Laptop 5
                </h2>
                <p className="lg:text-2xl font-medium text-white mb-9">
                  Sophisticated style and multitasking speed powered by 12th Gen{" "}
                  <br /> Intel® Core. Offer ends 3/21.{" "}
                </p>
                <Link to="/" className=" bg-blue-800 p-3 text-white lg:text-3xl">
                  Shop Surface Laptop 5
                </Link>
              </div>
            </Slide>
            <Slide index={1}>
              <Image src={banner2} />
              <div className="slide-text ">
                <h2 className="lg:text-7xl font-medium lg:mb-8 text-white">
                  Unlock your potential with <br /> Microsoft Copilot{" "}
                </h2>
                <p className="lg:text-2xl font-medium text-white mb-9">
                  Get things done faster and unleash your creativity with the
                  power <br /> of AI anywhere you go.{" "}
                </p>
                <Link to="/" className=" bg-blue-800 p-3 text-white lg:text-3xl">
                  Download the Copiolot app
                </Link>
              </div>
            </Slide>
          </Slider>
          <div className="flex justify-center items-center gap-5 mt-10 dark:text-white">
            {/* <ButtonPlay childrenPlaying="Pause" childrenPaused="Play" /> */}
            <ButtonPlay
              childrenPlaying={<MdOutlinePauseCircle size="2.7em" />}
              childrenPaused={<MdOutlinePlayCircleOutline size="2.7em" />}
              onClick={() => setIsPlaying(!isPlaying)}
            />
            <ButtonBack onClick={handleBackClick}>
              <MdChevronLeft size="2.7em" />
            </ButtonBack>
            <DotGroup renderDots={renderDotButtons} className="flex gap-5" />
            <ButtonNext onClick={handleNextClick}>
              <MdChevronRight size="2.7em" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </Link>
  );
};

export default Sliders;
