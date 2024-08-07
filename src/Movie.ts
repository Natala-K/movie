export class Movie {
    constructor(
      public id: number, // Идентификатор фильма
      public title: string, // Название фильма
      public year: number, // Год выпуска
      public country: string, // Страна производства
      public tagline: string, // Слоган фильма
      public genre: string, // Жанр
      public duration: number, // Продолжительность в минутах
      public price: number // Цена фильма
    ) {}
  
    getInfo(): string {
      return `${this.title} (${this.year}) - ${this.genre}, ${this.duration} мин, ${this.country}, "${this.tagline}"`;
    }
  }
  