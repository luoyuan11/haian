<template>
  <div id="brand">

  </div>
</template>


<script>
  import GOMenu from '../components/Menu.vue'
  import {WOW} from 'wowjs'

  export default {
    components: {
      GOMenu
    },
    mounted() {
      new WOW({
        boxClass:"wow",
        animateClass:"animation",
        offset:30,
        mobile:true,
        live:false
      }).init()
    }
  }
</script>
