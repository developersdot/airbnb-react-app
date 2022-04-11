
import star from '../images/Star 1.svg';

export default function Card(props) {
  return (

    <div className="card">
      <img src={`./images/${props.img}`} className="card__image" alt="logo" />
      <div>
        <span><img src={star} className="card__star" alt="card-image" />{props.star}</span>
        <span className="clr-grey" >({props.reviews})</span>
        <span className="clr-grey"> - {props.location}</span>
      </div>
      <p className="card__tagline">{props.tagline}</p>
      <p className="card__pricingdetail"><span className="card__price">From {props.price}</span> / <span>person</span></p>
    </div>

  );
}