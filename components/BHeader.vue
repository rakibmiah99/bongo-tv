<script setup lang="ts">
  import BContainer from "~/components/layouts/BContainer.vue";
  import BNavbar from "~/components/BNavbar.vue";
  import BSmallNav from "~/components/nav/BSmallNav.vue";
  import BSidebar from "~/components/nav/BSidebar.vue";
  import BIMDB from "~/components/utility/BIMDB.vue";
  import BFixedNav from "~/components/nav/BFixedNav.vue";
  const is_fixed_nav = ref(false)
  const {x,y} = useWindowScroll()
  onMounted(() => {
    window.addEventListener('scroll', () => {
      if(y.value > 200){
        is_fixed_nav.value = true;
      }
      else if(y.value < 200){
        is_fixed_nav.value = false;
      }
    })
  })


</script>

<template>
  <BFixedNav class="block md:sticky" v-show="is_fixed_nav"/>
  <div class="relative">
    <div class="absolute z-10 w-full">
      <BNavbar class="hidden md:block"/>
      <BSmallNav class="block md:hidden px-3"/>
    </div>

<!--    <HeaderSlider/>-->



    <BSidebar/>
  </div>
</template>


<style scoped>

</style>