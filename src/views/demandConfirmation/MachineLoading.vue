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
      <a-card
        :body-style="{ padding: '24px 32px', minHeight: '320px' }"
        :bordered="false"
      >
        <div style="">
          <a-button>
            <template #icon><DownloadOutlined /></template>
            Export
          </a-button>

          <span style="float: right">
            <a-button
              type="primary"
              @click="btnChange"
              style="margin-bottom: 10px"
            >
              <span v-if="!status">Percentage</span>
              <span v-if="status">Value</span></a-button
            >
          </span>
        </div>
        <a-table
          bordered
          :columns="columns"
          :data-source="tableData"
          :scroll="{ x: 1500, y: 300 }"
          @change="handleChange"
        >
          <template #action>
            <a>action</a>
          </template>
        </a-table>
      </a-card>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Forecast Output Date">
      <a-card
        :body-style="{ padding: '24px 32px', minHeight: '320px' }"
        :bordered="false"
        ><a-button style="margin-bottom: 10px">
          <template #icon><DownloadOutlined /></template>
          Export
        </a-button>
        <a-table
          bordered
          :columns="columns1"
          :data-source="fcstdata"
          :scroll="{ x: 1500, y: 300 }"
          @change="handleChange"
        >
          <template #action>
            <a>action</a>
          </template>
        </a-table>
      </a-card>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Backup Plan">
      <a-card
        :body-style="{ padding: '24px 32px', minHeight: '320px' }"
        :bordered="false"
      ></a-card>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
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
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    mc: "Dry etch",
    mg: `ETCH${i}`,
    value: Math.floor(Math.random() * (100 - 0 + 1)) + 0 + "%",
  });
}
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
  name: "MachineLoading",
  components: { DownloadOutlined },
  setup() {
    const status = ref(0);
    const focus = () => {
      console.log("focus");
    };
    const tableData = ref(data);
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
      data,
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
