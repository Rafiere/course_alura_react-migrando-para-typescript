import { ReactElement } from "react";
import "./Botao.css";

import React from "react";

/* A extensão ".tsx" significa que o componente está escrito em TypeScript e retorna um JSX. */

/* Essa interface é utilizada para declararmos os tipos que serão recebidos pelo componente "Botao". */
interface BotaoProps {
  children: ReactElement | string;
}

const Botao = (props: BotaoProps) => {
  return <button className="botao">{props.children}</button>;
};

export default Botao;
