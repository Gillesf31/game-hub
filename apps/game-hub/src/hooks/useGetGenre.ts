import useGenres from './useGenres';

const useGetGenre = (genreId?: number) => {
  const { data: genres } = useGenres();
  if (!genreId) return undefined;
  const genre = genres?.results.find((genre) => genre.id === genreId);
  return genre;
};

export default useGetGenre;
