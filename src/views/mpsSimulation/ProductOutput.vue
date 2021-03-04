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
    productid: "BAA215FH5T401",
    "2020-04-01": 91,
    "2020-04-02": 91,
    "2020-04-03":91,
    "2020-04-04": 91,
    "2020-04-05": 91,
    "2020-04-06": 92,
    "2020-04-07": 92,
    "2020-04-08":92,
    "2020-04-09":92,
    "2020-04-10":92,
    "2020-04-11": 81,
    "2020-04-12": 81,
    "2020-04-13": 81,
    "2020-04-14": 81,
  },
  {
    key: 2,
    productid: "BAA238FH5V501",
    "2020-04-01": 85,
    "2020-04-02": 85,
    "2020-04-03":85,
    "2020-04-04":85,
    "2020-04-05": 85,
    "2020-04-06":29,
    "2020-04-07": 29,
    "2020-04-08":29,
    "2020-04-09": 29,
    "2020-04-10": 29,
    "2020-04-11": 63,
    "2020-04-12": 63,
    "2020-04-13":63,
    "2020-04-14":63,
  },
  {
    key: 3,
    productid: "BAA430FH5V404",
    "2020-04-01": 85,
    "2020-04-02": 85,
    "2020-04-03":85,
    "2020-04-04":85,
    "2020-04-05": 85,
    "2020-04-06":29,
    "2020-04-07": 29,
    "2020-04-08":29,
    "2020-04-09": 29,
    "2020-04-10": 29,
    "2020-04-11": 63,
    "2020-04-12": 63,
    "2020-04-13":63,
    "2020-04-14":63,
  },
  {
    key: 4,
    productid: "BAA430FH5V405",
    "2020-04-01": 85,
    "2020-04-02": 85,
    "2020-04-03":85,
    "2020-04-04":85,
    "2020-04-05": 85,
    "2020-04-06":29,
    "2020-04-07": 29,
    "2020-04-08":29,
    "2020-04-09": 29,
    "2020-04-10": 29,
    "2020-04-11": 63,
    "2020-04-12": 63,
    "2020-04-13":63,
    "2020-04-14":63,
  },
  {
    key: 5,
    productid: "BAA430FH5V406",
    "2020-04-01": 85,
    "2020-04-02": 85,
    "2020-04-03":85,
    "2020-04-04":85,
    "2020-04-05": 85,
    "2020-04-06":29,
    "2020-04-07": 29,
    "2020-04-08":29,
    "2020-04-09": 29,
    "2020-04-10": 29,
    "2020-04-11": 63,
    "2020-04-12": 63,
    "2020-04-13":63,
    "2020-04-14":63,
  },
];
const tableData1 = [
  {
    key: 1,
    productid: "BAA215FH5T401",
  
    week1: 4.11,
    week2: 4.59,
    week3: 5.04,
    week4: 4.75,
    week5: 3.93,
    week6: 4.00,
  },
  {
    key: 2,
  productid: "BAA215FH5T501",
    
    week1: 3.47,
    week2: 3.32,
    week3: 4.38,
    week4: 4.17,
    week5: 3.65,
    week6: 4.10,
  },
  {
    key: 3,
    productid: "BAA430FH5V404",
   
    week1: 3.89,
    week2: 4.13,
    week3: 4.01,
    week4: 3.76,
    week5: 3.56,
    week6: 3.97,
  },
  {
    key: 4,
     productid: "BAA430FH5V405",
    week1: 4.11,
    week2: 4.44,
    week3: 5.45,
    week4: 3.99,
    week5: 4.18,
    week6: 4.67,
  },
  {
    key: 5,
    productid: "BAA430FH5V406",
    week1: 3.94,
    week2: 4.60,
    week3: 3.38,
    week4: 3.47,
    week5: 3.99,
    week6: 3.74,
  },
];
const tableData2 = [
   {
    key: 1,
     productid: "BAA215FH5T401",
    "2020-04": 4.58,
    "2020-05": 4.55,
    "2020-06": 4.53,
    "2020-07": 4.53,
    "2020-08": 4.42,
    "2020-09": 4.39,
  },
  {
    key: 2,
     productid: "BAA215FH5T501",
    "2020-04": 3.83,
    "2020-05": 3.73,
    "2020-06": 3.67,
    "2020-07":3.81,
    "2020-08": 3.67,
    "2020-09": 3.76,
  },
  {
    key: 3,
   productid: "BAA430FH5V404",
    "2020-04": 3.99,
    "2020-05": 3.79,
    "2020-06": 3.87,
    "2020-07": 3.80,
    "2020-08":3.98,
    "2020-09": 3.80,
  },
  {
    key: 4,
     productid: "BAA430FH5V405",
    "2020-04": 4.48,
    "2020-05": 4.27,
    "2020-06":4.26,
    "2020-07":4.27,
    "2020-08": 4.36,
    "2020-09":4.39,
  },
  {
    key: 5,
     productid: "BAA430FH5V406",
    "2020-04":3.86,
    "2020-05":3.77,
    "2020-06": 3.71,
    "2020-07": 3.76,
    "2020-08": 3.76,
    "2020-09": 3.71,
  },
];


export default defineComponent({
  name: "ProductOutput",
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
          width: 180,
          dataIndex: "productid",
          key: "productid",
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
          width: 180,
          dataIndex: "productid",
          key: "productid",
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
          title: "Product ID",
          width: 180,
          dataIndex: "productid",
          key: "productid",
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
