export default function Paginate({items, currentPage, onPageChange}) {
    const itemsPerPage = 10;
    const totalPages = Math.ceil(items / itemsPerPage);

    return (
        <div className='flex justify-center items-center gap-4 mt-5'>
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className='text-teal-600 hover:underline disabled:opacity-50 disabled:cursor-not-allowed'
            >
                <i className='fa-solid fa-angle-left'></i> Prev
            </button>
            <span className='text-sm font-medium'>
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() =>
                    onPageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className='text-teal-600 hover:underline disabled:opacity-50 disabled:cursor-not-allowed'
            >
                Next <i className='fa-solid fa-angle-right'></i>
            </button>
        </div>
    );
}
