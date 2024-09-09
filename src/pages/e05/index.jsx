import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";

export default function E05() {
const [nota1,setNota1] = useState(0);
const [nota2,setNota2] = useState(0);
const [nota3,setNota3] = useState(0);
const [total,setTotal] = useState(0);

function media(){

  setTotal()
}

  return (
    <div className="pagina-e05 pagina">
      <div className="cabecalho">
        <div className="titulo">
          <img src="./assets/images/logo.png" alt="logo" />

          <h1>React FreiS</h1>
        </div>

        <div className="links">
          <Link to="/" className="link">
            Inicio
          </Link>

          <Link to="/sobre" className="link">
            Sobre
          </Link>
        </div>
      </div>

      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <img
                className="voltar"
                src="./assets/images/voltar.png"
                alt="logo"
              />
            </Link>

            <h2>Exercício 05 - Média de Notas</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="faixa"></div>

        <div className="descricao">
          <p>
          Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.
          </p>
        </div>
        <div className="formulario">

          <div className="campos">

            <div className="colum">

              <div className="campo">
                
                <label>Nota 01</label>
                <input type="text" placeholder="Digite" onChange={(e) => setNomeLivro(e.target.value)} />
              </div>

              <div className="campo">
                <label>Nota 02</label>
                <input type="text" placeholder="0"  onChange={(e) =>setPaginas(e.target.value)}/>
              </div>

              <div className="campo">
                <label>Nota 03</label>
                <input type="text" placeholder="0" onChange={(e) =>setTempo(e.target.value)}/>
              </div>

            </div>

            <button className="executar" onClick={calculo} >Executar </button>

            <h3>A média do aluno é {savelivro} em {setLeitura} horas </h3>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}
