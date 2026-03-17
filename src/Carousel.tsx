import { ReactNode, useState } from "react";
import CarouselSlide, { CarouselSlideProps } from "./CarouselSlide";
import CarouselButton from "./CarouselButton";

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
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div data-testid="carousel">
      <CarouselSlide 
      imgHeight={defaultImgHeight} 
      ImgComponent={DefaultImgComponent}
      {...slides?.[slideIndex]} />
      <CarouselButton
        data-testid="next-button"
        onClick={() => {
          if (!slides) return;
          setSlideIndex((i) => (i + 1) % slides.length);
        }}
      >
        Next
      </CarouselButton>
      {}
      <CarouselButton
        data-testid="prev-button"
        onClick={() => {
          if (!slides) return;
          setSlideIndex((i) => (i + slides.length - 1) % slides.length);
        }}
      >
        Prev
      </CarouselButton>
    </div>
  );
};

export default Carousel;
