import { Movie } from '../Movie';

describe('Movie', () => {
  const movie = new Movie(
    1, // id
    'Начало', // title
    2010, // year
    'США', // country
    'Ваш разум — это место преступления', // tagline
    'Научная фантастика', // genre
    148, // duration
    500 // price
  );

  it('должен корректно инициализировать объект фильма с заданными свойствами', () => {
    expect(movie.id).toBe(1);
    expect(movie.title).toBe('Начало');
    expect(movie.year).toBe(2010);
    expect(movie.country).toBe('США');
    expect(movie.tagline).toBe('Ваш разум — это место преступления');
    expect(movie.genre).toBe('Научная фантастика');
    expect(movie.duration).toBe(148);
    expect(movie.price).toBe(500);
  });

  it('должен корректно возвращать информацию о фильме', () => {
    expect(movie.getInfo()).toBe(
      'Начало (2010) - Научная фантастика, 148 мин, США, "Ваш разум — это место преступления"'
    );
  });
});
