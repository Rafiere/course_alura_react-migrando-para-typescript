import React, { useState } from "react";
import { IColaborador } from "../../shared/interfaces/IColaborador";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  times: string[];
}

const Formulario = ({ aoColaboradorCadastrado, times }: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [data, setData] = useState("");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    setData("");
  };

  return (
    <section className="formulario">
      <form onSubmit={(evento) => aoSalvar(evento)}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          aoAlterado={(valor) => setData(data)}
          label="Data de Entrada no Time"
          placeholder=""
          valor={data}
          obrigatorio={true}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
