import hero from '../images/Group 77.png';

export default function Main() {
  return (

    <div className="hero">
      <img src={hero} className="hero__image" alt="logo" />
      <h1 className="hero__heading">Online Experiences</h1>
      <p className="hero__description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
    
  );
}
