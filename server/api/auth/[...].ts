// @ts-ignore
import {NuxtAuthHandler} from '#auth'
// @ts-ignore
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from 'next-auth/providers/github'
// @ts-ignore
import {$fetch} from "ofetch";

// @ts-ignore
export default NuxtAuthHandler({
    pages: {
        signIn: '/auth'
    },
    callbacks: {
        // Callback when the JWT is created / updated, see https://next-auth.js.org/configuration/callbacks#jwt-callback
        //@ts-ignore
        jwt: async ({token, user, account}) => {
            const isSignIn = user ? true : false;
            if (isSignIn) {
                console.log('jwt_account', account)
                const provider = account?.provider;
                if(provider == 'github'){
                    const afterLoginUser = await $fetch(useRuntimeConfig().public.BASE_URL+"/subscriber-login/provider", {
                        method: 'post', 
                        body: {
                            provider_id: user?.id,
                            provider_name: provider,
                        }
                    })
                    token.bearer = afterLoginUser.token;

                }
                else if(provider == "credentials"){
                    token.bearer = user.token;
                }
                
                token.jwt = user;
            }
            return Promise.resolve(token);
        },
        // Callback whenever session is checked, see https://next-auth.js.org/configuration/callbacks#session-callback
        //@ts-ignore
        session: async ({session, token}) => {
            // console.log('session____token', token);
            // console.log('session____session', session);
            (session as any).user = token.jwt;
            (session as any).bearer = token.bearer;
            return Promise.resolve(session);
        },

    },

    providers: [
        CredentialsProvider.default({
            name: 'credentials',
            credential: {
              phone: {
                  type: 'text', label: 'phone'
              }
            },
            async authorize(credential: any){
                if (!credential?.phone){
                    throw createError({
                        statusCode: 500,
                        statusMessage: "missing info"
                    })
                }

                let user = null;
                //@ts-ignore
                try {
                    user = await $fetch('http://127.0.0.1:8000/v1/subscriber-login/mobile', {
                        method: 'post',
                        body: {
                            phone: credential.phone
                        }
                    })
                    // console.log('result', result)
                }
                catch (error){
                    console.log('error', error)
                }
                // console.log('user', user)

                if (user){
                    return  user;
                }
                // console.log('user', user)
                return  user;
            }
        }),
        GithubProvider.default({           
            clientId: '20d1946f0a83ab7485f6',           
            clientSecret: '385623e201313e700a4cfba8fcaadc1b35f888d6'    
        })
    ]
})