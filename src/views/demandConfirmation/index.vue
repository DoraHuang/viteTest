<template>
  <div style="background: #fff; padding-left: 15px; padding-top: 10px">
    <a-form-item label="Select Version" style="padding-bottom: 10px">
      <a-select
        v-model:value="value3"
        @focus="focus"
        ref="select"
        @change="handleChange"
      >
        <a-select-option value="inputDemand">InputDemand</a-select-option>
        <a-select-option value="inputDemand1">InputDemand1</a-select-option>
        <a-select-option value="inputDemand2">InputDemand2</a-select-option>
      </a-select>
    </a-form-item>
  </div>
  <a-tabs type="card" v-model:activeKey="activeKey" tab-position="top">
    <a-tab-pane key="1" tab="Machine Loading">
      <MachineLoading></MachineLoading>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Forecast Output Date">
     <ForecastOutputDate></ForecastOutputDate>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Backup Plan">
      <BackupPlan></BackupPlan>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
import MachineLoading from "./MachineLoading.vue";
import ForecastOutputDate from "./ForecastOutput.vue";
import BackupPlan from "./BackupPlan.vue";

export default defineComponent({
  name: "index",
  components: { DownloadOutlined,MachineLoading ,ForecastOutputDate,BackupPlan},
  setup() {
  
    return {
      value3: ref("InputDemand1"),
      activeKey: ref("1"),
   
    };
  },
});
</script>
