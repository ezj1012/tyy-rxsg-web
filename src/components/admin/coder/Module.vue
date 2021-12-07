<template>
  <el-container id="coderModule" v-loading="loading">
    <el-header class="coderModuleHeader" height="100px">
      <div class="coderModuleHeaderTitle">
        <span> {{ moduleCode }}</span>
        <span> {{ moduleName }}</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <el-row :gutter="0">
          <el-col :offset="2" :span="15">
            <el-input v-model="tableFilter" placeholder="搜索表" clearable></el-input>
          </el-col>
          <el-col :offset="1" :span="2">
            <el-popover>
              <p>这是一段内容这是一段内容确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false"
                  >取消</el-button
                >
                <el-button type="primary" size="mini" @click="visible = false"
                  >确定</el-button
                >
              </div>
              <el-button slot="reference" icon="el-icon-plus" circle></el-button>
            </el-popover>
          </el-col>
        </el-row>
      </el-aside>
      <el-main> 123 </el-main>
    </el-container>
    <!-- 新建表 -->
  </el-container>
</template>

<script>
import { getModuleInfoById } from "@/api/coder.js";
// import RxsgMain from "@/components/game/main";

export default {
  name: "Module",
  components: {},
  data() {
    return {
      //菜单是否折叠
      loading: false,
      id: null,
      moduleInfo: null,
      tableFilter: "",
      showAddTablePanel: false,
    };
  },
  computed: {
    moduleName() {
      return this.moduleInfo == null ? "" : this.moduleInfo.module.name;
    },
    moduleCode() {
      return this.moduleInfo == null ? "" : this.moduleInfo.module.code;
    },
  },
  async mounted() {
    this.id = this.$route.params.id;
    await this.initData();
    if (this.moduleInfo == null) {
      this.$router.push({
        name: "coder",
        params: {},
      });
    }
  },
  methods: {
    async initData() {
      this.loading = true;
      try {
        this.moduleInfo = await getModuleInfoById(this.id);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="less" scope>
#coderModule {
  width: 100%;
  height: 100%;
  .coderModuleHeader {
    .coderModuleHeaderTitle {
      height: 100%;
      span {
        &:first-child {
          width: 210px;
          padding-right: 20px;
          user-select: none;
          font-size: 95px;
          font-weight: 900;
          line-height: 90px;
          color: #9abcde;
          float: left;
        }
        &:last-child {
          user-select: none;
          height: 100%;
          line-height: 160px;
          float: left;
          font-weight: 600;
          margin-left: 10px;
          color: #123456;
        }
      }
    }
  }
}
</style>
