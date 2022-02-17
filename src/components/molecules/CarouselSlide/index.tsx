import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as S from './styled'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};


export const CarouselSlide = () => {
  return (
    <Carousel
    itemClass="carousel-item"
      containerClass="carousel-container"
      responsive={responsive}
      showDots={true}
      arrows={true}
      customLeftArrow={<S.Arrow><FaArrowLeft /></S.Arrow>}
      customRightArrow={<S.Arrow><FaArrowRight /></S.Arrow>}
    >
      <S.CarouselItem>
        <S.Icon />
        <S.Text>Pix</S.Text>
      </S.CarouselItem>  

      <S.CarouselItem>
        <S.Icon />
        <S.Text>Shell Box</S.Text>
      </S.CarouselItem> 

      <S.CarouselItem>
        <S.Icon />
        <S.Text>Inter Travel</S.Text>
      </S.CarouselItem> 

      <S.CarouselItem>
        <S.Icon />
        <S.Text>Inter Cell</S.Text>
      </S.CarouselItem> 

      <S.CarouselItem>
        <S.Icon />
        <S.Text>Gift Card</S.Text>
      </S.CarouselItem> 

    </Carousel>
  );
};
