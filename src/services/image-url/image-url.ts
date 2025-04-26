const getCroppedImageUrl = (
  imageUrl: string,
  width: number,
  height: number
) => {
  const target = 'media/';
  const index = imageUrl.indexOf(target) + target.length;
  return (
    imageUrl.slice(0, index) +
    `crop/${width}/${height}/` +
    imageUrl.slice(index)
  );
};

export default getCroppedImageUrl;
