import CarouselComponent from "../Carousel/CarouselComponent";
import posts from "../../data/posts";

import { useState } from "react";
import { MdArrowBackIos as Arrowleft, MdArrowForwardIos as Arrowright } from "react-icons/md";



const MainComponent = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = posts.length;

  return (
    <main
      className="container-fluid"
      style={{
        backgroundColor: "gray",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "30px 0px",
          fontSize: "2.5rem",
          color: "white",
        }}
      >
        Il mio Blog
      </h1>
      {/* carousel */}
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        <Arrowleft onClick={() => setCurrentSlide(currentSlide=> currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)} />
        <CarouselComponent
          title={posts[currentSlide].title}
          image={posts[currentSlide].image}
          content={posts[currentSlide].content}
          tags={posts[currentSlide].tags}
        />
        <Arrowright onClick={() => setCurrentSlide(currentSlide => currentSlide === totalSlides - 1 ? 0 : currentSlide + 1)} />
          
      </div>
    </main>
  );
};

export default MainComponent;


