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
    <a-button style="margin-bottom: 10px;margin-right:10px" type='primary'>
      <template #icon><DownloadOutlined /></template>
      Export
    </a-button>
    <a-button style="margin-bottom: 10px" type='primary' @click="showMgChagnge" >
      <span>{{ showOrhide }} MGRP Move </span>
    </a-button>
    <div class="gutter-example">
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="6">
          <a-row type="flex">
            <a-col :span="16" class="gutter-title"
              >Total Factory <br />
              WIP</a-col
            >
            <a-col :span="8" class="gutter-value">92,165</a-col>
          </a-row>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <a-row type="flex">
            <a-col :span="16" class="gutter-title"
              >Total Redundant <br />
              WIP</a-col
            >
            <a-col :span="8" class="gutter-value">3,299</a-col>
          </a-row>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <a-row type="flex">
            <a-col :span="16" class="gutter-title">Redundant <br />WIP%</a-col>
            <a-col :span="8" class="gutter-value">3.6%</a-col>
          </a-row>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <a-row type="flex">
            <a-col :span="16" class="gutter-title"
              >Optimal Factory <br />WIP</a-col
            >
            <a-col :span="8" class="gutter-value">88,866</a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-table
        :columns="tempcol"
        :data-source="data"
        bordered
        size="middle"
        :scroll="{ x: 1200, y: 240 }"
      >
        <template #cusSafetywip>
          <span>
            Safety WIP<br />
            (pcs)
          </span>
        </template>
        <template #cusActualwip>
          <span>
            Actual WIP<br />
            ({{ actualDate }})
          </span>
        </template>
        <template #customTitle>
          <span> (＋)Redundant WIP<br />(－)Redundant WIP </span>
        </template>
        <template #customreDundantwip>
          <span> (＋)Redundant %<br />(－)Redundant % </span>
        </template>
      </a-table>
    </div>
  </a-card>
</template>
<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined, SmileOutlined } from "@ant-design/icons-vue";
import { Moment } from "moment";
const columns = [
  {
    title: "Rank",
    dataIndex: "Rank",
    key: "Rank",
    width: 50,
    align: "center",
    //fixed: 'left',
  },
  {
    title: "Machine for WIP",
    children: [
      {
        title: "Machine Category",
        dataIndex: "machinecategory",
        key: "machinecategory",
        width: 150,
      },
      {
        title: "Machine Group",
        dataIndex: "machinegroup",
        key: "machinegroup",
        width: 150,
      },
    ],
  },
  {
    dataIndex: "safetywip",
    key: "safetywip",
    width: 70,
    slots: { title: "cusSafetywip" },
  },
  {
    dataIndex: "actualwip",
    key: "actualwip",
    width: 80,
    slots: { title: "cusActualwip" },
  },
  {
    dataIndex: "redundantwip",
    key: "redundantwip",
    width: 100,
    //fixed: 'left',
    slots: { title: "customTitle" },
  },
  {
    dataIndex: "redundantwip",
    key: "redundantwip",
    width: 100,
    slots: { title: "customreDundantwip" },
  },
  {
    dataIndex: "machinegroupforMove",
    key: "machinegroupforMove",
    width: 100,
    title: "Machine Group for Move",
  },
];
const data = [...Array(100)].map((_, i) => ({
  key: i,
  machinecategory: "Dry etch",
  Rank: i + 1,
  machinegroup: "EPOLY-**",
  safetywip: Math.floor(Math.random() * (1000 - 230 + 1)) + 230,
  actualwip: Math.floor(Math.random() * (1000 - 230 + 1)) + 230,
  redundantwip: Math.floor(Math.random() * (1000 - 230 + 1)) + 230,
  redundantwip: Math.floor(Math.random() * (1000 - 230 + 1)) + 230,
  machinegroupforMove: "EPOLY-**",
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
      data,
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
.gutter-example {
  margin-bottom: 10px;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
.gutter-title {
  border: 1px darkgray solid;
  padding: 10px;
  background: #ededed;
  text-align: center;
}
.gutter-value {
  border: 1px darkgray solid;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
