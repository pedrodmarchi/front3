/* eslint-disable react/jsx-no-target-blank */
import './style.scss';
import Card from '../Card'

const Cards = () => {
  return (
    <div className="card-deck" id="projetos">
      <Card link="https://https://github.com/pedrodmarchi/DioInstagramClone" title="Dio Instagram Clone" text="Horroroso, mas eu nem sabia o que era React e var era coisa de futebol."/>
      <Card link="https://github.com/Larissa-Nunes/olimpify" title="Olimpify" text="Melhor momento do curso até aqui. Grupo fantástico. s2"/>
      <Card link="https://github.com/pedrodmarchi/FrontEnd2-2" title="Checkpoint Front 2" text="Feito na correria, pra variar..."/>
    </div>
  )
}

export default Cards;