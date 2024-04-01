export const useCategoryWiseMovie = () => {
    const categoryWiseMovieStore = useState('category_wise_movie', () => {
        return [
            /*{
                name: 'category',
                slug: 'cat',
                movies: [
                    {
                        thumbnail: null,
                        slug: 's',
                        name: 'Gunin',
                        year: 2023,
                        ratting: 7.7
                    },
                ]
            }*/
        ]
    });


    const makeCategoryWiseMovie = (response) => {
        let data = []
        response.forEach(function (item){
            const category = {
                name: item.name,
                slug: item.slug,
                movies: []
            }

            item.movies.forEach(function (movie){

                if (movie.thumbnail !== ""){
                    category.movies.push({
                        thumbnail: movie.thumbnail,
                        name: movie.name,
                        slug: movie.slug,
                        rating: movie.rating,
                        year: '2024',
                    })
                }
            })

            data.push(category)
        })

        return data;
    }

    return {
        categoryWiseMovieStore,
        makeCategoryWiseMovie
    }
}