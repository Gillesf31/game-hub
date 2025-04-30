import noImagePlaceholder from '../../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (
  imageUrl: string,
  width: number,
  height: number
) => {
  if (!imageUrl) return noImagePlaceholder;
  const target = 'media/';
  const index = imageUrl.indexOf(target) + target.length;
  return (
    imageUrl.slice(0, index) +
    `crop/${width}/${height}/` +
    imageUrl.slice(index)
  );
};

export default getCroppedImageUrl;
