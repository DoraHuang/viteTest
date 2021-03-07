<template>
      <a-card
        :body-style="{ padding: '24px 32px', minHeight: '320px' }"
        :bordered="false"
      >
        <div style="margin-bottom:10px">
          <a-button>
            <template #icon><DownloadOutlined /></template>
            Export
          </a-button>
        </div>
        <a-table
          bordered
          :columns="columns"
          :data-source="tableData"
          :scroll="{ x: 2000, y: 300 }"
          @change="handleChange"
        >
          <template #action>
            <a>action</a>
          </template>
        </a-table>
      </a-card>
  
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    productid: "TB546A7AB000",
    layer:4,
    stage:"4-A",
    step:"B300",
    fab:"Fab A",
    mg:"FBBPH",
    average:Math.floor(Math.random() * (3000 - 1200 + 1)) + 1200,
    value: Math.floor(Math.random() * (3400 - 1230 + 1)) + 1230 ,
    value1: Math.floor(Math.random() * (3400 - 1230 + 1)) + 1230 ,
  });
}

export default defineComponent({
  name: "BackupPlan",
  components: { DownloadOutlined },
  setup() {
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
        },  {
          title: "Stage",
          width: 100,
          dataIndex: "stage",
          key: "stage",
        },     
        {
          title: "Step",
          width: 100,
          dataIndex: "step",
          key: "step",
        },
          {
          title: "Fab",
          width: 100,
          dataIndex: "fab",
          key: "fab",
        },
          {
          title: "Machine Group",
          width: 200,
          dataIndex: "mg",
          key: "mg",
         
        },
          {
          title: "Average",
          width: 100,
          dataIndex: "average",
          key: "average",
         
        },
        {
          title: "2020/04/01",
          dataIndex: "value",
          key: "value",
        width:120,
        },
        { title: "2020/04/02", dataIndex: "value1", key: "2", width: 120 },
        { title: "2020/04/03", dataIndex: "value", key: "3", width: 120 },
        { title: "2020/04/04", dataIndex: "value1", key: "4", width: 120 },
        { title: "2020/04/05", dataIndex: "value", key: "5", width: 120 },
        { title: "2020/04/06", dataIndex: "value1", key: "6", width: 120 },
        { title: "2020/04/07", dataIndex: "value", key: "7", width: 120 },
      ];
    });
   const handleChange = (pagination, filters, sorter) => {
      console.log("Various parameters", pagination, filters, sorter);
      filteredInfo.value = filters;
      sortedInfo.value = sorter;
    };
   
    return {
      value3: ref("InputDemand1"),
      activeKey: ref("1"),
      data,
      tableData,
      columns,
      handleChange,
    };
  },
});
</script>
