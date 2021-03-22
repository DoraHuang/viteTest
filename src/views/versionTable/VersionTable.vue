<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-form-item label="Select By Method">
      <a-radio-group v-model:value="selectedVal" @change="onChange">
        <a-radio value="DemandConfirmationSimulation" key="1">Demand Confirmation(正推)</a-radio>
        <a-radio value="OptimalDemandConfirmation" key="2"
          >Optimal Demand Confirmation(正推最佳化)
        </a-radio>
        <a-radio value="DemandFulfillment" key="3">Demand Fulfillment(逆推)</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-table bordered :columns="columns" :data-source="data">
      <template #status="{ text: status }">
        <span>
          <a-tag v-if="status" :key="status" :color="status === 'On-Going' ? 'volcano' : 'green'">
            {{ status.toUpperCase() }}
          </a-tag>
        </span>
      </template>
    </a-table>
  </a-card>
</template>

<script>
  import { defineComponent, ref, onBeforeMount, reactive, toRefs } from 'vue';
  import { plnVersionContorlApi, testAPI } from '/@/api/api.js';
  //import simulationVerEnum from "/@/enum/simulationVerEnum.js";
  import momentjs from 'moment';
  import alasql from 'alasql';
  //  const SimulationVerEnum = Object.freeze({
  //     DemandConfirmationSimulation = 0,//正推
  //     OptimalDemandConfirmation = 1,//正推最佳化
  //     DemandFulfillment = 2//逆推
  //   });
  const columns = [
    {
      title: 'DT',
      dataIndex: 'DT',
      key: 'DT',
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'Version',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      slots: { customRender: 'status' },
    },
  ];

  export default defineComponent({
    name: 'VersionTable',
    setup() {
      const selectedVal = ref('OptimalMasterProductionSchedule');
      //console.log(simulationVerEnum)
      const state = reactive({
        data: [],
        value: [],
        fetching: false,
      });
      onBeforeMount(() => {
      axiosPost();
      alasql.fn.datetime = function(dateStr) {
            var date = new Date(dateStr);
            return date.toLocaleString();
        };

      });
      function axiosPost() {
        plnVersionContorlApi()
          .then((response) => {
            const data = response.data;
            var tsq = alasql("select * from ? where remark = '" + selectedVal.value + "'", [data]);
            if (data.length == 0) return;
            console.log(tsq);
            state.data = tsq;
          })
          .catch(function (response) {
            console.log(response);
          });
      }
      function onChange(e) {
        selectedVal.value = e.target.value;
        axiosPost();

      }
      return { selectedVal, onChange, columns, axiosPost, ...toRefs(state) };
    },
  });
</script>
