/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import './style.scss';

const Card = ({link, title, text}) => {
  return (
        <div className="card">
          <a href={link} target="_blank">
            <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" className="card-img-top" alt="gato do github" />
          </a>
          <div className ="card-body">
            <h5 className ="card-title">{title}</h5>
            <p className ="card-text">{text}</p>
          </div>
        </div>
  )
}
export default Card;