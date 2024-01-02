const {API_KEY} = process.env;

module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/blog",
                destination: "https://engineerinsight.tistory.com",
                permanent: false
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            }
        ]
    },
}
