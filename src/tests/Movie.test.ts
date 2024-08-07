import { Movie } from '../Movie';

describe('Movie', () => {
  it('should create a movie instance with given properties', () => {
    const movie = new Movie('Начало', 2010, 'США', 'Ваш разум — это место преступления', 'Sci-Fi', 148);
    expect(movie.title).toBe('Начало');
    expect(movie.year).toBe(2010);
    expect(movie.country).toBe('США');
    expect(movie.tagline).toBe('Ваш разум — это место преступления');
    expect(movie.genre).toBe('Sci-Fi');
    expect(movie.duration).toBe(148);
  });

  it('should return correct info', () => {
    const movie = new Movie('Начало', 2010, 'США', 'Ваш разум — это место преступления', 'Sci-Fi', 148);
    expect(movie.getInfo()).toBe('Начало (2010) - Sci-Fi, 148 мин, США, "Ваш разум — это место преступления"');
  });
});
