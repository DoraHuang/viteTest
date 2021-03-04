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
    <a-tab-pane key="1" tab="Backup Plan">
         <BackupPlan></BackupPlan>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Machine Loading">
       <MachineLoading></MachineLoading>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Product CycleTime">
      <ProductCycleTime></ProductCycleTime>
    </a-tab-pane>
    <a-tab-pane key="4" tab="Product Output">
       <ProductOutput></ProductOutput>
    </a-tab-pane>
    <a-tab-pane key="5" tab="Factory Move & Turn Rate">
       <FactoryMoveTR></FactoryMoveTR>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
import FactoryMoveTR from "./FactoryMoveTR.vue";
import ProductOutput from "./ProductOutput.vue";
import ProductCycleTime from "./ProductCycleTime.vue";
import BackupPlan from "./BackupPlan.vue";
import MachineLoading from "./MachineLoading.vue";
const fcstdata = [
  {
    key: 1,
    productid: "TB546A7AB000",
    releasedate: "2020/04/01",
    releaseqty: 3243,
    leadtime: 7,
    forecastoutputdate: "2020/04/08",
    outputqty: 3100,
    fabcycletime: 7,
  },
  {
    key: 2,
    productid: "TB546A7AB000",
    releasedate: "2020/04/02",
    releaseqty: 3347,
    leadtime: 8,
    forecastoutputdate: "2020/04/09",
    outputqty: 3200,
    fabcycletime: 7,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    releasedate: "2020/04/03",
    releaseqty: 3033,
    leadtime: 10,
    forecastoutputdate: "2020/04/11",
    outputqty: 2900,
    fabcycletime: 8,
  },
];
const tableData = [
  {
    key: 1,
    productid: "TB546A7AB000",
    layer: 1,
    standardwip: 3601,
    actualwip: 3475,
    priorityquadrant: 2,
  },
  {
    key: 2,
    productid: "TB546A7AB000",
    layer: 2,
    standardwip: 228,
    actualwip: 227,
    priorityquadrant: 2,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
];
const tempData = [];
for (let i = 0; i < 20; i++) {
  tempData.push({
    key: i,
    mc: "Dry etch",
    mg: `ETCH${i}`,
    value: Math.floor(Math.random() * (1000 - 230 + 1)) + 230,
  });
}
export default defineComponent({
  name: "MPSSimulation",
  components: {
    DownloadOutlined,
    FactoryMoveTR,
    ProductOutput,
    ProductCycleTime,
    BackupPlan,
    MachineLoading,
  },
  setup() {
    const status = ref(0);
    const btntype = ref("primary");
    const btntype1 = ref("default");
    const btntype2 = ref("default");
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
          title: "Product ID",
          width: 200,
          dataIndex: "productid",
          key: "productid",
        },
        {
          title: "Layer",
          width: 100,
          dataIndex: "layer",
          key: "layer",
        },
        {
          title: "Standard WIP",
          dataIndex: "standardwip",
          key: "standardwip",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Actual WIP",
          dataIndex: "actualwip",
          key: "actualwip",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Priority Quadrant",
          dataIndex: "priorityquadrant",
          key: "priorityquadrant",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
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
      status.value = !status.value;
      if (status.value == 0) {
        tableData.value = data;
      } else {
        tableData.value = tempData;
      }
    };
    const changeColor = (e, value) => {
      if (value == "layer") {
        btntype.value = "primary";
        btntype1.value = "default";
        btntype2.value = "default";
      } else if (value == "step") {
        btntype.value = "default";
        btntype1.value = "primary";
        btntype2.value = "default";
      } else {
        btntype.value = "default";
        btntype1.value = "default";
        btntype2.value = "primary";
      }
    };
    return {
      btntype,
      btntype1,
      btntype2,
      changeColor,
      value3: ref("InputDemand1"),
      activeKey: ref("1"),
      tableData,
      columns,
      handleChange,
      focus,
      status,
      btnChange,
      columns1,
      fcstdata,
    };
  },
});
</script>
