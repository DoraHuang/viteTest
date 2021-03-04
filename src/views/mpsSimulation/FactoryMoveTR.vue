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
        <a-button block :type="btntype" @click="changeColor(e, 'day')">
          Day
        </a-button>
      </a-col>
      <a-col :span="8">
        <a-button block :type="btntype1" @click="changeColor(e, 'week')">
          Week
        </a-button>
      </a-col>
      <a-col :span="8">
        <a-button block :type="btntype2" @click="changeColor(e, 'month')">
          Month
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
      :scroll="{ x: 1000, y: 500 }"
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
      :scroll="{ x: 1000, y: 500 }"
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
    item: "Move/day",
    "2020-04-01": 232176,
    "2020-04-02": 233338,
    "2020-04-03": 233338,
    "2020-04-04": 233338,
    "2020-04-05": 233338,
    "2020-04-06": 233338,
    "2020-04-07": 233338,
    "2020-04-08": 233338,
    "2020-04-09": 233338,
    "2020-04-10": 233338,
    "2020-04-11": 233338,
    "2020-04-12": 233338,
    "2020-04-13": 233338,
    "2020-04-14": 233338,
  },
  {
    key: 2,
    item: "WIP",
    "2020-04-01": 28857,
    "2020-04-02": 29050,
    "2020-04-03": 29050,
    "2020-04-04": 29050,
    "2020-04-05": 29050,
    "2020-04-06": 29050,
    "2020-04-07": 29050,
    "2020-04-08": 29050,
    "2020-04-09": 29050,
    "2020-04-10": 29050,
    "2020-04-11": 29050,
    "2020-04-12": 29050,
    "2020-04-13": 29050,
    "2020-04-14": 29050,
  },
  {
    key: 3,
    item: "Turn Rate",
    "2020-04-01": "823.76%",
    "2020-04-02": "831.83%",
    "2020-04-03": "831.83%",
    "2020-04-04": "831.83%",
    "2020-04-05": "831.83%",
    "2020-04-06": "831.83%",
    "2020-04-07": "831.83%",
    "2020-04-08": "831.83%",
    "2020-04-09": "831.83%",
    "2020-04-10": "831.83%",
    "2020-04-11": "831.83%",
    "2020-04-12": "831.83%",
    "2020-04-13": "831.83%",
    "2020-04-14": "831.83%",
  },
  {
    key: 4,
    item: "Redundant WIP",
    "2020-04-01": 1008,
    "2020-04-02": 1014,
    "2020-04-03": 1014,
    "2020-04-04": 1014,
    "2020-04-05": 1014,
    "2020-04-06": 1014,
    "2020-04-07": 1014,
    "2020-04-08": 1014,
    "2020-04-09": 1014,
    "2020-04-10": 1014,
    "2020-04-11": 1014,
    "2020-04-12": 1014,
    "2020-04-13": 1014,
    "2020-04-14": 1014,
  },
  {
    key: 5,
    item: "Optimal WIP",
    "2020-04-01": 27811,
    "2020-04-02": 27845,
    "2020-04-03": 27845,
    "2020-04-04": 27845,
    "2020-04-05": 27845,
    "2020-04-06": 27845,
    "2020-04-07": 27845,
    "2020-04-08": 27845,
    "2020-04-09": 27845,
    "2020-04-10": 27845,
    "2020-04-11": 27845,
    "2020-04-12": 27845,
    "2020-04-13": 27845,
    "2020-04-14": 27845,
  },
  {
    key: 6,
    item: "Redundant WIP %",
    "2020-04-01": "3.54%",
    "2020-04-02": "3.54%",
    "2020-04-03": "3.54%",
    "2020-04-04": "3.54%",
    "2020-04-05": "3.54%",
    "2020-04-06": "3.54%",
    "2020-04-07": "3.54%",
    "2020-04-08": "3.54%",
    "2020-04-09": "3.54%",
    "2020-04-10": "3.54%",
    "2020-04-11": "3.54%",
    "2020-04-12": "3.54%",
    "2020-04-13": "3.54%",
    "2020-04-14": "3.54%",
  },
];
const tableData1 = [
  {
    key: 1,
    item: "Move/day",
    week1: 231842,
    week2: 232719,
    week3: 233712,
    week4: 232176,
    week5: 233338,
    week6: 233866,
  },
  {
    key: 2,
    item: "WIP",
    week1: 28349,
    week2: 28569,
    week3: 28613,
    week4: 28857,
    week5: 29050,
    week6: 29092,
  },
  {
    key: 3,
    item: "Turn Rate",
    week1: "817.80%",
    week2: "818.23%",
    week3: "823.65%",
    week4: "823.76%",
    week5: "831.83%",
    week6: "833.23%",
  },
  {
    key: 4,
    item: "Redundant WIP",
    week1: 987,
    week2: 992,
    week3: 1001,
    week4: 1008,
    week5: 1014,
    week6: 1017,
  },
  {
    key: 5,
    item: "Optimal WIP",
    week1: 27362,
    week2: 27520,
    week3: 27561,
    week4: 27811,
    week5: 27845,
    week6: 27965,
  },
  {
    key: 6,
    item: "Redundant WIP %",
    week1: "3.48%",
    week2: "3.52%",
    week3: "3.53%",
    week4: "3.54%",
    week5: "3.54%",
    week6: "3.55%",
  },
];
const tableData2 = [
  {
    key: 1,
    item: "Move/day",
    asis: 231234,
    "2020-04": 232661,
    "2020-05": 228716,
    "2020-06": 226551,
    "2020-07": 224973,
    "2020-08": 224140,
    "2020-09": 222800,
  },
  {
    key: 2,
    item: "WIP",
    asis: 27671,
    "2020-04": 28627,
    "2020-05": 28108,
    "2020-06": 27277,
    "2020-07": 27160,
    "2020-08": 26853,
    "2020-09": 26600,
  },
  {
    key: 3,
    item: "Turn Rate",
    asis: 8.36,
    "2020-04": 8.22,
    "2020-05": 8.14,
    "2020-06": 8.31,
    "2020-07": 8.28,
    "2020-08": 8.35,
    "2020-09": 8.8,
  },
  {
    key: 4,
    item: "Redundant WIP",
    asis: 1227,
    "2020-04": 998,
    "2020-05": 555,
    "2020-06": 0,
    "2020-07": 0,
    "2020-08": 0,
    "2020-09": 0,
  },
  {
    key: 5,
    item: "Optimal WIP",
    asis: 26444,
    "2020-04": 27582,
    "2020-05": 27553,
    "2020-06": 27277,
    "2020-07": 27160,
    "2020-08": 26853,
    "2020-09": 26600,
  },
  {
    key: 6,
    item: "Redundant WIP %",
    asis: "4.4%",
    "2020-04": "3.5%",
    "2020-05": "2.0%",
    "2020-06": "0.0%",
    "2020-07": "0.0%",
    "2020-08": "0.0%",
    "2020-09": "0.0%",
  },
];

