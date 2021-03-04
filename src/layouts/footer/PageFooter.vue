<template>
  <div class="footer">
    <div class="copyright">
      ©2021 Created by Youthought
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  props: ["copyright", "linkList"],
};
</script>

<style lang="less" scoped>
.footer {
  padding: 48px 16px 24px;
  /*margin: 48px 0 24px;*/
  text-align: center;
  .copyright {
    color: primary-color;
    font-size: 14px;
    i {
      margin: 0 4px;
    }
  }
  .links {
    margin-bottom: 8px;
    a:not(:last-child) {
      margin-right: 40px;
    }
    a {
      color: primary-color;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }
  }
}
</style>
