import { useEffect } from "react";

interface useScrollArgs {
  area: 'top' | 'center' |'bottom',
  onScrollIn: () => any,
  onScrollOut: () => any,
}

const areas = {
  'top': 0.25,
  'center': 0.50,
  'bottom': 0.75,
}

export function useScroll({area, onScrollIn, onScrollOut}: useScrollArgs) {
    
  useEffect(() => {
    function onScroll() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      const activeArea = height * areas[area]

      if(scroll > activeArea) {
        return onScrollIn()
      }
      return onScrollOut()
    }

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);

  }, [area, onScrollIn, onScrollOut]);
}
