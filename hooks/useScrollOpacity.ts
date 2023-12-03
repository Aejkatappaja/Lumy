import React from 'react';

const useScrollOpacity = () => {
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const newOpacity = Math.min(window.scrollY / maxScroll, 1);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return opacity;
};

export default useScrollOpacity;
