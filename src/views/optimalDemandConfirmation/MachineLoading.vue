<template>
  <a-card
    :body-style="{ padding: '24px 32px', minHeight: '320px' }"
    :bordered="false"
  >
    <a-button type="danger" style="margin-bottom: 10px">
      <template #icon><DownloadOutlined /></template>
      Export
    </a-button>
    <!-- <a-row style="margin-bottom: 10px">
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
    </a-row> -->
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
    machineCategory: "Dry etch",
    machineGroup: "ETCH01",
    "2020-04-01": "89.68%",
    "2020-04-02": "89.68%",
    "2020-04-03": "89.68%",
    "2020-04-04": "89.68%",
    "2020-04-05": "89.68%",
    "2020-04-06": "89.68%",
    "2020-04-07": "89.68%",
    "2020-04-08": "83.71%",
    "2020-04-09": "83.71%",
    "2020-04-10": "83.71%",
    "2020-04-11": "83.71%",
    "2020-04-12": "83.71%",
    "2020-04-13": "83.71%",
    "2020-04-14": "83.71%",
  },
  {
    key: 2,
    machineCategory: "Dry etch",
    machineGroup: "ETCH02",
    "2020-04-01": "90.36%",
    "2020-04-02": "90.36%",
    "2020-04-03": "90.36%",
    "2020-04-04": "90.36%",
    "2020-04-05": "90.36%",
    "2020-04-06": "90.36%",
    "2020-04-07": "90.36%",
    "2020-04-08": "83.71%",
    "2020-04-09": "83.71%",
    "2020-04-10": "83.71%",
    "2020-04-11": "83.71%",
    "2020-04-12": "83.71%",
    "2020-04-13": "83.71%",
    "2020-04-14": "83.71%",
  },
  {
    key: 3,
    machineCategory: "Dry etch",
    machineGroup: "ETCH03",
    "2020-04-01": "96.63%",
    "2020-04-02": "96.63%",
    "2020-04-03": "96.63%",
    "2020-04-04": "96.63%",
    "2020-04-05": "96.63%",
    "2020-04-06": "96.63%",
    "2020-04-07": "96.63%",
    "2020-04-08": "83.71%",
    "2020-04-09": "83.71%",
    "2020-04-10": "83.71%",
    "2020-04-11": "83.71%",
    "2020-04-12": "83.71%",
    "2020-04-13": "83.71%",
    "2020-04-14": "83.71%",
  },
  {
    key: 4,
    machineCategory: "Dry etch",
    machineGroup: "ETCH04",
    "2020-04-01": "90.31%",
    "2020-04-02": "90.31%",
    "2020-04-03": "90.31%",
    "2020-04-04": "90.31%",
    "2020-04-05": "90.31%",
    "2020-04-06": "90.31%",
    "2020-04-07": "90.31%",
    "2020-04-08": "83.71%",
    "2020-04-09": "83.71%",
    "2020-04-10": "83.71%",
    "2020-04-11": "83.71%",
    "2020-04-12": "83.71%",
    "2020-04-13": "83.71%",
    "2020-04-14": "83.71%",
  },
  {
    key: 5,
    machineCategory: "Dry etch",
    machineGroup: "ETCH05",
    "2020-04-01": "82.92%",
    "2020-04-02": "82.92%",
    "2020-04-03": "82.92%",
    "2020-04-04": "82.92%",
    "2020-04-05": "82.92%",
    "2020-04-06": "82.92%",
    "2020-04-07": "82.92%",
    "2020-04-08": "83.71%",
    "2020-04-09": "83.71%",
    "2020-04-10": "83.71%",
    "2020-04-11": "83.71%",
    "2020-04-12": "83.71%",
    "2020-04-13": "83.71%",
    "2020-04-14": "83.71%",
  },
];
const tableData1 = [
  {
    key: 1,
    machineCategory: "Dry etch",
    machineGroup: "ETCH01",
    week1: "87.36%",
    week2: "87.48%",
    week3: "90.25%",
    week4: "91.14%",
    week5: "92.56%",
    week6: "93.37%",
  },
  {
    key: 2,
    machineCategory: "Dry etch",
    machineGroup: "ETCH02",
    week1: "87.36%",
    week2: "87.48%",
    week3: "90.25%",
    week4: "91.14%",
    week5: "92.56%",
    week6: "93.37%",
  },
  {
    key: 3,
    machineCategory: "Dry etch",
    machineGroup: "ETCH03",
    week1: "87.36%",
    week2: "87.48%",
    week3: "90.25%",
    week4: "91.14%",
    week5: "92.56%",
    week6: "93.37%",
  },
  {
    key: 4,
    machineCategory: "Dry etch",
    machineGroup: "ETCH04",
    week1: "87.36%",
    week2: "87.48%",
    week3: "90.25%",
    week4: "91.14%",
    week5: "92.56%",
    week6: "93.37%",
  },
  {
    key: 5,
    machineCategory: "Dry etch",
    machineGroup: "ETCH05",
    week1: "87.36%",
    week2: "87.48%",
    week3: "90.25%",
    week4: "91.14%",
    week5: "92.56%",
    week6: "93.37%",
  },
];
const tableData2 = [
  {
    key: 1,
    machineCategory: "Dry etch",
    machineGroup: "ETCH01",
    "2020-04": "87.36%",
    "2020-05": "87.48%",
    "2020-06": "90.25%",
    "2020-07": "91.14%",
    "2020-08": "92.56%",
    "2020-09": "93.37%",
  },
  {
    key: 2,
    machineCategory: "Dry etch",
    machineGroup: "ETCH02",
    "2020-04": "87.36%",
    "2020-05": "87.48%",
    "2020-06": "90.25%",
    "2020-07": "91.14%",
    "2020-08": "92.56%",
    "2020-09": "93.37%",
  },
  {
    key: 3,
    machineCategory: "Dry etch",
    machineGroup: "ETCH03",
    "2020-04": "87.36%",
    "2020-05": "87.48%",
    "2020-06": "90.25%",
    "2020-07": "91.14%",
    "2020-08": "92.56%",
    "2020-09": "93.37%",
  },
  {
    key: 4,
    machineCategory: "Dry etch",
    machineGroup: "ETCH04",
    "2020-04": "87.36%",
    "2020-05": "87.48%",
    "2020-06": "90.25%",
    "2020-07": "91.14%",
    "2020-08": "92.56%",
    "2020-09": "93.37%",
  },
  {
    key: 5,
    machineCategory: "Dry etch",
    machineGroup: "ETCH05",
    "2020-04": "87.36%",
    "2020-05": "87.48%",
    "2020-06": "90.25%",
    "2020-07": "91.14%",
    "2020-08": "92.56%",
    "2020-09": "93.37%",
  },
];

export default defineComponent({
  name: "MachineLoading",
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
          title: "Machine Category",
          width: 180,
          dataIndex: "machineCategory",
          key: "machineCategory",
          fixed: "left",
        },
        {
          title: "Machine Group",
          width: 150,
          dataIndex: "machineGroup",
          key: "machineGroup",
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
          title: "Machine Category",
          width: 180,
          dataIndex: "machineCategory",
          key: "machineCategory",
          fixed: "left",
        },
        {
          title: "Machine Group",
          width: 150,
          dataIndex: "machineGroup",
          key: "machineGroup",
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
          title: "Machine Category",
          width: 180,
          dataIndex: "machineCategory",
          key: "machineCategory",
          fixed: "left",
        },
        {
          title: "Machine Group",
          width: 150,
          dataIndex: "machineGroup",
          key: "machineGroup",
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
