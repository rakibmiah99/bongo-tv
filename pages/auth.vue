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

            <div class="login-form mt-7">
              <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Email" name="email">
                  <UInput color="violet" v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                  <UInput color="violet" v-model="state.password" type="password" />
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
  const state = reactive({
    email: undefined,
    password: undefined
  })

  const validate = (state) => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return errors
  }

  async function onSubmit (event) {
    // Do something with data
    console.log(event.data)
  }

  const bodyStyle = {
    backgroundImage: `url('${image}')`
  }

  const image = 'https://pbs.twimg.com/media/FHyicBFXIAg-cT9?format=jpg&name=4096x4096';
</script>