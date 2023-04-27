import styles from '../scss/_pagination.module.scss';

export function Pagination({
  itemsCount,
  itemsPerPage,
  paginate,
  currentPage,
  previousPage,
  nextPage,
}) {
  const pagesCount = [];
  for (let index = 1; index < Math.ceil(itemsCount / itemsPerPage) + 1; index++) {
    pagesCount.push(index);
  }

  return (
    <nav className={styles.pagination}>
      <button onClick={previousPage}>
        <svg width="800px" height="800px" viewBox="7 5 10 12" xmlns="http://www.w3.org/2000/svg">
          <polyline
            fill="none"
            stroke="#fe5f1e"
            strokeWidth="1"
            points="9 6 15 12 9 18"
            transform="matrix(-1 0 0 1 24 0)"
          />
        </svg>
      </button>
      {pagesCount.map((index) => (
        <button
          key={index}
          className={index === currentPage ? styles.active : ''}
          onClick={() => paginate(index)}>
          {index}
        </button>
      ))}
      <button onClick={nextPage}>
        <svg width="800px" height="800px" viewBox="6 5 10 12" xmlns="http://www.w3.org/2000/svg">
          <polyline fill="none" stroke="#fe5f1e" strokeWidth="1" points="9 6 15 12 9 18" />
        </svg>
      </button>
    </nav>
  );
}
