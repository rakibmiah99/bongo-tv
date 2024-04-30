export const useSliderHeaderMovie = () => {
    const headerMovieStore = useState('header_movie',() => {
        return []
    })

    const makeHeaderMovieStore = (response) => {
        let data = [];
        response.forEach((item) => {
            if(item.cover !== ""){
                data.push({
                    slug: item.slug,
                    name: item.name,
                    play_mode: item.play_mode,
                    rating: item.rating,
                    cover: item.cover,
                    thumbnail: item.thumbnail,
                    description: item.description,
                })
            }
        })

        return data;
    }


    return {
        headerMovieStore,
        makeHeaderMovieStore
    }


}