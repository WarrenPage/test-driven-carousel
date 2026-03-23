import { ReactNode, useState } from "react";
import CarouselSlide, { CarouselSlideProps } from "./CarouselSlide";
import CarouselButton from "./CarouselButton";
import { useSlideIndex } from "./useSlideIndex";



type Slide = {
  imgUrl?: string;
  description?: ReactNode;
  attribution?: ReactNode;
};

type CarouselProps = {
  slides: Slide[];
  defaultImgHeight?: CarouselSlideProps["imgHeight"];
  DefaultImgComponent?: CarouselSlideProps["ImgComponent"];
};

const Carousel = ({ 
  slides,
  DefaultImgComponent, 
  defaultImgHeight 
}: CarouselProps) => {
  const [slideIndex, decrementSlideIndex, incrementSlideIndex] = useSlideIndex(slides);
  return (
    <div data-testid="carousel">
      <CarouselSlide 
      imgHeight={defaultImgHeight} 
      ImgComponent={DefaultImgComponent}
      {...slides?.[slideIndex]} />
      <CarouselButton
        data-testid="next-button"
        onClick={incrementSlideIndex}
      >
        Next
      </CarouselButton>
      {}
      <CarouselButton
        data-testid="prev-button"
        onClick={decrementSlideIndex}
      >
        Prev
      </CarouselButton>
    </div>
  );
};

export default Carousel;
