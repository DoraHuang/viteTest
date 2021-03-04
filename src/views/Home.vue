<template>
  <h1>This is a home page</h1>
  <HelloWorld msg='Hello Vue 3.0 + Vite' />
</template>

<script >
import { defineComponent } from 'vue';

import HelloWorld from '/@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
