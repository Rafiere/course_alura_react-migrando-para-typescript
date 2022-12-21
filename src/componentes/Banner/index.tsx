import "./Banner.css";

import React from "react";

/* Quando colocamos uma "?", o TypeScript entende que um parâmetro é opcional. */
interface BannerProps {
  enderecoImagem: string;
  textoAlternativo?: string;
}

export const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps) => {
  // JSX
  return (
    <header className="banner">
      <img src={enderecoImagem} alt={textoAlternativo} />
    </header>
  );
};

export default Banner;
