import compassIcon from "../img/icon-compass.svg"

export default function Card(props) {
  return (
    <div className="card">
      <img className="card__image" src={props.item.imageUrl} alt={props.item.title} />
      <div className="card__data-container">
        <div className="card__location-data">
          <img style={{ textColor: 'blue' }} className="card__compass-icon" src={compassIcon} alt="Compass icon" /><span className="card__location">{props.item.location}</span><a target="_blank" rel="noopener noreferrer" className="card__location-url" href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="card__title">{props.item.title}</h2>
        <div className="card__dates-container">
          <time>{props.item.startDate} - {props.item.endDate}</time>
        </div>
        <p className="card__description">{props.item.description}</p>
      </div>
    </div>
  )
}