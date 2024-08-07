import { Cart } from './Cart';
import { Movie } from './Movie';

// Создание корзины и фильмов
const cart = new Cart();
const movie1 = new Movie(1, 'Начало', 2010, 'США', 'Ваш разум — это место преступления', 'Научная фантастика', 148, 500);
const movie2 = new Movie(2, 'Интерстеллар', 2014, 'США', 'Человечество было рождено на Земле. Мы не должны умирать здесь.', 'Научная фантастика', 169, 600);

// Добавление фильмов в корзину
cart.addItem(movie1);
cart.addItem(movie2);

// Вывод информации о корзине
console.log('Фильмы в корзине:');
console.log(cart.getItems());

// Вывод суммарной стоимости без скидки
console.log(`Суммарная стоимость без скидки: ${cart.getTotalPrice()} рублей`);

// Вывод суммарной стоимости со скидкой
const discount = 10; // Скидка 10%
console.log(`Суммарная стоимость со скидкой ${discount}%: ${cart.getTotalPriceWithDiscount(discount)} рублей`);

// Удаление фильма из корзины
cart.removeItemById(1);
console.log('Фильмы в корзине после удаления фильма с id 1:');
console.log(cart.getItems());
