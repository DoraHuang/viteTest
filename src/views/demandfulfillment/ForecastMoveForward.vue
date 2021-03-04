<template>
  <a-card
    :body-style="{ padding: '24px 32px', minHeight: '320px' }"
    :bordered="false"
  >
    <a-button type="danger" style="margin-bottom: 10px">
      <template #icon><DownloadOutlined /></template>
      Export
    </a-button>
    <a-row style="margin-bottom: 10px">
      <a-col :span="8">
        <a-button block :type="btntype" @click="changeColor(e, 'layer')">
          Layer
        </a-button>
      </a-col>
      <a-col :span="8">
        <a-button block :type="btntype1" @click="changeColor(e, 'step')">
          Step
        </a-button>
      </a-col>
      <a-col :span="8">
        <a-button block :type="btntype2" @click="changeColor(e, 'tech')">
          Stage
        </a-button>
      </a-col>
    </a-row>
    <!--layer Region Start-->
    <a-table
      bordered
      :columns="columns"
      :data-source="tableData"
      :scroll="{ x: 2000, y: 500 }"
      @change="handleChange"
      v-if="btntype == 'primary'"
    >
      <template #action>
        <a>action</a>
      </template>
    </a-table>
    <!--layer Region End-->
    <!--step Region Start-->
    <a-table
      bordered
      :columns="columns1"
      :data-source="tableData1"
      :scroll="{ x: 2000, y: 500 }"
      @change="handleChange"
      v-if="btntype1 == 'primary'"
    >
      <template #action>
        <a>action</a>
      </template>
    </a-table>
    <!--step Region End-->
    <!--stage Region Start-->
    <a-table
      bordered
      :columns="columns2"
      :data-source="tableData2"
      :scroll="{ x: 2000,y: 500 }"
      @change="handleChange"
      v-if="btntype2 == 'primary'"
    >
      <template #action>
        <a>action</a>
      </template>
    </a-table>
    <!--stage Region End-->
  </a-card>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
