import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";

export default function E04() {

  return (
    <div className="pagina-e04 pagina">
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

            <h2>Exercício 05 - Leitura de livro</h2>
          </div>
          <hr className="faixa" />
        </div>

        <div className="faixa"></div>

        <div className="descricao">
          <p>
            Implementar um programa em Javascript que calcule o tempo que um
            livro será lido por uma pessoa a partir do nome do livro, do total
            de páginas e do tempo em
            <br /> segundos de leitura por página
          </p>
        </div>
        <div className="formulario">

          <div className="campos">

            <div className="colum">

              <div className="campo">
                
                <label>Nome do livro</label>
                <input type="text" placeholder="Digite"  />
              </div>

              <div className="campo">
                <label>Total de página</label>
                <input type="text" placeholder="0"  />
              </div>

              <div className="campo">
                <label>Tempo em segundos de leitura</label>
                <input type="text" placeholder="0" />
              </div>

            </div>

            <button className="executar"  >Executar </button>

            <h3>Você lera {} em {} horas </h3>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}
/*(((tempo*paginas) / 60)/60).toFixed(2)*/
