<template>
  <!-- <div id="admin"> -->
  <el-container id="admin">
    <el-aside
      width="208px"
      class="admin-menu"
    >
      <el-menu
        default-active="2"
        style="height:100%"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item index="/admin/coder">
          <i class="el-icon-menu"></i>
          <span slot="title">代码管理</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>配置管理</span>
          </template>
          <el-menu-item
            index="/admin/sysResource"
            route="/admin/sysResource"
          >系统资源</el-menu-item>
          <el-menu-item index="1-2">选项3</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="11">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="13">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="14">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="padding:0px">
      <router-view></router-view>
    </el-main>
  </el-container>
  <!-- </div> -->
</template>

<script>
// import RxsgMain from "@/components/game/main";

export default {
  name: "Admin",
  components: {},
  data() {
    return {
      //菜单是否折叠
      isCollapse: false,
    };
  },
};
</script>
<style lang="less" scope>
#admin {
  width: 100%;
  height: 100%;
  .admin-menu {
    max-width: 210px;
    height: 100%;
    text-align: left;
  }
}
</style>
