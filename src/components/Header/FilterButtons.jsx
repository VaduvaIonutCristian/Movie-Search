function FilterButtons({onGenreChange, onRatingChange, genre, rating}) {
    const handleGenre = (e) => {
        if (onGenreChange) onGenreChange(e.target.value || '');
    };

    const handleRating = (e) => {
        if (onRatingChange) onRatingChange(e.target.value || '');
    };

    return (
        <div className='flex flex-wrap items-center md:justify-end gap-3'>
            <div className='px-3 sm:px-4 py-2 rounded-md text-orange-800 border-2 border-orange-700 bg-orange-300 hover:bg-orange-400 transition'>
                <form className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2'>
                    <label htmlFor='genre' className='text-sm sm:text-base'>
                        <strong>Genre </strong>
                    </label>
                    <select
                        id='genre'
                        className='bg-white border-2 border-orange-700 p-1 rounded-sm text-xs sm:text-sm'
                        onChange={handleGenre}
                        value={genre || ''}
                    >
                        <option value=''>All Genres</option>
                        <option value='drama'>Drama</option>
                        <option value='horror'>Horror</option>
                        <option value='action'>Action</option>
                        <option value='fantasy'>Fantasy</option>
                    </select>
                </form>
            </div>

            <div className='px-3 sm:px-4 py-2 rounded-md text-orange-800 border-2 border-orange-700 bg-orange-300 hover:bg-orange-400 transition'>
                <form
                    id='rating'
                    className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2'
                >
                    <label htmlFor='rating' className='text-sm sm:text-base'>
                        <strong>Rating </strong>
                    </label>
                    <select
                        id='rating'
                        className='bg-white p-1 border-2 border-orange-700 rounded-sm text-xs sm:text-sm'
                        onChange={handleRating}
                        value={rating || ''}
                    >
                        <option value=''>All</option>
                        <option value='0-10'>0 - 10</option>
                        <option value='10-0'>10 - 0</option>
                        <option value='>=5'>&gt;= 5</option>
                        <option value='<5'>&lt; 5</option>
                    </select>
                </form>
            </div>
        </div>
    );
}

export default FilterButtons;
