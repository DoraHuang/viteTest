<template>
  <div style="background: #fff; padding-left: 15px; padding-top: 10px">
    <a-form-item label="Select Version" style="padding-bottom: 10px">
      <a-select
        style="min-width: 200px;max-width:100%"
        v-model:value="selectedValue"
        @change="handleChange"
          placeholder="Please Select Version" >
       
        <a-select-option v-for="d in data" :key="d.id"> {{ d.version }}</a-select-option>
      </a-select>
    </a-form-item>
  </div>
  <a-tabs type="card" v-model:activeKey="activeKey" tab-position="top">
    <a-tab-pane key="1" tab="Machine Loading">
      <MachineLoading></MachineLoading>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Forecast Output Date">
      <ForecastOutputDate></ForecastOutputDate>
    </a-tab-pane>
    <!-- <a-tab-pane key="3" tab="Backup Plan">
      <BackupPlan></BackupPlan>
    </a-tab-pane> -->
  </a-tabs>
</template>

<script>
import { defineComponent, computed, ref,reactive ,toRefs ,watch ,onBeforeMount} from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
import { plnVersionContorlApi } from "/@/api/api.js";
import  alaql from "alasql";
import MachineLoading from "./MachineLoading.vue";
import ForecastOutputDate from "./ForecastOutput.vue";
import BackupPlan from "./BackupPlan.vue";
import _ from 'lodash';
import alasql from "alasql";
export default defineComponent({
  name: "index",
  components: {
    DownloadOutlined,
    MachineLoading,
    ForecastOutputDate,
    BackupPlan,
  },
  setup() {
         let lastFetchId = 0;
    const state = reactive({
      data:[],
      value:[],
      selectedValue:"",
        fetching: false,
    })
    onBeforeMount(()=>{
    plnVersionContorlApi()
        .then((response) =>{ 
            const data = response.data;
            if(data.length == 0) return;
            console.log(data)
            state.selectedValue = data[0].id;
          state.data = data;
          state.fetching = false;
          
        })
       
    })

     const fetchUser = _.debounce(value => {
      console.log('fetching user', value);
      lastFetchId += 1;
      const fetchId = lastFetchId;
      state.data = [];
      state.fetching = true;
    plnVersionContorlApi()
        .then(response => response.json())
        .then(body => {
          if (fetchId !== lastFetchId) {
            // for fetch callback order
            return;
          }
          const data = body.data;
          state.data = data;
          state.fetching = false;
        });
    }, 800);

    watch(state.value, () => {
      state.data = [];
      state.fetching = false;
    });

    function axiosPost() {
      //  var temp = []
      // plnVersionContorlApi().then((response) => {
      //  temp = response.data;
      //   return temp;
      // })
      // .catch(function (response) {
      //   console.log(response);
      // });
      // console.log(temp)
    
    }

    const handleChange = (data) => {
      console.log("2", data);
    };
    return {
      value3: ref("InputDemand1"),
      activeKey: ref("1"),
      axiosPost,handleChange,versionArr:axiosPost(), ...toRefs(state),
      fetchUser,
    };
  },
});
</script>
