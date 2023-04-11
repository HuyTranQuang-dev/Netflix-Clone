const key =  '8599fabadfc969c1a001390a9427aea6'

const requests = {
    requestPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1',
    requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1',
    requestTrending:'https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>&language=en-US&page=2',
    requestUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1',
 };

 export default requests
