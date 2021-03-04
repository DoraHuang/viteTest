<template>
  <a-row type="flex">
    <a-col style="flex-grow: 1">
      <a-row class="app-logo" type="flex" align="middle" justify="center">
        <a-col>
          <img class="logo-icon" :src="logo" />
        </a-col>
        <a-col>
          <div v-if="show" class="logo-title ml-2">u-Planning</div>
        </a-col>
      </a-row>
    </a-col>
    <a-col>
      <a-divider type="vertical" :style="{ height: '48px', margin: '8px 0' }" />
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

import logo from '/@/assets/plan.png';

export default defineComponent({
  name: 'Logo',
  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const showRef = ref(!!props.showTitle);
    watch(
      () => props.showTitle,
      (show) => {
        if (show) {
          window.setTimeout(() => {
            showRef.value = show;
          }, 200);
        } else {
          showRef.value = show;
        }
      }
    );
    return {
      logo,
      show: showRef,
    };
  },
});
</script>

<style  lang="less" scoped>
.app-logo {
	 cursor: pointer;
	 height: 64px;
}
 .app-logo .logo-icon {
	 height: 60px;
}
 .app-logo .logo-title {
     font-size: 25px;
}
</style>
