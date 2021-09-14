import { Cuisine } from './cuisine';

export interface Restaurant {
    _id: string;
    name: string;
    place: string;
    image: string;
    cuisines: Cuisine[];
}

export const restaurantImage = 'http://lorempixel.com/500/300';