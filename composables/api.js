import {useMenu} from "~/composables/useMenu.ts";
import {useCategoryWiseMovie} from "~/composables/useCategoryWiseMovie.js";
import {useSliderHeaderMovie} from "~/composables/useSliderHeaderMovie.js";
export const callApi = async (endpoint, options) => {
    const {$base_url} = useNuxtApp();
    try{
        const url = $base_url+endpoint;
        return  await $fetch(url, options);
    }
    catch (error){
        console.log(error)
    }
}

export const getMenus = async () => {
    const {linksStore, makeMenu} = useMenu();
    const response = await callApi('/menu', {
        method: 'GET'
    })

    linksStore.value = makeMenu(response);

}


export const getHomepageData = async (categoryName = false) => {
    const {categoryWiseMovieStore, makeCategoryWiseMovie} = useCategoryWiseMovie();
    const {headerMovieStore, makeHeaderMovieStore} = useSliderHeaderMovie();
    const response = await callApi('/home', {
        method: 'GET'
    })

    console.log('res', response)

    categoryWiseMovieStore.value = makeCategoryWiseMovie(response.data);
    headerMovieStore.value = makeHeaderMovieStore(response.slider_movies);
}


export const getCategoryPageData = async (categoryName) => {
    const {categoryWiseMovieStore, makeCategoryWiseMovie} = useCategoryWiseMovie();
    const {headerMovieStore, makeHeaderMovieStore} = useSliderHeaderMovie();
    const response = await callApi('/category/'+categoryName, {
        method: 'GET'
    })


    categoryWiseMovieStore.value = makeCategoryWiseMovie(response.data);
    headerMovieStore.value = makeHeaderMovieStore(response.slider_movies);
}