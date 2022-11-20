import PropTypes from 'prop-types';

export const LoadMore = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} type="button">
      Load More
    </button>
  );
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func,
};
