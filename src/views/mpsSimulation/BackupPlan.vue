<template>
  <a-card
    :body-style="{ padding: '24px 32px', minHeight: '320px' }"
    :bordered="false"
  >
 Backup Plan Building....
    <!-- <a-button type="danger" style="margin-bottom: 10px">
      <template #icon><DownloadOutlined /></template>
      Export
    </a-button>
    -->
  </a-card>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "BackupPlan",
  components: { DownloadOutlined },
  setup() {


    return {
    
    };
  },
});
</script>
