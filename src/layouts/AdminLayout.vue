<template>
  <a-layout id="app" class="admin-layout beauty-scroll">
    <side-menu class="fixed-side" :collapsed="collapsed" :collapsible="true"/>
    <div :style="`width: ${sideMenuWidth}; min-width: ${sideMenuWidth};max-width: ${sideMenuWidth};`" class="virtual-side"></div>
    <a-layout class="admin-layout-main beauty-scroll">
    
      <admin-header class="fixed-header" :style="headerStyle" :collapsed="collapsed" @toggleCollapse="toggleCollapse"/>
      <a-layout-header class="virtual-header fixed-header"></a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>breadcrumb1    </a-breadcrumb-item>
          <a-breadcrumb-item>sub-breadcrumb2</a-breadcrumb-item>
        </a-breadcrumb> -->
       <div  style="margin-bottom:16px;min-height:10px"> </div>
       <slot></slot>

      </a-layout-content>
      <!-- <a-layout-footer style="text-align: center">
        Vue 3 Tempalte ©2021 Created by Sean
      </a-layout-footer> -->
      <page-footer></page-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import AdminHeader from "/@/layouts/header/PageHeader.vue";
import PageFooter from "./footer/PageFooter.vue";
import SideMenu from "/@/layouts/menu/SideMenu.vue";
import { mapState, mapMutations, mapGetters } from "vuex";

// const minHeight = window.innerHeight - 64 - 122

export default {
  name: "AdminLayout",
  components: {
    PageFooter,
    AdminHeader,
    SideMenu,
  },
  data() {
    PageFooter;
    return {
      minHeight: window.innerHeight - 64 - 122,
      collapsed: false,
      showSetting: false,
    };
  },
  provide() {
    return {
      adminLayout: this,
    };
  },
  watch: {

  },
  computed: {

    sideMenuWidth() {
      return this.collapsed ? "80px" : "256px";
    },
    headerStyle() {
      let width = `calc(100% - ${this.sideMenuWidth})`;
      let position = "fixed";
      return `width: ${width}; position: ${position};`;
    },

    sideMenuData() {
      const { layout, menuData, subMenu } = this;
      return layout === "mix" ? subMenu : menuData;
    },
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
    onMenuSelect() {
      this.toggleCollapse();
    },
  },
};
</script>

<style lang="less" scoped>
.admin-layout {
  .side-menu {
    &.fixed-side {
      position: fixed;
      height: 100vh;
      left: 0;
      top: 0;
    }
  }
  .virtual-side {
    transition: all 0.2s;
  }
  .virtual-header {
    transition: all 0.2s;
    opacity: 0;
    &.fixed-tabs.multi-page:not(.fixed-header) {
      height: 0;
    }
  }
  .admin-layout-main {
    .admin-header {
      top: 0;
      right: 0;
      overflow: hidden;
      transition: all 0.2s;
      &.fixed-tabs.multi-page:not(.fixed-header) {
        height: 0;
      }
    }
  }
  .admin-layout-content {
    padding: 24px 24px 0;
    /*overflow-x: hidden;*/
    /*min-height: calc(100vh - 64px - 122px);*/
  }
  .setting {
    background-color: @primary-color;
    color: black;
    border-radius: 5px 0 0 5px;
    line-height: 40px;
    font-size: 22px;
    width: 40px;
    height: 40px;
    box-shadow: -2px 0 8px @shadow-color;
  }
   
}
</style>
