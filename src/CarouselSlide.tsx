import { ComponentPropsWithRef, ReactNode } from "react";


const CarouselSlide = ({
  imgUrl,
  description,
  attribution,
  ...figureProps
}: {
    imgUrl?: string;
    description?: ReactNode;
    attribution?: ReactNode
} & ComponentPropsWithRef<"figure">) => (
  <figure {...figureProps}>
    <img src={imgUrl} />
    <figcaption data-testid="caption">
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
);

export default CarouselSlide;