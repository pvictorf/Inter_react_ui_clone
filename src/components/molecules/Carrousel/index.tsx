import React from 'react';
import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';

interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string;
 
}

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}

export const CustomLeftArrow = ({ onClick }:CustomLeftArrowProps) => {
  return <div onClick={onClick}>This is My custom arrow</div>
}

export const CarouselButtonGroup = ({ next, previous }:CarouselButtonGroupProps) => {
  return (
    <div>
      <button onClick={previous} />
      <button onClick={next} />
    </div>
  );
};

export const CustomDots = ({ index, active, onClick, carouselState }:DotProps) => {
  return <div onClick={() => onClick }>This is a Custom dots</div>
}