<template>
  <a-card
    :body-style="{ padding: '24px 32px', minHeight: '320px' }"
    :bordered="false"
  >
    <a-button type="danger" style="margin-bottom: 10px">
      <template #icon><DownloadOutlined /></template>
      Export
    </a-button>

    <a-table
      bordered
      :columns="columns"
      :data-source="tableData"
      :scroll="{ x: 2000, y: 500 }"
      @change="handleChange"
    >
      <template #action>
        <a>action</a>
      </template>
    </a-table>
  </a-card>
</template>

<script>
import { defineComponent,computed ,ref } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
const tableDataMove = [
  {
    key: 1,
    move: "Move",    
    "2020-04-01": 7728,
    "2020-04-02": 7583,
    "2020-04-03": 7710,
    "2020-04-04": 8009,
    "2020-04-05": 7659,
    "2020-04-06": 7708
  }
];
const tableData = [
  {
    key: 1,
     productid: "BAA215FH5T401",
    "2020-04-01": 422,
    "2020-04-02": 423,
    "2020-04-03":407,
    "2020-04-04": 444,
    "2020-04-05": 400,
    "2020-04-06": 440,
    "2020-04-07": 442,
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
     productid: "BAA215FH5T501",
    "2020-04-01": 412,
    "2020-04-02": 418,
    "2020-04-03":385,
    "2020-04-04": 401,
    "2020-04-05": 414,
    "2020-04-06": 389,
    "2020-04-07": 392,
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
   productid: "BAA430FH5V404",
    "2020-04-01": 386,
    "2020-04-02": 393,
    "2020-04-03":422,
    "2020-04-04": 408,
    "2020-04-05": 405,
    "2020-04-06": 374,
    "2020-04-07": 335,
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
     productid: "BAA430FH5V405",
    "2020-04-01": 412,
    "2020-04-02": 418,
    "2020-04-03":385,
    "2020-04-04": 401,
    "2020-04-05": 414,
    "2020-04-06": 389,
    "2020-04-07": 392,
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
     productid: "BAA430FH5V406",
    "2020-04-01": 422,
    "2020-04-02": 423,
    "2020-04-03":407,
    "2020-04-04": 444,
    "2020-04-05": 400,
    "2020-04-06": 440,
    "2020-04-07": 442,
    "2020-04-08": "83.71%",
    "2020-04-09": "83.71%",
    "2020-04-10": "83.71%",
    "2020-04-11": "83.71%",
    "2020-04-12": "83.71%",
    "2020-04-13": "83.71%",
    "2020-04-14": "83.71%",
  },
];
export default defineComponent({
  name: "ForecastOutputForward",
  components:{DownloadOutlined},
  setup() {
    
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
     const columnsMove = computed(() => {
      const filtered = filteredInfo.value || {};
      const sorted = sortedInfo.value || {};
      const handleChange = (pagination, filters, sorter) => {
        console.log("Various parameters", pagination, filters, sorter);
        filteredInfo.value = filters;
        sortedInfo.value = sorter;
      };
      return [
        {
          title: "",
          width: 180,
          dataIndex: "move",
          key: "move",
          fixed: "left",
        },
         {
          title: "",
          width: 150,
          dataIndex: "2020-04-01",
          key: "2020-04-01",
        },
         {
          title: "",
          width: 150,
          dataIndex: "2020-04-02",
          key: "2020-04-02",
        },
         {
          title: "",
          width: 150,
          dataIndex: "2020-04-03",
          key: "2020-04-03",
        },
         {
          title: "",
          width: 150,
          dataIndex: "2020-04-04",
          key: "2020-04-04",
        },
         {
          title: "",
          width: 150,
          dataIndex: "2020-04-05",
          key: "2020-04-05",
        },
        //  {
        //   title: "2020-04-06",
        //   width: 150,
        //   dataIndex: "2020-04-06",
        //   key: "2020-04-06",
        // }
      ];
    });
    const handleChange = () => {
      console.log("Various parameters");
     
    };
    return { tableData, columns ,handleChange,tableDataMove,columnsMove};
  },
});
</script>
