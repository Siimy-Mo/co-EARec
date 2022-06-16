<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {
    
//   },
// })
export default({
  mounted() {
    console.log(this.$route.params.uid)
  },
})
</script>

<template>
  <div>
    <h1>Here is PersonalView.vue interface{{$route.params.uid}}</h1>

    <RouterLink id="nav_btn" class="buttonType1" to="/">Home</RouterLink>
  </div>
</template>

<style>

</style>
