import React from 'react';

interface TextProps {
  text: string;
}

export const Text: React.FC<TextProps> = ({ text }) => {
  return <h2 className='oldGrey'>{text}</h2>;
};
