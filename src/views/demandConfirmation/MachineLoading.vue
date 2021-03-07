<template>
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
  
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";

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
    };
  },
});
</script>
