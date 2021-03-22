<template>
  <a-layout-sider
    theme="light"
    class="side-menu beauty-scroll shadow"
    collapsible
    v-model:collapsed="collapsed"
    :trigger="null"
    width="256px"
  >
    <Logo :show-title="!collapsed" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      v-model:openKeys="openKeys"
    >
      <a-menu-item key="versionTable" @click="goRouter($event, 'versionTable')">
        <TableOutlined />

        <span>Version & Status</span>
      </a-menu-item>
      <a-menu-item
        key="uploadFileConfirm"
        @click="goRouter($event, 'uploadFileConfirm')"
      >
        <FileAddOutlined />
        <span>Upload file & Data Confirm</span>
      </a-menu-item>
      <a-sub-menu key="demandConfirmationSimulation">
        <template #title>
          <SketchOutlined />
          <span>Demand Confirmation Simulation</span>
        </template>
        <a-menu-item
          key="DCSIndex"
          @click="goRouter($event, 'demandConfirmationSimulation/DCSIndex')"
          >Data Result</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="optimalDemandConfirmation">
        <template #title>
          <CoffeeOutlined />
          <span>Optimal Demand Confirmation</span>
        </template>
        <a-menu-item
          key="ODCIndex"
          @click="goRouter($event, 'optimalDemandConfirmation/ODCIndex')"
          >Data Result</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="demandFulfillment">
        <template #title>
          <CrownOutlined />
          <span>Demand Fulfillment</span>
        </template>
        <a-menu-item
          key="index"
          @click="goRouter($event, 'demandFulfillment/index')"
          >Data Result</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="optimalPM">
        <template #title>
          <PieChartOutlined />
          <span>Optimal PM </span>
        </template>
        <a-menu-item
          key="PMIndex"
          @click="goRouter($event, 'optimalPM/PMIndex')"
          >Data Result</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="redunantWIP">
        <template #title>
          <PieChartOutlined />
          <span>Redundant WIP </span>
        </template>
        <a-menu-item
          key="RedunantIndex"
          @click="goRouter($event, 'redunantWIP/RedunantIndex')"
          >Data Result</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="moveGapDetractor">
        <template #title>
          <PieChartOutlined />
          <span>Move Gap Detractor</span>
        </template>
        <a-menu-item
          key="DMAIndex"
          @click="goRouter($event, 'moveGapDetractor/DMAIndex')"
          >Data Result</a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Logo from "/@/components/Logo.vue";
import { defineComponent, computed, ref, onBeforeMount, onMounted } from "vue";
import {
  // menu
  PieChartOutlined,
  DesktopOutlined,
  DribbbleOutlined,
  RedditOutlined,
  SketchOutlined,
  FileAddOutlined,
  CoffeeOutlined,
  TableOutlined,
  // header
  HomeFilled,
  CrownOutlined,
} from "@ant-design/icons-vue";
import { mapState } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "SideMenu",
  components: {
    Logo,
    PieChartOutlined,
    DesktopOutlined,
    DribbbleOutlined,
    RedditOutlined,
    FileAddOutlined,
    SketchOutlined,
    CoffeeOutlined,
    HomeFilled,
    TableOutlined,
    CrownOutlined,
  },
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false,
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const selectedKeys = ref(["versionTable"]);
    const openKeys = ref([""]);
    var onSelect = (obj) => {
      this.$emit("menuSelect", obj);
    };
    onBeforeMount(() => {
      var tempRoute = route.fullPath.split("/");
      if (tempRoute.length > 2) {//>1代表是第二層
        openKeys.value = [tempRoute[1]];
        selectedKeys.value = [tempRoute[2]];
      }
    });
    onMounted(() => {
    });
    const goRouter = (e, value) => {
      router.push(`/${value}`);
    };
    return {
      selectedKeys,
      onSelect,
      goRouter,
      openKeys,
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index";
</style>
