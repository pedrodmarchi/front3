/* eslint-disable jsx-a11y/alt-text */
import './style.scss';

const Card = ({img, alt, title}) => {
  return (
        <div class="card">
          <img src={img} class="card-img-top" alt={alt} />
          <div class ="card-body">
            <h5 class ="card-title">{title}</h5>
          </div>
        </div>
  )
}

export default Card;