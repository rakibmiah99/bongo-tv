<template>
    <div class="h-[100vh] w-[vw] bg-cover bg-violet-950 bg-blend-soft-light  flex justify-center items-center" :style="bodyStyle">
        <div class="w-[400px] h-[450px] bg-white shadow-3xl rounded-lg p-4">
            <div>
              <h1 class="text-center text-2xl  font-bold">
                <span class="text-violet-900">BONG</span>
                <span>PLAY</span>
              </h1>
              <p class="text-center mt-1 text-sm">Stay with us and enjoy your life!</p>
            </div>
            <ProviderGithub/>
            <div class="login-form mt-7">
              <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
<!--                <UFormGroup label="Email" name="email">
                  <UInput color="violet" v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                  <UInput color="violet" v-model="state.password" type="password" />
                </UFormGroup>-->
                <UFormGroup label="phone" name="phone">
                  <UInput color="violet" v-model="state.phone" type="text" />
                </UFormGroup>
                <UFormGroup>
                  <div class="flex space-x-2 items-center">
                    <input type="checkbox">
                    <p>Remember me</p>
                  </div>
                </UFormGroup>
                <UButton type="submit" color="violet" block>
                  Login
                </UButton>

                <p class="mt-3 text-center capitalize"> have not account? <NuxtLink class="text-violet-900" to="/">click to signup.</NuxtLink></p>
              </UForm>
            </div>


        </div>
    </div>
</template>
<script setup>


  definePageMeta({
    auth: {
      unauthenticatedOnly: true,
    }


  })

  const { data, getSession} = useAuth();
  // console.log('', status)
  // console.log('session',await getSession())
  // console.log('data', data.value)
  const state = reactive({
    // email: undefined,
    // password: undefined,
    phone: undefined
  })


  const validate = (state) => {
    const errors = []
    // if (!state.email) errors.push({ path: 'email', message: 'Required' })
    // if (!state.password) errors.push({ path: 'password', message: 'Required' })
    if (!state.phone) errors.push({ path: 'phone', message: 'Required' })
    return errors
  }

  async function onSubmit (event) {
    // Do something with data
    const {signIn} = useAuth();
      const { error, url } = await signIn('credentials', {
        phone: state.phone,
        redirect: false,
        callbackUrl: '/'
      })
      if (error) {
        // Do your custom error handling here
        console.log(error)
        alert('You have made a terrible mistake while entering your credentials')
      } else {
        // No error, continue with the sign in, e.g., by following the returned redirect:
        return navigateTo(url, { external: true })
      }
  }

  const bodyStyle = {
    backgroundImage: `url('${image}')`
  }

  const image = 'https://pbs.twimg.com/media/FHyicBFXIAg-cT9?format=jpg&name=4096x4096';
</script>