import { Cart } from '../Cart';
import { Movie } from '../Movie';

describe('Cart', () => {
  let cart: Cart;
  const movie1 = new Movie(1, 'Начало', 2010, 'США', 'Ваш разум — это место преступления', 'Научная фантастика', 148, 500);
  const movie2 = new Movie(2, 'Интерстеллар', 2014, 'США', 'Человечество было рождено на Земле. Мы не должны умирать здесь.', 'Научная фантастика', 169, 600);

  beforeEach(() => {
    cart = new Cart();
    cart.addItem(movie1);
    cart.addItem(movie2);
  });

  it('должен корректно подсчитывать суммарную стоимость без скидки', () => {
    expect(cart.getTotalPrice()).toBe(1100); // 500 + 600
  });

  it('должен корректно подсчитывать суммарную стоимость со скидкой', () => {
    expect(cart.getTotalPriceWithDiscount(10)).toBe(990); // 1100 - 10% от 1100
    expect(cart.getTotalPriceWithDiscount(0)).toBe(1100); // Без скидки
    expect(cart.getTotalPriceWithDiscount(100)).toBe(0); // Полная скидка
  });

  it('должен удалять объект по id', () => {
    cart.removeItemById(1);
    expect(cart.getItems()).toEqual([movie2]); // Фильм с id 1 должен быть удален
  });

  it('должен корректно работать при попытке удаления несуществующего объекта', () => {
    cart.removeItemById(999);
    expect(cart.getItems()).toEqual([movie1, movie2]); // Удаление несуществующего фильма не должно менять корзину
  });
});
