<template>
  <div style="background: #fff; padding-left: 15px; padding-top: 10px">
    <a-form-item label="Date" style="padding-bottom: 10px">
      <a-date-picker v-model:value="value1">
        <template #suffixIcon>
          <SmileOutlined />
        </template>
      </a-date-picker>
    </a-form-item>
  </div>
  <!-- <a-table
    :columns="columns1"
    :data-source="data2"
    bordered
    size="middle"
    :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
  /> -->
  <a-card :body-style="{ padding: '24px 32px', minHeight: '320px' }">
    <a-button style="margin-bottom: 10px; margin-right: 10px" type="primary">
      <template #icon><DownloadOutlined /></template>
      Export
    </a-button>
    <div>
      <a-table
        :columns="columns"
        :data-source="data"
        bordered
        size="middle"
        :scroll="{ x: 'calc(700px + 50%)'}"
        :rowKey="
          (record, index) => {
            return index;
          }
        "
      >
        <template #cusMachine> Impacted Machine / Bottleneck Machine </template>
        <template #cusImpactedMove> 33333 </template>
        <template #cusBottlenecksMove> 321111 </template>
        <template #cusBottlenecks> <a-tooltip title = "Impacted by Bottlenecks"> Bottlenecks</a-tooltip> </template>
      </a-table>
    </div>
  </a-card>
</template>
<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined, SmileOutlined } from "@ant-design/icons-vue";
import json from "./data.json";
import tableData from "./data1.json";
import _ from "lodash";
const columns1 = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "John",
        value: "John",
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: "Other",
    fixed: "left",
    children: [
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 200,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Address",
        //fixed: 'left',
        children: [
          {
            title: "Street",
            dataIndex: "street",
            key: "street",
            width: 200,
          },
          {
            title: "Block",
            //fixed: 'left',
            children: [
              {
                title: "Building",
                dataIndex: "building",
                key: "building",
                width: 100,
              },
              {
                title: "Door No.",
                dataIndex: "number",
                key: "number",
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Company",
    children: [
      {
        title: "Company Address",
        dataIndex: "companyAddress",
        key: "companyAddress",
        width: 200,
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        key: "companyName",
      },
    ],
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 80,
    fixed: "right",
  },
];
const data2 = [...Array(100)].map((_, i) => ({
  key: i,
  name: "John Brown",
  age: i + 1,
  street: "Lake Park",
  building: "C",
  number: 2035,
  companyAddress: "Lake Street 42",
  companyName: "SoftLake Co",
  gender: "M",
}));
const columns = [
  {
    title: "Rank",
    fixed: "left",
    className: "word-wrap",
    children: [
      {
        title: "Impact to Factory Move",
        align: "center",
        children: [
          {
            slots: { title: "cusMachine" },
            dataIndex: "ImpactedMachine",
            key: "ImpactedMachine",
            width: 400,
            //fixed: "left",
          },
        ],
      },
      {
        //    dataIndex: "impactedMoveGap",
        //     key: "impactedMoveGap",
        width: 100,
        //fixed: "left",
        slots: { title: "cusImpactedMove" },
        children: [
          {
            title: "Move Gap",
            width: 100,
            //fixed: "left",
            dataIndex: "MoveGap",
            key: "MoveGap",
          },
        ],
      },
      {
        // dataIndex: "bottleneckMoveGap",
        // key: "bottleneckMoveGap",
        slots: { title: "cusBottlenecksMove" },
        width: 120,
        //fixed: "left",
        children: [
          {
               slots: { title: "cusBottlenecks" },
            //title: "Impacted by Bottlenecks",
            key: "bottleneck",
            dataIndex: "ImpactedByBottlenecks",
            width: 200,
            //fixed: "left",
          },
        ],
      },
    ],
  },
];

export default defineComponent({
  name: "index",
  components: { DownloadOutlined, SmileOutlined, json, tableData },
  setup() {
    var columnstmp = [];
    const data = ref(tableData);
    for (var i = 0; i < json.length; i++) {
      console.log(json[i]);
      var temp = {
        title: json[i].Rank,
        key: json[i].Rank,
        width: 400,
        align: "center",
        children: [
          {
            title: json[i].Impact_Move_Sum,
            width: 400,
            key: json[i].Impact_Move_Sum,
            align: "center",
            children: [
              {
                title: json[i].BottleneckMachine,
                dataIndex: json[i].BottleneckMachine,
                key: json[i].BottleneckMachine,
                width: 400,
                align: "center",
                
              },
            ],
          },
        ],
      };
      console.log(temp);
      columnstmp.push(temp);
    }
    console.log(data);

    return {
      value1: ref(),
      columns: _.concat(columns, columnstmp),
      data,
      columns1,
      data2,
    };
  },
});
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
.word-wrap {
  word-break: break-all;
}
</style>
