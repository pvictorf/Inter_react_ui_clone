import React, { useEffect, useRef } from 'react';
import { Logo } from '../../atoms/Logo';
import * as S from './styled'

interface CreditCardProps {
  name: string;
}


export const CreditCard = ({name}: CreditCardProps) => {
  const cardEl = useRef<HTMLDivElement>(null);
  const cardTransitionRef = useRef<NodeJS.Timeout>();
   
  useEffect(() => {
    cardEl.current?.addEventListener('mousemove', cardEffect)
    cardEl.current?.addEventListener('mouseleave', cardReset)
    cardEl.current?.addEventListener('mouseenter', cardEnter)
  })

  function cardEffect(event: MouseEvent) {
    const card = cardEl.current;
    if(card) {
      const cardWidth = card.offsetWidth
      const cardHeight = card.offsetHeight
      const centerX = card.offsetLeft + cardWidth / 2
      const centerY = card.offsetTop + cardHeight / 2
      const positionX = event.clientX - centerX
      const positionY = event.clientY - centerY
      const perspective = 40;

      const rotateX = ((+1) * perspective * positionY / (cardHeight / 2)).toFixed(2)
      const rotateY = ((-1) * perspective * positionX / (cardHeight / 2)).toFixed(2)
      
      card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` 
    }
  }

  function cardReset(event: MouseEvent) {
    const card = cardEl.current
    if(card) {
      card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`
      cardTransition()
    } 
  }

  function cardTransition(milleseconds = 400) {
    const card = cardEl.current
    if(card) {  
      if(cardTransitionRef.current) clearTimeout(cardTransitionRef.current);
      card.style.transition = `transform ${milleseconds}ms`
      cardTransitionRef.current = setTimeout(() => { card.style.transition = ''}, milleseconds) 
    }
  }

  function cardEnter() {
    cardTransition()
  }

  return (
    <S.CreditCard ref={cardEl}>
      <S.CreditCardHeader>
        <S.Chip />
      </S.CreditCardHeader>
      <S.CreditCardFooter>
        <S.CreditCardName>{name.toUpperCase()}</S.CreditCardName>
        <Logo fill='white' />
        <S.MasterCard />
      </S.CreditCardFooter>
    </S.CreditCard>
  );
}
