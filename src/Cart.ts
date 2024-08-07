import { Movie } from './Movie';

export class Cart {
  private items: Movie[] = []; // Хранилище для добавленных фильмов

  addItem(item: Movie): void {
    this.items.push(item); // Добавление фильма в корзину
  }

  getItems(): Movie[] {
    return this.items; // Возврат всех фильмов в корзине
  }

  getTotalPrice(): number {
    // Рассчитывает суммарную стоимость всех фильмов в корзине без скидки
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getTotalPriceWithDiscount(discount: number): number {
    // Рассчитывает суммарную стоимость всех фильмов в корзине с учетом скидки
    const totalPrice = this.getTotalPrice();
    return totalPrice - (totalPrice * (discount / 100));
  }

  removeItemById(id: number): void {
    // Удаляет фильм из корзины по id
    this.items = this.items.filter(item => item.id !== id);
  }
}
