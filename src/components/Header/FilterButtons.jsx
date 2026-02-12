function FilterButtons({onGenreChange, onRatingChange}) {
    const handleGenre = (e) => {
        onGenreChange(e.target.value);
    };

    const handleRating = (e) => {
        onRatingChange(e.target.value);
    };

    return (
        <div className='flex flex-row self-end gap-3 pl-4 pr-4'>
            <div className='px-4 py-2 rounded-md  text-orange-800 border-2 border-orange-700 bg-orange-300 hover:bg-orange-400'>
                <form>
                    <label htmlFor='genre' className='m-1'>
                        <strong>Genre </strong>
                    </label>
                    <select
                        id='genre'
                        className=' bg-white border-2  border-orange-700 p-1 rounded-sm'
                        onChange={handleGenre}
                    >
                        <option value=''>All Genres</option>
                        <option value='drama'>Drama</option>
                        <option value='horror'>Horror</option>
                        <option value='action'>Action</option>
                        <option value='fantasy'>Fantasy</option>
                    </select>
                </form>
            </div>
            <div className='px-4 py-2 rounded-md text-orange-800 border-2  border-orange-700 bg-orange-300 hover:bg-orange-400'>
                <form id='rating'>
                    <label htmlFor='rating' className='m-1'>
                        <strong>Rating </strong>
                    </label>
                    <select
                        id='rating'
                        className='bg-white p-1 border-2  border-orange-700 rounded-sm'
                        onChange={handleRating}
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
