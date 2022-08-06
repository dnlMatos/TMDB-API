const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  api_key: "7564bdaa608637a0b381e34df72ed3a2",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
