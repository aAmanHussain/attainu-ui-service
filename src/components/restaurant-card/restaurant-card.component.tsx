import { Restaurant, restaurantImage } from '../../models/restaurant';

export const RestaurantCardComponent = ({ name, place, image = restaurantImage }: Restaurant) => {
    return (
        <div className="card-item">
            <ins>Restaurant</ins>
            <img src={`assets/restaurants/${image}`} alt={name} title={name} />
            <strong>{name.toUpperCase()}</strong>
            <br/>
            <small>Place: {place}</small>
        </div>
    );
}