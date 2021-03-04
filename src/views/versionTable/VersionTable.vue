<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-form-item label="Select By Method">
      <a-radio-group v-model:value="value1" @change="onChange">
        <a-radio :value="1">Demand Confirmation(正推)</a-radio>
        <a-radio :value="2">Optimal Demand Confirmation(正推最佳化) </a-radio>
        <a-radio :value="3">Demand Fulfillment(逆推)</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-table bordered :columns="columns" :data-source="data">
      <template #status="{ text: status }">
        <span>
          <a-tag
            v-for="tag in status"
            :key="tag"
            :color="tag === 'On-Going' ? 'volcano' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
    </a-table>
  </a-card>
</template>

<script>
import { defineComponent, ref } from "vue";
const columns = [
  {
    title: "DT",
    dataIndex: "DT",
    key: "DT",
  },
  {
    title: "Version",
    dataIndex: "Version",
    key: "Version",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    slots: { customRender: "status" },
  },
];

export default defineComponent({
  name: "VersionTable",
  setup() {
    const data = ref([
      {
        key: "1",
        DT: "2020-04-28",
        Version: "DemandConfirmInput",
        status: ["On-Going"],
      },
      {
        key: "2",
        DT: "2020-04-20",
        Version: "DemandConfirmInput1",
        status: ["FINISHED"],
      },
    ]);
    const value1 = ref(1);
    function onChange(e) {
      console.log("radio checked", e.target.value);
      if (e.target.value == 2) {
        data.value = [
          {
            key: "1",
            DT: "2020-04-30",
            Version: "OptimalDemandConfirmInput",
            status: ["FINISHED"],
          },
          {
            key: "2",
            DT: "2020-04-18",
            Version: "OptimalDemandConfirmInput1",
            status: ["On-Going"],
          },
        ];
      } else if (e.target.value == 3) {
        data.value = [
          {
            key: "1",
            DT: "2020-04-01",
            Version: "DemandFulfillment1",
            status: ["On-Going"],
          },
          {
            key: "2",
            DT: "2020-04-03",
            Version: "DemandFulfillment2",
            status: ["FINISHED"],
          },
        ];
      } else {
        data.value = [
          {
            key: "1",
            DT: "2020-04-28",
            Version: "DemandConfirmInput",
            status: ["On-Going"],
          },
          {
            key: "2",
            DT: "2020-04-20",
            Version: "DemandConfirmInput1",
            status: ["FINISHED"],
          },
        ];
      }
    }
    return { value1, onChange, data, columns };
  },
});
</script>
