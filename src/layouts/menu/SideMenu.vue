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
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
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

      <!-- <a-sub-menu key="p1">
        <template #title>
          <DesktopOutlined />
          <span>Product Mix Simulation</span>
        </template>
        <a-menu-item key="p11">Upload file</a-menu-item>
        <a-menu-item key="p12">Input Data Confirm</a-menu-item>
        <a-menu-item key="p13">Move & Turn Rate</a-menu-item>
        <a-menu-item key="p14">Safety WIP & Saturated Move</a-menu-item>
        <a-menu-item key="p15">WIP &Redundant WIP</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="p2">
        <template #title>
          <PieChartOutlined />
          <span>Optimal Product Mix</span>
        </template>
        <a-menu-item key="p21">Input Data Confirm</a-menu-item>
        <a-menu-item key="p22">Move & Turn Rate</a-menu-item>
        <a-menu-item key="p23">Optimal Product Mix</a-menu-item>
        <a-menu-item key="p24">Safety WIP & Saturated Move</a-menu-item>
        <a-menu-item key="p25">WIP &Redundant WIP</a-menu-item>
      </a-sub-menu> -->
      <!-- <a-sub-menu key="m1">
        <template #title>
          <DribbbleOutlined />
          <span>MPS Simulation</span>
          Master Production Schedule Simulation 
        </template>
        <a-menu-item key="m11">Upload file</a-menu-item>
          <a-menu-item key="m12">Input Data Confirm</a-menu-item> 
         <a-menu-item key="m13">Backup Plan</a-menu-item>
        <a-menu-item key="m14">Machine Loading</a-menu-item>
        <a-menu-item key="m15">Product Cycle Time (day)</a-menu-item>
        <a-menu-item key="m16">Product Output</a-menu-item>
        <a-menu-item key="m17">Factory Move & Turn Rate</a-menu-item> 
        
        <a-menu-item key="m11" @click=" goRouter($event, 'mpsSimulation/MPSIndex')" >Data Result</a-menu-item>
      </a-sub-menu> -->

     <!-- <a-sub-menu key="m2">
        <template #title>
          <RedditOutlined />
          <span>Optimal MPS</span>
        </template>
       <a-menu-item key="m11">Upload file</a-menu-item>
          <a-menu-item key="m12">Input Data Confirm</a-menu-item> 
        <a-menu-item key="m13">Optimal Master Production Schedule</a-menu-item>
        <a-menu-item key="m14">Machine Loading</a-menu-item>
        <a-menu-item key="m15">Product Cycle Time (day)</a-menu-item>
        <a-menu-item key="m16">Product Output</a-menu-item>
        <a-menu-item key="m17">Factory Move & Turn Rate</a-menu-item>
      </a-sub-menu>-->
      <a-sub-menu key="dc1">
        <template #title>
          <SketchOutlined />
          <span>Demand Confirmation Simulation</span>
        </template>
        <!-- <a-menu-item key="dc11">Upload file</a-menu-item>
          <a-menu-item key="dc12">Input Data Confirm</a-menu-item> -->
        <!-- <a-menu-item key="dc13" @click="goRouter($event, 'demandConfirmationSimulation/backupPlan')">Backup Plan</a-menu-item> -->
        <a-menu-item
          key="dc14"
          @click="
            goRouter($event, 'demandConfirmationSimulation/machineLoading')
          "
          >Data Result</a-menu-item
        >
        <!-- <a-menu-item key="dc15" @click="goRouter($event, 'demandConfirmationSimulation/forecastOutputDate')">Forecast Output Date</a-menu-item> -->
      </a-sub-menu>
      <a-sub-menu key="dc2">
        <template #title>
          <CoffeeOutlined />
          <span>Optimal Demand Confirmation</span>
        </template>
          <a-menu-item key="dc21" @click=" goRouter($event, 'optimalDemandConfirmation/ODCIndex')" >Data Result</a-menu-item>
        <!-- <a-menu-item key="dc21">Upload file</a-menu-item>
          <a-menu-item key="dc22">Input Data Confirm</a-menu-item> -->
        <!-- <a-menu-item key="dc23">Optimal Job release</a-menu-item>
        <a-menu-item key="dc24">Machine Loading</a-menu-item>
        <a-menu-item key="dc25">Forecast Output Date</a-menu-item> -->
      </a-sub-menu>
      <a-sub-menu key="df1">
        <template #title>
          <CrownOutlined />
          <span>Demand Fulfillment</span>
        </template>
        <a-menu-item key="df12" @click=" goRouter($event, 'demandFulfillment/index')" >Data Result</a-menu-item>
        <!-- <a-menu-item key="df11">Upload file</a-menu-item>
          <a-menu-item key="df12">Input Data Confirm</a-menu-item> -->
        <!-- <a-menu-item key="df13">Target WIP & Priority Quadrant</a-menu-item>
        <a-menu-item key="df14">Target Move</a-menu-item>
        <a-menu-item key="df15">Machine Loading for Target Move</a-menu-item>
        <a-menu-item key="df16">Forecast Move Forward</a-menu-item>
        <a-menu-item key="df17">Forecast Machine Loading Forward</a-menu-item>
        <a-menu-item key="df18">Forecast Output Forward</a-menu-item> -->
      </a-sub-menu>
      <a-sub-menu key="o1">
        <template #title>
          <PieChartOutlined />
          <span>Optimal PM </span>
        </template>
        <a-menu-item key="o11" @click="goRouter($event, 'optimalPM/PMIndex')">Data Result</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="r1">
        <template #title>
          <PieChartOutlined />
          <span>Redundant WIP </span>
        </template>
        <a-menu-item key="r11" @click="goRouter($event, 'redunantWIP/RedunantIndex')">Data Result</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="mgd1">
        <template #title>
          <PieChartOutlined />
          <span>Move Gap Detractor</span>
        </template>
        <a-menu-item key="mgd11">Data Result</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Logo from "/@/components/Logo.vue";

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
export default {
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
  data() {
    return {
      selectedKeys: ["versionTable"],
    };
  },
  methods: {
    onSelect(obj) {
      this.$emit("menuSelect", obj);
    },
    goRouter(e, value) {
      console.log(this.selectedKeys);
      this.$router.push(`/${value}`);
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index";
</style>
