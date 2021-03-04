<template>
  <div style="background: #fff; padding-left: 15px; padding-top: 10px">
    <a-form-item label="Week" style="padding-bottom: 10px">
      <a-select
        v-model:value="value3"
        @focus="focus"
        ref="select"
        @change="handleChange"
      >
        <a-select-option value="inputDemand">InputDemand</a-select-option>
        <a-select-option value="inputDemand1">InputDemand1</a-select-option>
        <a-select-option value="inputDemand2">InputDemand2</a-select-option>
      </a-select>
    </a-form-item>
  </div>
  <a-card :body-style="{ padding: '24px 32px', minHeight: '320px' }">
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
        :columns="columns"
        :data-source="data"
        bordered
        size="middle"
        :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
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
          <span> (+)Redundant WIP<br />(-)Redundant WIP </span>
        </template>
         <template #customreDundantwip>
          <span> (+)Redundant %<br />(-)Redundant % </span>
        </template>
      </a-table>
    </div>
  </a-card>
</template>
<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
const columns = [
  {
    title: "Rank",
    dataIndex: "Rank",
    key: "Rank",
    width: 100,
    //fixed: 'left',
  },
  {
    title: "Machine for WIP",
    children: [
      {
        title: "Machine Category",
        dataIndex: "machinecategory",
        key: "machinecategory",
        width: 200,
      },
      {
        title: "Machine Group",
        dataIndex: "machinegroup",
        key: "machinegroup",
        width: 200,
      },
    ],
  },
  {
   
    dataIndex: "safetywip",
    key: "safetywip",
    width: 100,
    slots: { title: "cusSafetywip", customRender: "name" },
  },
  {
    dataIndex: "actualwip",
    key: "actualwip",
    width: 100,
    slots: { title: "cusActualwip", customRender: "name" },
  },
  {
    dataIndex: "redundantwip",
    key: "redundantwip",
    width: 150,
    //fixed: 'left',
    slots: { title: "customTitle", customRender: "name" },
  },
  {
  
    dataIndex: "redundantwip",
    key: "redundantwip",
    width: 150,
     slots: { title: "customreDundantwip", customRender: "name" },
  },
];
const data = [...Array(100)].map((_, i) => ({
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
export default defineComponent({
  name: "index",
  components: { DownloadOutlined },
  setup() {
    const focus = () => {
      console.log("focus");
    };
    const handleChange = () => {
      console.log("Various parameters");
    };
    return {
      focus,
      handleChange,
      data,
      columns,
      value3: ref("InputDemand1"),
      actualDate: ref("2021-03-03"),
    };
  },
});
</script>
<style lang="less" scoped>
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
