export default defineEventHandler(async (event, request) => {
    const body =  await readBody(event);
    const config = useRuntimeConfig();
    const BASE_URL = config.public.BASE_URL;
    const data = await $fetch(BASE_URL+'/subscriber-login/mobile', {
        method: 'post',
        body: {
            phone: 12345
        }
    });
    const {update} =await  useSession();
    // await update({name: 'rakib'})
    console.log(data)
    return data;

})