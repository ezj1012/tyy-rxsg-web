<template>
  <el-container id="coderModule" v-loading="loading">
    <el-header class="coderModuleHeader" height="100px">
      <div class="coderModuleHeaderTitle">
        <span> {{ moduleCode }}</span>
        <span> {{ moduleName }}</span>
      </div>
    </el-header>
    <el-container style="height: calc(100% - 100px)">
      <el-aside
        :width="showTableList"
        style="height: 100%; position: relative; overflow: unset"
      >
        <el-row v-show="showTableList != '0'" :gutter="0">
          <el-col :offset="2" :span="15">
            <el-input v-model="table.filter" placeholder="搜索表" clearable></el-input>
          </el-col>
          <el-col :offset="1" :span="2">
            <el-popover v-model="table.add.show">
              <el-form
                ref="tableInfo"
                :model="table.add.info"
                :rules="table.add.infoRules"
                label-position="top"
                size="mini"
              >
                <el-form-item label="类名" prop="code">
                  <el-input v-model="table.add.info.code"></el-input>
                </el-form-item>
                <el-form-item label="类描述" prop="name">
                  <el-input v-model="table.add.info.name"></el-input>
                </el-form-item>
                <el-form-item label="功能描述">
                  <el-input
                    type="textarea"
                    v-model="table.add.info.remark"
                    rows="4"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div style="text-align: right; margin: 0">
                <el-button
                  size="mini"
                  type="text"
                  @click="
                    () => {
                      table.add.show = false;
                      table.add.info = {
                        code: code + '',
                      };
                    }
                  "
                  >取消</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  :loading="table.add.saving"
                  @click="doAddTable"
                  >确定</el-button
                >
              </div>
              <el-button
                slot="reference"
                icon="el-icon-plus"
                :loading="table.add.saving"
                circle
              ></el-button>
            </el-popover>
          </el-col>
        </el-row>
        <!-- table list-->
        <el-row :gutter="0" style="" class="table-list">
          <ul
            v-infinite-scroll="queryTables"
            :infinite-scroll-disabled="table.finished"
            :infinite-scroll-immediate="true"
            style=""
          >
            <li
              v-for="(item, key) in table.list"
              :key="key"
              :class="{ 'table-list-item-selected': item.id == table.selectTable }"
              class="table-list-item"
              @dblclick="doSelectTable(item.id)"
            >
              <span> {{ item.name }} </span>
              <span> {{ item.code }} </span>
            </li>
          </ul>
        </el-row>
        <!-- 显示或隐藏菜单 -->
        <i
          class="table-list-show"
          :class="{
            'el-icon-d-arrow-left': showTableList != '0',
            'el-icon-d-arrow-right': showTableList == '0',
          }"
          @click="
            () => {
              showTableList = showTableList == '0' ? '250px' : '0';
            }
          "
        ></i>
      </el-aside>
      <el-main style="padding: 0px; height: 100%">
        <Table :tableId="table.selectTable"></Table>
      </el-main>
    </el-container>
    <!-- 新建表 -->
  </el-container>
</template>

<script>
import { getModuleInfoById, addTable, queryTables } from "@/api/coder.js";
// import RxsgMain from "@/components/game/main";
import Table from "./Table";
export default {
  name: "Module",
  components: { Table },
  data() {
    return {
      //菜单是否折叠
      loading: false,
      id: null,
      code: null,
      moduleInfo: null,
      showTableList: "250px",
      table: {
        loading: false,
        finished: false,
        filter: "",
        list: [],
        cdt: {
          pageNum: 1,
        },
        add: {
          saving: false,
          show: false,
          info: {
            code: "",
          },
          infoRules: {
            name: [
              { required: true, message: "请输入类描述", trigger: "blur" },
              {
                min: 2,
                max: 10,
                message: "长度在 2 到 10 个字符",
                trigger: "blur",
              },
            ],
            code: [
              { required: true, message: "请输入类名", trigger: "blur" },
              {
                min: 2,
                max: 20,
                message: "长度在 2 到 20 个字符",
                trigger: "blur",
              },
            ],
          },
        },
        selectTable: null,
      },
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
        if (this.moduleInfo) {
          let t = this.moduleInfo.module.code;
          t = t.substring(0, 1).toUpperCase() + t.substring(1, t.length).toLowerCase();
          this.code = t;
          this.table.add.info["code"] = t;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async doAddTable() {
      if (this.table.add.info.code.length <= this.code.length) {
        this.$message({
          showClose: true,
          message: "表名错误!",
          type: "warning",
        });
        return false;
      }
      this.$refs["tableInfo"].validate(async (valid) => {
        if (valid) {
          this.table.add.saving = true;
          try {
            let params = {
              name: this.table.add.info.name,
              code: this.table.add.info.code,
              remark: this.table.add.info.remark,
              moduleId: this.id,
            };
            await addTable(params);
            this.table.add.show = false;
            this.$message({
              showClose: true,
              message: "新增成功!",
              type: "success",
            });
            this.table.add.info = {
              name: "",
              code: this.code + "",
              remark: "",
            };
            await this.queryTables(1);
          } catch (err) {
            console.log("保存失败!", err);
          } finally {
            this.table.add.saving = false;
          }
        } else {
          return false;
        }
      });
    },
    async queryTables(pageNum) {
      this.table.loading = true;
      try {
        if (pageNum == null) {
          pageNum = this.table.cdt.pageNum++;
          if (this.table.cdt.totalPages != null && pageNum > this.table.cdt.totalPages) {
            this.table.finished = true;
            return;
          }
        } else {
          this.table.cdt.pageNum = pageNum;
        }
        if (pageNum == 1) {
          this.table.finished = false;
          this.table.list = [];
        }
        let cdt = {
          pageNum: pageNum,
          pageSize: 20,
          cdt: {
            moduleId: this.id,
            like: this.table.filter,
          },
        };
        let data = await queryTables(cdt);
        for (let i = 0; i < data.data.length; i++) {
          if (this.table.selectTable == null) {
            this.doSelectTable(data.data[i].id);
          }
          this.table.list.push(data.data[i]);
        }
        this.table.cdt.totalPages = data.totalPages;
        if (pageNum >= data.totalPages) {
          this.table.finished = true;
        } else {
          this.table.finished = false;
        }
      } catch (error) {
        //
      } finally {
        this.table.loading = false;
      }
    },
    doSelectTable(tableId) {
      this.table.selectTable = tableId;
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
  .table-list {
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 10px;
    height: calc(100% - 50px);
    background-color: #fefefe;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .table-list-item-selected {
      span {
        &:last-child {
          background-color: #ffffff;
          color: #000;
        }
      }
    }
    .table-list-item {
      width: calc(100% - 20px);
      padding-left: 10px;
      height: 70px;
      user-select: none;
      background-color: #fafafa;
      color: #123456;
      span {
        &:first-child {
          display: block;
          font-size: 16px;
          padding: 2px 10px;
          background-color: #f0f0f0;
          overflow: hidden;
        }
        &:last-child {
          display: block;
          font-size: 22px;
          padding: 10px;
          overflow: hidden;
          &:hover {
            background-color: #ffffff;
            color: #000;
          }
        }
      }
    }
  }
  .table-list-show {
    position: absolute;
    right: -30px;
    top: 0px;
    z-index: 100;
    font-size: 40px;
    color: #9abcde;

    &:hover {
      font-size: 38px;
      color: #aaa;
    }
  }
}
</style>
