<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content" v-if="current == 0">
      <div>
        <a-form-item label="Select By Date">
          <a-radio-group v-model:value="value" @change="onChange">
            <a-radio :value="1">By Month</a-radio>
            <a-radio :value="2">By Day</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Select By Method">
          <a-radio-group v-model:value="value1" @change="onChange">
            <a-radio :value="1">Demand Confirmation(正推)</a-radio>
            <a-radio :value="2"
              >Optimal Demand Confirmation(正推最佳化)
            </a-radio>
            <a-radio :value="3" v-if="value == 2"
              >Demand Fulfillment(逆推)</a-radio
            >
          </a-radio-group>
        </a-form-item>
        <a-form-item label="">
          <a-button>
            <template #icon><DownloadOutlined /></template>
            DownLoad Template
          </a-button>
        </a-form-item>
      </div>
      <a-upload-dragger
      
        name="file"
        action=""
         :file-list="fileList"
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">
          Support for a single . Strictly prohibit from uploading company data
          or other band files
        </p>
      </a-upload-dragger>
    </div>
    <div class="steps-content" v-if="current == 1">
      <a-button style="margin-bottom: 10px;">
        <template #icon><DownloadOutlined /></template>
         DownLoad File
      </a-button>

      <a-table :columns="columns" :data-source="dataSource" bordered>
        <template
          v-for="col in [
            'Product ID',
            '0401',
            '0402',
            '0403',
            '0404',
            '0405',
            '0406',
            '0407',
          ]"
          #[col]="{ text, record }"
          :key="col"
        >
          <div>
            <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][col]"
              style="margin: -5px 0"
            />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <template #operation="{ record }">
          <div class="editable-row-operations">
            <span v-if="editableData[record.key]">
              <a @click="save(record.key)">Save</a>
              <a-popconfirm
                title="Sure to cancel?"
                @confirm="cancel(record.key)"
              >
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="edit(record.key)">Edit</a>
            </span>
          </div>
        </template>
      </a-table>
    </div>
    <div class="steps-content" v-if="current == 2">
      <h1>請確認檔案內容是否正確</h1>
      <p>選擇日期格式：By Month</p>
      <p>選擇欲進行模擬的方法：Demand Confirmation</p>
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        Next
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
        Previous
      </a-button>
    </div>
  </a-card>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { cloneDeep } from "lodash-es";
import { message } from "ant-design-vue";
import { InboxOutlined, DownloadOutlined } from "@ant-design/icons-vue";
const columns = [
  {
    title: "Product ID",
    dataIndex: "productID",
    width: "15%",
    slots: { customRender: "productID" },
  },
  {
    title: "2020/04/01",
    dataIndex: "0401",
    width: "10%",
    slots: { customRender: "0401" },
  },
  {
    title: "2020/04/02",
    dataIndex: "0402",
    width: "10%",
    slots: { customRender: "0402" },
  },
  {
    title: "2020/04/03",
    dataIndex: "0403",
    width: "10%",
    slots: { customRender: "0403" },
  },
  {
    title: "2020/04/04",
    dataIndex: "0404",
    width: "10%",
    slots: { customRender: "0404" },
  },
  {
    title: "2020/04/05",
    dataIndex: "0405",
    width: "10%",
    slots: { customRender: "0405" },
  },
  {
    title: "2020/04/06",
    dataIndex: "0406",
    width: "10%",
    slots: { customRender: "0406" },
  },
  {
    title: "2020/04/06",
    dataIndex: "0406",
    width: "10%",
    slots: { customRender: "0406" },
  },
  {
    title: "operation",
    dataIndex: "operation",
    slots: { customRender: "operation" },
  },
];
const data = [];

for (let i = 0; i < 20; i++) {
  data.push({
    key: i.toString(),
    productID: `BAA215FH5T4${i}`,
    "0401": Math.floor(Math.random() * (500 - 100 + 1)) + 100,
    "0402": Math.floor(Math.random() * (500 - 100 + 1)) + 100,
    "0403": Math.floor(Math.random() * (500 - 100 + 1)) + 100,
    "0404": Math.floor(Math.random() * (500 - 100 + 1)) + 100,
    "0405": Math.floor(Math.random() * (500 - 100 + 1)) + 100,
    "0406": Math.floor(Math.random() * (500 - 100 + 1)) + 100,
    "0407": Math.floor(Math.random() * (500 - 100 + 1)) + 100,
  });
}
export default defineComponent({
  name: "UploadFileConfirm",
  components: { InboxOutlined, DownloadOutlined },
  setup() {
     const fileList = ref([
      {
        uid: '-1',
        name: 'demandInput1.xlsx',
        status: 'done',
        url: 'http://www.baidu.com/xxx.xlsx',
      },
    ]);
    const dataSource = ref(data);
    const editableData = reactive({});
    const edit = (key) => {
      editableData[key] = cloneDeep(
        dataSource.value.filter((item) => key === item.key)[0]
      );
    };
    const save = (key) => {
      Object.assign(
        dataSource.value.filter((item) => key === item.key)[0],
        editableData[key]
      );
      delete editableData[key];
    };
    const cancel = (key) => {
      delete editableData[key];
    };
    const current = ref(0);
    function next() {
      if (current.value == 0) {
      }

      current.value++;
    }
    function prev() {
      current.value--;
    }
    function onChange(e) {
      console.log("radio checked", e.target.value);
    }
    function handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
    const value = ref(1);
    const value1 = ref(1);
    return {
      fileList,
      dataSource,
      columns,
      editingKey: "",
      editableData,
      edit,
      save,
      cancel,
      YourModel: 1,
      value,
      value1,
      current,
      next,
      prev,
      onChange,
      handleChange,
      
      steps: [
        {
          title: "Input File",
          content: "First-content",
        },
        {
          title: "Confirm Data",
          content: "Second-content",
        },
        {
          title: "Finished",
          content: "Last-content",
        },
      ],
    };
  },
});
</script>
<style lang="less" scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  padding: 40px;
}

.steps-action {
  margin-top: 24px;
  text-align: end;
}
.ant-upload.ant-upload-drag {
  background: #ffffff !important;
}
.editable-row-operations a {
  margin-right: 8px;
}
</style>