const tableData = [
  {
    key: 1,
    productid: "TB546A7AB000",
    layer: 1,
    "2020-04-01": 1225,
    "2020-04-02": 1604,
    "2020-04-03": 1956,
    "2020-04-04": 2341,
    "2020-04-05": 2593,
    "2020-04-06": 2419,
    "2020-04-07": 2412,
    "2020-04-08": 3750,
    "2020-04-09": 2074,
    "2020-04-10": 2172,
    "2020-04-11": 3100,
    "2020-04-12": 2700,
    "2020-04-13": 418,
    "2020-04-14": 2940,
  },
  {
    key: 2,
    productid: "TB546A7AB000",
    layer: 2,
    "2020-04-01": 257,
    "2020-04-02": 595,
    "2020-04-03": 697,
    "2020-04-04": 1191,
    "2020-04-05": 939,
    "2020-04-06": 1105,
    "2020-04-07": 947,
    "2020-04-08": 974,
    "2020-04-09": 922,
    "2020-04-10": 972,
    "2020-04-11": 1266,
    "2020-04-12": 1065,
    "2020-04-13": 174,
    "2020-04-14": 1327,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    "2020-04-01": 1368,
    "2020-04-02": 679,
    "2020-04-03": 1214,
    "2020-04-04": 1347,
    "2020-04-05": 1924,
    "2020-04-06": 1925,
    "2020-04-07": 1780,
    "2020-04-08": 1285,
    "2020-04-09": 1422,
    "2020-04-10": 1368,
    "2020-04-11": 1866,
    "2020-04-12": 1414,
    "2020-04-13": 410,
    "2020-04-14": 1229,
  },
  {
    key: 4,
    productid: "TB546A7AB000",
    layer: 4,
    "2020-04-01": 3124,
    "2020-04-02": 2407,
    "2020-04-03": 2045,
    "2020-04-04": 1378,
    "2020-04-05": 1616,
    "2020-04-06": 2067,
    "2020-04-07": 2426,
    "2020-04-08": 2400,
    "2020-04-09": 2514,
    "2020-04-10": 2792,
    "2020-04-11": 2642,
    "2020-04-12": 2407,
    "2020-04-13": 1547,
    "2020-04-14": 1749,
  },
  {
    key: 5,
    productid: "TB546A7AB000",
    layer: 5,
    "2020-04-01": 1376,
    "2020-04-02": 1658,
    "2020-04-03": 1732,
    "2020-04-04": 1419,
    "2020-04-05": 1123,
    "2020-04-06": 1147,
    "2020-04-07": 3234,
    "2020-04-08": 2627,
    "2020-04-09": 2748,
    "2020-04-10": 2720,
    "2020-04-11": 2578,
    "2020-04-12": 3633,
    "2020-04-13": 1313,
    "2020-04-14": 1459,
  },
];
const tableData1 = [
  {
    key: 1,
    productid: "12345-B1-A-B-C",
    step_sequence: 1,
    layer: 1,
    stage: "1-A",
    step: 1000,
    groupid: "A",
    "2020-04-01": 1491,
    "2020-04-02": 1505,
    "2020-04-03": 2916,
    "2020-04-04": 2785,
    "2020-04-05": 3452,
    "2020-04-06": 3086,
    "2020-04-07": 3260,
    "2020-04-08": 3750,
    "2020-04-09": 2074,
    "2020-04-10": 2172,
    "2020-04-11": 3100,
    "2020-04-12": 2700,
    "2020-04-13": 418,
    "2020-04-14": 2940,
  },
  {
    key: 2,
    productid: "12345-B1-A-B-C",
    step_sequence: 2,
    layer: 1,
    stage: "1-A",
    step: 1100,
    groupid: "B",
    "2020-04-01": 457,
    "2020-04-02": 1002,
    "2020-04-03": 1115,
    "2020-04-04": 1049,
    "2020-04-05": 1265,
    "2020-04-06": 1319,
    "2020-04-07": 1153,
    "2020-04-08": 1113,
    "2020-04-09": 922,
    "2020-04-10": 972,
    "2020-04-11": 1266,
    "2020-04-12": 1065,
    "2020-04-13": 174,
    "2020-04-14": 1327,
  },
  {
    key: 3,
    productid: "12345-B1-A-B-C",
    step_sequence: 3,
    layer: 1,
    stage: "1-B",
    step: 1150,
    groupid: "C",
    "2020-04-01": 1098,
    "2020-04-02": 905,
    "2020-04-03": 1631,
    "2020-04-04": 1655,
    "2020-04-05": 2208,
    "2020-04-06": 1719,
    "2020-04-07": 1780,
    "2020-04-08": 1285,
    "2020-04-09": 1422,
    "2020-04-10": 1368,
    "2020-04-11": 1866,
    "2020-04-12": 1414,
    "2020-04-13": 410,
    "2020-04-14": 1229,
  },
  {
    key: 4,
    productid: "12345-B1-A-B-C",
    step_sequence: 4,
    layer: 1,
    stage: "1-B",
    step: 1200,
    groupid: "D",
    "2020-04-01": 2009,
    "2020-04-02": 1761,
    "2020-04-03": 2048,
    "2020-04-04": 2628,
    "2020-04-05": 2580,
    "2020-04-06": 2369,
    "2020-04-07": 2426,
    "2020-04-08": 2400,
    "2020-04-09": 2514,
    "2020-04-10": 2792,
    "2020-04-11": 2642,
    "2020-04-12": 2407,
    "2020-04-13": 1547,
    "2020-04-14": 1749,
  },
  {
    key: 5,
    productid: "12345-B1-A-B-C",
    step_sequence: 5,
    layer: 1,
    stage: "1-B",
    step: 1230,
    groupid: "E",
    "2020-04-01": 947,
    "2020-04-02": 2298,
    "2020-04-03": 2179,
    "2020-04-04": 3143,
    "2020-04-05": 3364,
    "2020-04-06": 3311,
    "2020-04-07": 3234,
    "2020-04-08": 2627,
    "2020-04-09": 2748,
    "2020-04-10": 2720,
    "2020-04-11": 2578,
    "2020-04-12": 3633,
    "2020-04-13": 1313,
    "2020-04-14": 1459,
  },
];
const tableData2 = [
  {
    key: 1,
    productid: "TB546A7AB000",
    stage: "1-A",
    "2020-04-01": 1491,
    "2020-04-02": 1505,
    "2020-04-03": 2916,
    "2020-04-04": 2785,
    "2020-04-05": 3452,
    "2020-04-06": 3086,
    "2020-04-07": 3260,
    "2020-04-08": 3750,
    "2020-04-09": 2074,
    "2020-04-10": 2172,
    "2020-04-11": 3100,
    "2020-04-12": 2700,
    "2020-04-13": 418,
    "2020-04-14": 2940,
  },
  {
    key: 2,
    productid: "TB546A7AB000",
    stage: "1-A",
    "2020-04-01": 457,
    "2020-04-02": 1002,
    "2020-04-03": 1115,
    "2020-04-04": 1049,
    "2020-04-05": 1265,
    "2020-04-06": 1319,
    "2020-04-07": 1153,
    "2020-04-08": 1113,
    "2020-04-09": 922,
    "2020-04-10": 972,
    "2020-04-11": 1266,
    "2020-04-12": 1065,
    "2020-04-13": 174,
    "2020-04-14": 1327,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    stage: "1-B",
    "2020-04-01": 1098,
    "2020-04-02": 905,
    "2020-04-03": 1631,
    "2020-04-04": 1655,
    "2020-04-05": 2208,
    "2020-04-06": 1719,
    "2020-04-07": 1780,
    "2020-04-08": 1285,
    "2020-04-09": 1422,
    "2020-04-10": 1368,
    "2020-04-11": 1866,
    "2020-04-12": 1414,
    "2020-04-13": 410,
    "2020-04-14": 1229,
  },
  {
    key: 4,
    productid: "TB546A7AB000",
    stage: "1-B",
    "2020-04-01": 2009,
    "2020-04-02": 1761,
    "2020-04-03": 2048,
    "2020-04-04": 2628,
    "2020-04-05": 2580,
    "2020-04-06": 2369,
    "2020-04-07": 2426,
    "2020-04-08": 2400,
    "2020-04-09": 2514,
    "2020-04-10": 2792,
    "2020-04-11": 2642,
    "2020-04-12": 2407,
    "2020-04-13": 1547,
    "2020-04-14": 1749,
  },
  {
    key: 5,
    productid: "TB546A7AB000",
    stage: "1-B",
    "2020-04-01": 947,
    "2020-04-02": 2298,
    "2020-04-03": 2179,
    "2020-04-04": 3143,
    "2020-04-05": 3364,
    "2020-04-06": 3311,
    "2020-04-07": 3234,
    "2020-04-08": 2627,
    "2020-04-09": 2748,
    "2020-04-10": 2720,
    "2020-04-11": 2578,
    "2020-04-12": 3633,
    "2020-04-13": 1313,
    "2020-04-14": 1459,
  },
];
export default defineComponent({
  name: "ForecastMoveForward",
  components: { DownloadOutlined },
  setup() {
    const btntype = ref("primary");
    const btntype1 = ref("default");
    const btntype2 = ref("default");
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
          fixed: "left",
        },
        {
          title: "Layer",
          width: 100,
          dataIndex: "layer",
          key: "layer",
          fixed: "left",
        },
        {
          title: "2020-04-01",
          dataIndex: "2020-04-01",
          key: "2020-04-01",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-02",
          dataIndex: "2020-04-02",
          key: "2020-04-02",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-03",
          dataIndex: "2020-04-03",
          key: "2020-04-03",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-04",
          dataIndex: "2020-04-04",
          key: "2020-04-04",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-05",
          dataIndex: "2020-04-05",
          key: "2020-04-05",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-06",
          dataIndex: "2020-04-06",
          key: "2020-04-06",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-07",
          dataIndex: "2020-04-07",
          key: "2020-04-07",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-08",
          dataIndex: "2020-04-08",
          key: "2020-04-08",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-09",
          dataIndex: "2020-04-09",
          key: "2020-04-09",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-10",
          dataIndex: "2020-04-10",
          key: "2020-04-10",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-11",
          dataIndex: "2020-04-11",
          key: "2020-04-11",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-11",
          dataIndex: "2020-04-11",
          key: "2020-04-11",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-12",
          dataIndex: "2020-04-12",
          key: "2020-04-12",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-13",
          dataIndex: "2020-04-13",
          key: "2020-04-13",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-14",
          dataIndex: "2020-04-14",
          key: "2020-04-14",
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
          fixed: "left",
        },
        {
          title: "STEP_Sequence",
          width: 100,
          dataIndex: "step_sequence",
          key: "step_sequence",
          // fixed: "left",
        },
        {
          title: "Layer",
          width: 80,
          dataIndex: "layer",
          key: "layer",
          // fixed: "left",
        },
        {
          title: "Stage",
          dataIndex: "stage",
          key: "stage",
          width: 100,
          //   fixed: "left",
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Step",
          dataIndex: "step",
          key: "step",
          // fixed: "left",
          width: 100,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Group ID",
          dataIndex: "groupid",
          key: "groupid",
          width: 150,
          // fixed: "left",
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-01",
          dataIndex: "2020-04-01",
          key: "2020-04-01",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-02",
          dataIndex: "2020-04-02",
          key: "2020-04-02",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-03",
          dataIndex: "2020-04-03",
          key: "2020-04-03",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-04",
          dataIndex: "2020-04-04",
          key: "2020-04-04",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-05",
          dataIndex: "2020-04-05",
          key: "2020-04-05",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-06",
          dataIndex: "2020-04-06",
          key: "2020-04-06",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-07",
          dataIndex: "2020-04-07",
          key: "2020-04-07",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-08",
          dataIndex: "2020-04-08",
          key: "2020-04-08",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-09",
          dataIndex: "2020-04-09",
          key: "2020-04-09",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-10",
          dataIndex: "2020-04-10",
          key: "2020-04-10",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-11",
          dataIndex: "2020-04-11",
          key: "2020-04-11",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-11",
          dataIndex: "2020-04-11",
          key: "2020-04-11",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-12",
          dataIndex: "2020-04-12",
          key: "2020-04-12",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-13",
          dataIndex: "2020-04-13",
          key: "2020-04-13",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-14",
          dataIndex: "2020-04-14",
          key: "2020-04-14",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
      ];
    });
    const columns2 = computed(() => {
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
          fixed:"left"
        },
        {
          title: "Stage",
          dataIndex: "stage",
          key: "stage",
          width: 100,
          fixed:"left",
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-01",
          dataIndex: "2020-04-01",
          key: "2020-04-01",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-02",
          dataIndex: "2020-04-02",
          key: "2020-04-02",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-03",
          dataIndex: "2020-04-03",
          key: "2020-04-03",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-04",
          dataIndex: "2020-04-04",
          key: "2020-04-04",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-05",
          dataIndex: "2020-04-05",
          key: "2020-04-05",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-06",
          dataIndex: "2020-04-06",
          key: "2020-04-06",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-07",
          dataIndex: "2020-04-07",
          key: "2020-04-07",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-08",
          dataIndex: "2020-04-08",
          key: "2020-04-08",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-09",
          dataIndex: "2020-04-09",
          key: "2020-04-09",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-10",
          dataIndex: "2020-04-10",
          key: "2020-04-10",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-11",
          dataIndex: "2020-04-11",
          key: "2020-04-11",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-11",
          dataIndex: "2020-04-11",
          key: "2020-04-11",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-12",
          dataIndex: "2020-04-12",
          key: "2020-04-12",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-13",
          dataIndex: "2020-04-13",
          key: "2020-04-13",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "2020-04-14",
          dataIndex: "2020-04-14",
          key: "2020-04-14",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
      ];
    });
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
      tableData,
      columns,
      tableData1,
      columns1,
      tableData2,
      columns2,
      btntype,
      btntype1,
      btntype2,
      changeColor,
    };
  },
});
</script>
