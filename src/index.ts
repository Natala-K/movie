// src/index.ts

import { Cart } from './Cart';
import { Movie } from './Movie';

const cart = new Cart();
const movie = new Movie('Начало', 2010, 'США', 'Ваш разум — это место преступления', 'Sci-Fi', 148);

cart.addItem(movie);

console.log(cart.getItems());
