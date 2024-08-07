import { Movie } from './Movie'; 
export class Cart {
  private items: Movie[] = []; 

  addItem(item: Movie): void { 
    this.items.push(item);
  }

  getItems(): Movie[] { 
    return this.items;
  }
}
