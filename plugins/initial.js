import {getMenus} from "~/composables/api.js";

export default defineNuxtPlugin({
    name: 'initial',
    setup(nuxtApp){
        const config = useRuntimeConfig();
        return {
            provide: {
                base_url : config.public.BASE_URL
            }
        }
    },
    // hooks: {
    //     async 'app:created'(){
    //         await getMenus();
    //     }
    // }
})