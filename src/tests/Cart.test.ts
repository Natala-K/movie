import { Cart } from '../Cart';
import { Movie } from '../Movie';

describe('Cart', () => {
  it('should add movie to the cart', () => {
    const cart = new Cart();
    const movie = new Movie('Начало', 2010, 'США', 'Ваш разум — это место преступления', 'Sci-Fi', 148);
    cart.addItem(movie);

    expect(cart.getItems()).toContain(movie);
  });

  it('should return all items in the cart', () => {
    const cart = new Cart();
    const movie1 = new Movie('Начало', 2010, 'США', 'Ваш разум — это место преступления', 'Sci-Fi', 148);
    const movie2 = new Movie('Интерселлар', 2014, 'США', 'Человечество родилось на Земле', 'Sci-Fi', 169);

    cart.addItem(movie1);
    cart.addItem(movie2);

    expect(cart.getItems()).toEqual([movie1, movie2]);
  });
});
