<template>
  <el-tabs id="coderTable" v-loading="loading" v-model="activeName" tabPosition="right">
    <el-tab-pane style="height:100%;" label="表设计" name="design">
      <TableDesign :tableInfo="tableInfo" />
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
  </el-tabs>
</template>

<script>
import { getTableInfoById } from "@/api/coder.js";
// import RxsgMain from "@/components/game/main";
import TableDesign from "./TableDesign";

export default {
  name: "Table",
  props: {
    tableId: {},
  },
  components: { TableDesign },
  data() {
    return {
      loading: false,
      tableInfo: null,
      activeName: "design",
    };
  },
  async mounted() {
    await this.initData();
  },
  // async beforeUpdate() {
  // await this.initData();
  // },
  watch: {
    async tableId() {
      await this.initData();
    },
  },
  methods: {
    async initData() {
      console.log("init");
      this.loading = true;
      try {
        if (this.tableId == null) {
          this.tableInfo = null;
          return false;
        }
        this.tableInfo = await getTableInfoById(this.tableId);
        this.activeName = "design";
      } catch (error) {
        //
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="less" scope>
#coderTable {
  width: 100%;
  height: 100%;
  .el-tabs__content {
    height: 100%;
  }
}
</style>
