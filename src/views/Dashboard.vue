<template>
    <h1>Dashboard</h1>
    <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Dashboard',
  setup(){
    const data= ref(1)
    return{
data
    }
  }
});
</script>
