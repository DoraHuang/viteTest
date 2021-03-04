<template>
  <a-layout-header class="admin-header light">
    <div class="admin-header-wide side fixed">
      <MenuFoldOutlined
        style="font-size: 18px"
        v-if="!collapsed"
        @click="toggleCollapse"
      />
      <MenuUnfoldOutlined
        style="font-size: 18px"
        v-if="collapsed"
        @click="toggleCollapse"
      />

      <div class="admin-header-right light">
        <div class="header-item">
          <a-dropdown>
            <div
              class="header-avatar ant-dropdown-link"
              @click.prevent
              style="cursor: pointer"
            >
              <UserOutlined style="font-size: 18px; color: #08c" />
              {{ user.name }}
            </div>
            <template #overlay>
              <a-menu :class="['avatar-menu']">
                <a-menu-item>
                  <a href="javascript:;"
                    ><UserOutlined style="margin-right: 8px" />個人中心</a
                  >
                </a-menu-item>
                <a-menu-item @click="logout">
                  <a href="javascript:;">
                    <PoweroffOutlined style="margin-right: 8px" />登出</a
                  >
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import {
  // menu
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  PoweroffOutlined,
  UserOutlined,
  SettingOutlined,
  FileOutlined,
  // header
  HomeFilled,
  SettingFilled,
} from "@ant-design/icons-vue";
export default {
  name: "AdminHeader",
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    PoweroffOutlined,

    SettingOutlined,
    FileOutlined,
    HomeFilled,
    UserOutlined,
    SettingFilled,
  },
  props: ["collapsed"],
  methods: {
    logout() {
     
      this.$router.push("/login");
    },
    toggleCollapse() {
      console.log(1);
      this.$emit("toggleCollapse");
    },
    onSelect(obj) {
      this.$emit("menuSelect", obj);
    },
  },
  setup() {
    return {
      user: {
        name: "YTAdmin",
      },
    };
  },
};
</script>

<style lang="less" scoped>
@import "./index";
</style>
