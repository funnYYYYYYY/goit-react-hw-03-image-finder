export const ImageGalleryItem = ({ largeImageURL, webformatURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={largeImageURL} alt="" />
    </li>
  );
};
