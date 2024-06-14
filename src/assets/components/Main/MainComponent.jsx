import CarouselComponent from "../Carousel/CarouselComponent";
import posts from "../../data/posts";

import { useState, useEffect } from "react";
import { MdArrowBackIos as Arrowleft, MdArrowForwardIos as Arrowright } from "react-icons/md";



const MainComponent = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = posts.length;
  
  const [slideClass, setSlideClass] = useState("");
  
    // se clicco su left applico la classe con l'animazione e imposto l'indice di post all'elemento successivo
    const leftClick = () => {
    setSlideClass("left");
    setCurrentSlide(currentSlide => currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };
  
  // right
  const rightClick = () => {
    setSlideClass("right");
    setCurrentSlide(currentSlide => currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };
  
  // setto un timer che si innesca col cambiamento della currentSlide
  // ovvero quando si innescano le funzioni di right e left
  // mi resetta la classe di slides left or right dopo 5 milisecondi
  useEffect(() => {
    const timerEffect = setTimeout(() => {
      console.log("resetto la classe");
      setSlideClass('');
      rightClick(); 
    }, 6000);
    return () => clearTimeout(timerEffect);
  }, [currentSlide]);

  // setto un timer di autoscorrimento
  const autoPilot = () => {
    const timerPilot = setTimeout(() => {
      console.log("autoPilot");
      rightClick();
      autoPilot(); // Richiama se stesso per continuare il ciclo automatico
    }, 6000);
    useEffect(() => () => clearTimeout(timerPilot), []);
  };

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
        <div className="d-flex flex-wrap justify-content-center align-items-center btn me-5" onClick={() => leftClick()}>
          <Arrowleft/>
        </div>
        <div className={`slide ${slideClass}`}>
          <CarouselComponent
            title={posts[currentSlide].title}
            image={posts[currentSlide].image}
            content={posts[currentSlide].content}
            tags={posts[currentSlide].tags}
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center btn ms-5" onClick={() => rightClick()}>
          <Arrowright/>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center pt-3 mb-5">
        {Array.from({ length: totalSlides }).map((el,index) => (
          <div 
          key={index} 
          className={currentSlide === index ? "bullet selected" : "bullet"} 
          onClick={() => setCurrentSlide(index)}>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;


