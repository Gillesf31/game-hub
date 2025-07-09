export const getCroppedImageUrl = (
  imageUrl: string,
  fallBackImage: string,
  width: number,
  height: number
) => {
  if (!imageUrl) return fallBackImage;
  const target = 'media/';
  const index = imageUrl.indexOf(target) + target.length;
  return (
    imageUrl.slice(0, index) +
    `crop/${width}/${height}/` +
    imageUrl.slice(index)
  );
};
