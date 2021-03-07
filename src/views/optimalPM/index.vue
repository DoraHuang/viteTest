<template>
  <div style="background: #fff; padding-left: 15px; padding-top: 10px">
    <a-form-item label="Week" style="padding-bottom: 10px">
      <a-week-picker @change="onChange" placeholder="Select week">
        <template #suffixIcon>
          <SmileOutlined />
        </template>
      </a-week-picker>
    </a-form-item>
  </div>
  <a-card :body-style="{ padding: '24px 32px', minHeight: '320px' }">
    v: for Original Plan Item,
    <span style="color: orange">o: for Optimal Item</span>
    <div align="end">
      <a-button class="btn-bar" type="primary">
        <template #icon><DownloadOutlined /></template>
        Export
      </a-button>
      <a-button class="btn-bar" type="primary" @click="showMgChagnge">
        <span>Only pull in </span>
      </a-button>
      <a-button class="btn-bar" type="primary" @click="showMgChagnge">
        <span>Only Original </span>
      </a-button>
      <a-button class="btn-bar" type="primary" @click="showMgChagnge">
        <span>Only Optimal </span>
      </a-button>
      <a-button class="btn-bar" type="primary" @click="showMgChagnge">
        <span>Both </span>
      </a-button>
    </div>
    <div>
      <a-table
        :columns="tempcol"
        :data-source="data"
        bordered
        size="middle"
        :scroll="{ x: 1200, y: 240 }"
      >
        <template #cusDuration>
          <span>
            Duration<br />
            (hr)
          </span>
        </template>
      </a-table>
    </div>
  </a-card>
</template>
<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined, SmileOutlined } from "@ant-design/icons-vue";
import { Moment } from "moment";
import _ from "lodash";
const columns = [
  {
    title: "Machine Category",
    dataIndex: "machinecategory",
    key: "machinecategory",
    width: 150,
    fixed: "left",
  },
  {
    title: "Machine Group",
    dataIndex: "machinegroup",
    key: "machinegroup",
    width: 150,
    fixed: "left",
  },
  {
    title: "Machine ID",
    dataIndex: "machineid",
    key: "machineid",
    width: 150,
  },
  {
    title: "Item",
    dataIndex: "item",
    key: "item",
    width: 150,
  },
  {
    dataIndex: "duration",
    key: "duration",
    width: 80,
    slots: { title: "cusDuration" },
  },
  {
    title: "Item Planned / Assigned",
    children: [
      {
        title: "3/8",
        dataIndex: "day1",
        key: "day1",
        width: 100,
        align: "center",
        customCell: (record) => {
          if (record.day1 =="v / o") {
            return {
              style: {
                "background-color": "yellow",
              },
            };
          }
        },
      },
      {
        title: "3/9",
        dataIndex: "day2",
        key: "day2",
        width: 100,
         align: "center",
        customCell: (record) => {
          if (record.day2 =="v / o") {
            return {
              style: {
                "background-color": "yellow",
              },
            };
          }
        },
      },
      {
        title: "3/10",
        dataIndex: "day3",
        key: "day3",
        width: 100,
         align: "center",
        slots: { title: "cusDay3" },
        customCell: (record) => {
          if (record.day3 =="v / o") {
            return {
              style: {
                "background-color": "yellow",
              },
            };
          }
        },
      },
      {
        title: "3/11",
        dataIndex: "day4",
        key: "day4",
        width: 100,
         align: "center",
        customCell: (record) => {
          if (record.day4 =="v / o") {
            return {
              style: {
                "background-color": "yellow",
              },
            };
          }
        },
      },
      {
        title: "3/12",
        dataIndex: "day5",
        key: "day5",
        width: 100,
         align: "center",
        customCell: (record,text) => {
          console.log(record,text)
          if (record.day5 =="v / o") {
            return {
              style: {
                "background-color": "yellow",
              },
            };
          }
        },
      },
      {
        title: "3/13",
        dataIndex: "day6",
        key: "day6",
        width: 100,
         align: "center",
        customCell: (record) => {
          if (record.day6 =="v / o") {
            return {
              style: {
                "background-color": "yellow",
              },
            };
          }
        },
      },
      {
        title: "3/14",
        dataIndex: "day7",
        key: "day7",
        width: 100,
         align: "center",
        slots: { title: "cusDay7" },
        customCell: (record) => {
          if (record.day7 =="v / o") {
            return {
              style: {
                "background-color": "yellow",
              },
            };
          }
        },
      },
    ],
  },
  {
    title: "Remark",
    dataIndex: "remark",
    key: "remark",
    width: 150,
  },
  {
    dataIndex: "comment",
    key: "comment",
    width: 80,
    title: "Comment",
  },
];
const data1 = [
  {
    key: 1,
    machinecategory: "Dry etch",
    machinegroup: "EPOLY-**",
    machineid: "testMachineId" + 1,
    item: "test",
    duration: 24.0,
    day1: "v / o",
    day2: "",
    day3: "",
    day4: "",
    day5: "",
    day6: "",
    day7: "",
    remark: "Break Module Constraint	",
    comment: "",
  },
  {
    key: 2,
    machinecategory: "Dry etch",
    machinegroup: "EPOLY-**",
    machineid: "testMachineId" + 2,
    item: "test",
    duration: 24.0,
    day1: "",
    day2: "",
    day3: "v / o",
    day4: "",
    day5: "",
    day6: "",
    day7: "",
    remark: "Break Module Constraint	",
    comment: "",
  },
];
const data = [...Array(8)].map((_, i) => ({
  key: i,
  machinecategory: "Dry etch",
  machinegroup: "EPOLY-**",
  machineid: "testMachineId" + i,
  item: "test",
  duration: 24.0,
  day1: "",
  day2: "",
  day3: "",
  day4: "",
  day5: "",
  day6: "",
  day7: "",
  remark: "Break Module Constraint	",
  comment: "",
}));
export default defineComponent({
  name: "index",
  components: { DownloadOutlined, SmileOutlined },
  setup() {
    const isShowMg = ref(false);
    const showOrhide = ref("Hide");
    const tempcol = ref(columns);
    const tempcol1 = ref(columns);

    const focus = () => {
      console.log("focus");
    };
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    const handleChange = () => {
      console.log("Various parameters");
    };
    const showMgChagnge = () => {
      isShowMg.value = !isShowMg.value;
      console.log(isShowMg.value);
      isShowMg.value
        ? (showOrhide.value = "Show")
        : (showOrhide.value = "Hide");
      console.log(isShowMg.value, showOrhide.value);
      if (isShowMg.value) {
        tempcol1.value = JSON.parse(JSON.stringify(columns));
        tempcol1.value.splice(6, 1);
        tempcol.value = tempcol1.value;
      } else {
        tempcol.value = JSON.parse(JSON.stringify(columns));
      }
    };
    return {
      focus,
      isShowMg,
      handleChange,
      showMgChagnge,
      tempcol,
      showOrhide,
      data: _.concat(data1,data ),
      columns,
      onChange,
      value3: ref("InputDemand1"),
      actualDate: ref("2021-03-03"),
      value4: ref(),
    };
  },
});
</script>
<style lang="less" scoped>
.btn-bar {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
