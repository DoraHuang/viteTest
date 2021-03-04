<template>
  <div class="common-layout">
    <div class="content">
      <div class="top">
        <div class="header">
          <img alt="logo" class="logo" :src="logoImg" />
          <span class="title">u-Planning</span>
        </div>
        <!-- <div class="desc">Ant Design 是西湖区最具影响力的 Web 设计规范</div> -->
      </div>
      <div class="login">
        <a-form @submit="onSubmit">
          <a-tabs
            size="large"
            :tabBarStyle="{ textAlign: 'center' }"
            style="padding: 0 2px"
          >
            <a-tab-pane tab="登入" key="1">
              <a-alert
                type="error"
                :closable="true"
                v-show="error"
                :message="error"
                showIcon
                style="margin-bottom: 24px"
              />
              <a-form-item name="account">
                <a-input v-model:value="form.name" placeholder="Username">
                  <template #prefix
                    ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
                  /></template>
                </a-input>
                <a-input
                  v-model:value="form.password"
                  type="password"
                  placeholder="Password"
                >
                  <template #prefix
                    ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
                  /></template>
                </a-input>
              </a-form-item>

            
            </a-tab-pane>
          </a-tabs>
          <div>
            <a-checkbox :checked="true">記住我</a-checkbox>
            <a style="float: right">忘記密碼</a>
          </div>
          <a-form-item>
            <a-button
              :loading="logging"
              style="width: 100%; margin-top: 24px"
              size="large"
              htmlType="submit"
              type="primary"
              >登入</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { createRouter, createWebHistory } from "vue-router";
import logo from "/@/assets/plan.png";
export default defineComponent({
  name: "Login",
  components: { UserOutlined, LockOutlined },
  methods: {
    onSubmit(e, value) {
      console.log(this.selectedKeys);
      this.$router.push("/versionTable");
    },
  },

  data() {
    return {
      logoImg: ref(logo),
      logging: false,
      error: "",
      form: { name: "admin", password: "123456" },
    };
  },
});
</script>

<style lang="less" scoped>
.common-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background-color: @layout-body-background;
  background-image: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 110px;
  background-size: 100%;
  .content {
    padding: 32px 0;
    flex: 1;
    @media (min-width: 768px) {
      padding: 112px 0 24px;
    }
  }
  .top {
    text-align: center;
    .header {
      height: 44px;
      line-height: 44px;
      a {
        text-decoration: none;
      }
      .logo {
        height: 44px;
        vertical-align: top;
        margin-right: 16px;
      }
      .title {
        font-size: 33px;
        color: @title-color;
        font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica,
          sans-serif;
        font-weight: 600;
        position: relative;
        top: 2px;
      }
    }
    .desc {
      font-size: 14px;
      color: @text-color-second;
      margin-top: 12px;
      margin-bottom: 40px;
    }
  }

  .login {
    width: 368px;
    margin: 0 auto;
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-width: 320px) {
      .captcha-button {
        font-size: 14px;
      }
    }
    .ant-col {
      width: 100% !important ;
    }
    .ant-form-item-control-wrapper {
      width: 100% !important;
    }
    .icon {
      font-size: 24px;
      color: @text-color-second;
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: @primary-color;
      }
    }
  }
}
</style>
