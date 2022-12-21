import "./CampoTexto.css";

interface CampoTextoProps {
  /* O "aoAlterado" é uma função "void" que recebe uma string por parâmetro. */
  aoAlterado: (valor: string) => void;
  placeholder: string;
  valor: string;
  label: string;
  obrigatorio?: boolean;
  tipo?: "text" | "password" | "date" | "email" | "number";
}

const CampoTexto = ({
  aoAlterado,
  placeholder,
  valor,
  label,
  obrigatorio = false,
  tipo = "text",
}: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
        type={tipo}
      />
    </div>
  );
};

export default CampoTexto;
