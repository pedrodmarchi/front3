/* eslint-disable react/jsx-no-target-blank */
import './style.scss';

const Cards = () => {
  return (
    <div className="card-deck" id="projetos">
      
      <div className="card">
        <a href="https://https://github.com/pedrodmarchi/DioInstagramClone" target="_blank">
        <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" className="card-img-top" alt="..." />
        </a>
        <div className ="card-body">
        <h5 className ="card-title">Instagram Clone</h5>
        <p className ="card-text">Horroroso, mas eu nem sabia o que era React e var era coisa de futebol.</p>
      </div>
      </div>
      <div className="card">
        <a href="https://github.com/Larissa-Nunes/olimpify" target="_blank">
        <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" className="card-img-top" alt="..." />
        </a>
        <div className ="card-body">
        <h5 className ="card-title">Olimpify</h5>
        <p className ="card-text">Melhor momento do curso até aqui. Grupo fantástico s2</p>
      </div>
      </div>
      <div className="card">
        <a href="https://github.com/pedrodmarchi/FrontEnd2-2" target="_blank">
        <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" className="card-img-top" alt="..." />
        </a>
        <div className ="card-body">
        <h5 className ="card-title">Checkpoint Front 2</h5>
        <p className ="card-text">Feito na correria, pra variar.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards;