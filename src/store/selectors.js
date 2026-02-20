export const filterAndSortMovies = (movies, filters) => {
    const {search, genre, rating} = filters;

    let filtered = movies
        .filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))
        .filter((m) => !genre || m.genre === genre)
        .filter((m) => {
            if (rating === '>=5') return Number(m.rating) >= 5;
            if (rating === '<5') return Number(m.rating) < 5;
            return true;
        });

    if (rating === '0-10') {
        filtered = filtered.sort((a, b) => Number(a.rating) - Number(b.rating));
    } else if (rating === '10-0') {
        filtered = filtered.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return filtered;
};