export default defineComponent({
  name: "FactoryMoveTR",
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
          title: "Item",
          width: 180,
          dataIndex: "item",
          key: "item",
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
          title: "Item",
          width: 180,
          dataIndex: "item",
          key: "item",
          fixed: "left",
        },

        {
          title: "Week1",
          dataIndex: "week1",
          key: "week1",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Week2",
          dataIndex: "week2",
          key: "week2",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Week3",
          dataIndex: "week3",
          key: "week3",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Week4",
          dataIndex: "week4",
          key: "week4",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Week5",
          dataIndex: "week5",
          key: "week5",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Week6",
          dataIndex: "week6",
          key: "week6",
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
          title: "Item",
          width: 180,
          dataIndex: "item",
          key: "item",
          fixed: "left",
        },
        {
          title: "As-is",
          width: 150,
          dataIndex: "asis",
          key: "asis",
          fixed: "left",
        },
        {
          title: "2020-04",
          dataIndex: "2020-04",
          key: "2020-04",
          width: 150,
        },
        {
          title: "2020-05",
          dataIndex: "2020-05",
          key: "2020-05",
          width: 150,
        },
        {
          title: "2020-06",
          dataIndex: "2020-06",
          key: "2020-06",
          width: 150,
        },
        {
          title: "2020-07",
          dataIndex: "2020-07",
          key: "2020-07",
          width: 150,
        },
        {
          title: "2020-08",
          dataIndex: "2020-08",
          key: "2020-08",
          width: 150,
        },
        {
          title: "2020-09",
          dataIndex: "2020-09",
          key: "2020-09",
          width: 150,
        },
      ];
    });
    const changeColor = (e, value) => {
      if (value == "day") {
        btntype.value = "primary";
        btntype1.value = "default";
        btntype2.value = "default";
      } else if (value == "week") {
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
