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
        <a-button block :type="btntype" @click="changeColor(e, 'layer')">
          Layer
        </a-button>
      </a-col>
      <a-col :span="8">
        <a-button block :type="btntype1" @click="changeColor(e, 'step')">
          Step
        </a-button>
      </a-col>
      <a-col :span="8">
        <a-button block :type="btntype2" @click="changeColor(e, 'tech')">
          Stage
        </a-button>
      </a-col>
    </a-row>
    <!--layer Region Start-->
    <a-table
      bordered
      :columns="columns"
      :data-source="tableData"
      :scroll="{ y: 500 }"
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
      :scroll="{ y: 500 }"
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
    productid: "TB546A7AB000",
    layer: 1,
    standardwip: 3601,
    actualwip: 3475,
    priorityquadrant: 2,
  },
  {
    key: 2,
    productid: "TB546A7AB000",
    layer: 2,
    standardwip: 228,
    actualwip: 227,
    priorityquadrant: 2,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 3,
    standardwip: 4899,
    actualwip: 4841,
    priorityquadrant: 4,
  },
];
const tableData1 = [
  {
    key: 1,
    productid: "TB546A7AB000",
    layer: 1,
    stage: "1-A",
    step: 1000,
    groupid: "A",
    targetwip: 83,
    actualwip: 86,
    priorityquadrant: 1,
  },
  {
    key: 2,
    productid: "TB546A7AB000",
    layer: 1,
    stage: "1-A",
    step: 1100,
    groupid: "B",
    targetwip: 282,
    actualwip: 272,
    priorityquadrant: 4,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    layer: 1,
    stage: "1-B",
    step: 1150,
    groupid: "C",
    targetwip: 26,
    actualwip: 27,
    priorityquadrant: 1,
  },
  {
    key: 4,
    productid: "TB546A7AB000",
    layer: 1,
    stage: "1-B",
    step: 1200,
    groupid: "D",
    targetwip: 419,
    actualwip: 404,
    priorityquadrant: 4,
  },
  {
    key: 5,
    productid: "TB546A7AB000",
    layer: 1,
    stage: "1-B",
    step: 1230,
    groupid: "E",
    targetwip: 19,
    actualwip: 23,
    priorityquadrant: 1,
  },
];
const tableData2 = [
  {
    key: 1,
    productid: "TB546A7AB000",
    stage: "1-A",
    targetwip: 365,
    actualwip: 358,
    priorityquadrant: 2,
  },
  {
    key: 2,
    productid: "TB546A7AB000",
    stage: "1-A",
    targetwip: 464,
    actualwip: 454,
    priorityquadrant: 2,
  },
  {
    key: 3,
    productid: "TB546A7AB000",
    stage: "1-B",
    targetwip: 645,
    actualwip: 572,
    priorityquadrant: 4,
  },
  {
    key: 4,
    productid: "TB546A7AB000",
    stage: "1-B",
    targetwip: 395,
    actualwip: 437,
    priorityquadrant: 1,
  },
  {
    key: 5,
    productid: "TB546A7AB000",
    stage: "1-B",
    targetwip: 1564,
    actualwip: 1484,
    priorityquadrant: 2,
  },
];
export default defineComponent({
  name: "TargetWipPriority",
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
          width: 200,
          dataIndex: "productid",
          key: "productid",
        },
        {
          title: "Layer",
          width: 100,
          dataIndex: "layer",
          key: "layer",
        },
        {
          title: "Standard WIP",
          dataIndex: "standardwip",
          key: "standardwip",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Actual WIP",
          dataIndex: "actualwip",
          key: "actualwip",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Priority Quadrant",
          dataIndex: "priorityquadrant",
          key: "priorityquadrant",
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
          width: 250,
          dataIndex: "productid",
          key: "productid",
        },
        {
          title: "Layer",
          width: 80,
          dataIndex: "layer",
          key: "layer",
        },
        {
          title: "Stage",
          dataIndex: "stage",
          key: "stage",
          width: 80,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Step",
          dataIndex: "step",
          key: "step",
          width: 100,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Group ID",
          dataIndex: "groupid",
          key: "groupid",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Target WIP",
          dataIndex: "targetwip",
          key: "targetwip",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Actual WIP",
          dataIndex: "actualwip",
          key: "actualwip",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Priority Quadrant",
          dataIndex: "priorityquadrant",
          key: "priorityquadrant",
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
          width: 250,
          dataIndex: "productid",
          key: "productid",
        },
        {
          title: "Stage",
          dataIndex: "stage",
          key: "stage",
          width: 80,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Target WIP",
          dataIndex: "targetwip",
          key: "targetwip",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Actual WIP",
          dataIndex: "actualwip",
          key: "actualwip",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
        {
          title: "Priority Quadrant",
          dataIndex: "priorityquadrant",
          key: "priorityquadrant",
          width: 150,
          sorter: (a, b) => a.value - b.value,
          sortOrder: sorted.columnKey === "value" && sorted.order,
        },
      ];
    });
    const changeColor = (e, value) => {
      if (value == "layer") {
        btntype.value = "primary";
        btntype1.value = "default";
        btntype2.value = "default";
      } else if (value == "step") {
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
