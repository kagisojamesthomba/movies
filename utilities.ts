export const makeImgPath = (img: String, width: string = 'w500') =>
  `https://image.tmdb.org/t/p/${width}${img}`;
