
export class Movie {
    constructor(
      public title: string,
      public year: number,
      public country: string,
      public tagline: string,
      public genre: string,
      public duration: number 
    ) {}
  
    getInfo(): string {
      return `${this.title} (${this.year}) - ${this.genre}, ${this.duration} мин, ${this.country}, "${this.tagline}"`;
    }
  }
  