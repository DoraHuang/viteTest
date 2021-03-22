<template>
  <a-card :body-style="{ padding: '24px 32px', minHeight: '320px' }" :bordered="false">
    <div style="">
      <a-button>
        <template #icon><DownloadOutlined /></template>
        Export
      </a-button>

      <span style="float: right">
        <a-button type="primary" @click="btnChange" style="margin-bottom: 10px">
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
  import { defineComponent, computed, ref, onBeforeMount } from 'vue';
  import { DownloadOutlined } from '@ant-design/icons-vue';
  import { plnMGResultApi } from '/@/api/api.js';
  import _ from 'lodash';
  import alasql  from 'alasql';
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      key: i,
      mc: 'Dry etch',
      mg: `ETCH${i}`,
      value: Math.floor(Math.random() * (100 - 0 + 1)) + 0 + '%',
    });
  }
  const tempData = [];
  for (let i = 0; i < 20; i++) {
    tempData.push({
      key: i,
      mc: 'Dry etch',
      mg: `ETCH${i}`,
      value: Math.floor(Math.random() * (1000 - 230 + 1)) + 230,
    });
  }
  export default defineComponent({
    name: 'MachineLoading',
    components: { DownloadOutlined },
    setup() {
      console.log(11);
      const status = ref(0);
      const tableData = ref();
      const filteredInfo = ref();
      const sortedInfo = ref();
      var columnstmp = [];
      onBeforeMount(() => {
        axiosPost();
      });
      function axiosPost() {
        plnMGResultApi('03910a76-2a93-4e80-91a6-13d3cdafdd75')
          .then((response) => {
            const data = response.data;
            if (data.length == 0) return;
            var dateList = _.pull(_.keys(data[0]), 'category', 'toolg_id');
            for (var i = 0; i < dateList.length; i++) {
              var temp = {
                title: dateList[i],
                dataIndex: dateList[i],
                key: dateList[i],
                width: 150,
              };
              columnstmp.push(temp);
            }
            var test = alasql("select ROW_NUMBER() OVER(ORDER BY toolg_id) AS key,* from ?", [data]);
            tableData.value = test;
          })
          .catch(function (response) {
            console.log(response);
          });
      }
      const columns = computed(() => {
        const filtered = filteredInfo.value || {};
        const sorted = sortedInfo.value || {};
        const handleChange = (pagination, filters, sorter) => {
          console.log('Various parameters', pagination, filters, sorter);
          filteredInfo.value = filters;
          sortedInfo.value = sorter;
        };
        return [
          {
            title: 'Machine Category',
            width: 200,
            dataIndex: 'category',
            key: 'category',
            fixed: 'left',
            filters: [{ text: 'Dry etch', value: 'Dry etch' }],
            filteredValue: filtered.mc || null,
            onFilter: (value, record) => record.mc.includes(value),

            ellipsis: true,
          },
          {
            title: 'Machine Group',
            width: 200,
            dataIndex: 'toolg_id',
            key: 'toolg_id',
            fixed: 'left',
            filters: [{ text: 'ETCH10', value: 'ETCH10' }],
            filteredValue: filtered.mg || null,
            onFilter: (value, record) => record.mg.includes(value),
            ellipsis: true,
          },
        ];
      });
      const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
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
        value3: ref('InputDemand1'),
        activeKey: ref('1'),
        data,
        tableData,
        columns : _.concat(columns, columnstmp),
        handleChange,
        status,
        btnChange,
        axiosPost,
      };
    },
  });
</script>
