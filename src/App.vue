<template>
  <router-view></router-view>
  <!-- <a-layout id="app" style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" theme="light" collapsible>
      <Logo :show-title="!collapsed" />
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1" 
              @click="this.$router.push('/')">
          <DesktopOutlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-menu-item key="2" 
              @click="this.$router.push('/dashboard')">
          <PieChartOutlined/>
          <span>Dashboard</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <UserOutlined />
            <span>User</span>
          </template>
          <a-menu-item key="3" @click="this.$router.push('/setting')">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <TeamOutlined />
            <span>Team</span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <FileOutlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row type="flex" justify="end">
          <a-col class="mr-3">
            <a-button
              type="primary"
              shape="circle"
              size="large"
              @click="this.$router.push('/')"
            >
              <template #icon><HomeFilled /></template>
            </a-button>
          </a-col>
          <a-col class="mr-3">
            <a-button
              type="primary"
              shape="circle"
              size="large"
              @click="this.$router.push('/setting')"
            >
              <template #icon><SettingFilled /></template>
            </a-button>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>breadcrumb1</a-breadcrumb-item>
          <a-breadcrumb-item>sub-breadcrumb2</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Vue 3 Tempalte ©2021 Created by Sean
      </a-layout-footer>
    </a-layout>
  </a-layout> -->
</template>

<script>
import Logo from "/@/components/Logo.vue";
import {
  // menu
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  // header
  HomeFilled,
  SettingFilled,
} from "@ant-design/icons-vue";

export default {
  name: "App",
  components: {
    Logo,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    HomeFilled,
    SettingFilled,
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ["1"],
    };
  },
};
</script>
