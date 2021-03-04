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
    <a-tab-pane key="1" tab="Optimal Job Release">
      <OptimalJobRelease></OptimalJobRelease>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Machine Loading">
      <MachineLoading></MachineLoading>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Forecast Output Date">
      <ForecastOutputDate></ForecastOutputDate>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
import OptimalJobRelease from "./OptimalJobRelease.vue";
import ForecastOutputDate from "./ForecastOutput.vue";
import MachineLoading from "./MachineLoading.vue";
export default defineComponent({
  name: "index",
  components: { DownloadOutlined ,OptimalJobRelease,ForecastOutputDate,MachineLoading},
  setup() {
    const status = ref(0);
    const focus = () => {
      console.log("focus");
    };
    const filteredInfo = ref();
    const sortedInfo = ref();
    const columns = computed(() => {
      const filtered = filteredInfo.value || {};
      const sorted = sortedInfo.value || {};
      const handleChange = (pagination, filters, sorter) => {
        console.log("Various parameters", pagination, filters, sorter);
        filteredInfo.value = filters;
        sortedInfo.value = sorter;
      };
      return [
        {
          title: "Machine Category",
          width: 200,
          dataIndex: "mc",
          key: "mc",
          fixed: "left",
          filters: [{ text: "Dry etch", value: "Dry etch" }],
          filteredValue: filtered.mc || null,
          onFilter: (value, record) => record.mc.includes(value),

          ellipsis: true,
        },
        {
          title: "Machine Group",
          width: 200,
          dataIndex: "mg",
          key: "mg",
          fixed: "left",
          filters: [{ text: "ETCH10", value: "ETCH10" }],
          filteredValue: filtered.mg || null,
          onFilter: (value, record) => record.mg.includes(value),

          ellipsis: true,
        },
        {
          title: "2020/04/01",
          dataIndex: "value",
          key: "value",
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        { title: "2020/04/02", dataIndex: "value", key: "2", width: 150 },
        { title: "2020/04/03", dataIndex: "value", key: "3", width: 150 },
        { title: "2020/04/04", dataIndex: "value", key: "4", width: 150 },
        { title: "2020/04/05", dataIndex: "value", key: "5", width: 150 },
        { title: "2020/04/06", dataIndex: "value", key: "6", width: 150 },
        { title: "2020/04/07", dataIndex: "value", key: "7", width: 150 },
      ];
    });
    const columns1 = computed(() => {
      const filtered = filteredInfo.value || {};
      const sorted = sortedInfo.value || {};
      const handleChange = (pagination, filters, sorter) => {
        console.log("Various parameters", pagination, filters, sorter);
        filteredInfo.value = filters;
        sortedInfo.value = sorter;
      };
      return [
        {
          title: "Product ID",
          width: 200,
          dataIndex: "productid",
          key: "productid",
          //fixed: "left",
          //filters: [{ text: "Dry etch", value: "Dry etch" }],
          //filteredValue: filtered.mc || null,
          //onFilter: (value, record) => record.mc.includes(value),
          //ellipsis: true,
        },
        {
          title: "Release date",
          width: 200,
          dataIndex: "releasedate",
          key: "releasedate",
          //fixed: "left",
          // filters: [{ text: "ETCH10", value: "ETCH10" }],
          // filteredValue: filtered.mg || null,
          // onFilter: (value, record) => record.mg.includes(value),
          //ellipsis: true,
        },
        { title: "Release Qty", dataIndex: "releaseqty", key: "2", width: 150 },
        {
          title: "Lead time (day)",
          dataIndex: "leadtime",
          key: "3",
          width: 150,
        },
        {
          title: "Forecast Output Date",
          dataIndex: "forecastoutputdate",
          key: "4",
          width: 150,
        },
        { title: "Output Qty", dataIndex: "outputqty", key: "5", width: 150 },
        {
          title: "Fab Cycle Time (day)",
          dataIndex: "fabcycletime",
          key: "6",
          width: 150,
        },
      ];
    });
    const handleChange = (pagination, filters, sorter) => {
      console.log("Various parameters", pagination, filters, sorter);
      filteredInfo.value = filters;
      sortedInfo.value = sorter;
    };
    const btnChange = () => {
      console.log(status.value);
      status.value = !status.value;

      if (status.value == 0) {
        tableData.value = data;
      } else {
        tableData.value = tempData;
      }
    };
    return {
      value3: ref("InputDemand1"),
      activeKey: ref("1"),
    
    
      columns,
      handleChange,
      focus,
      status,
      btnChange,
      columns1,
    };
  },
});
</script>
