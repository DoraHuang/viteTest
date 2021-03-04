<template>
  <admin-layout>
    <div class="tabs-view-content" style="margin-top: 0px">
      <router-view ref="tabContent" />
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from "/@/layouts/AdminLayout.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "TabsView",
  components: { AdminLayout },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped lang="less">
.tabs-view {
  margin: -16px auto 8px;
  &.head.fixed {
    max-width: 1400px;
  }
}
.tabs-view-content {
  position: relative;
  &.head.fixed {
    width: 1400px;
    margin: 0 auto;
  }
}
</style>
