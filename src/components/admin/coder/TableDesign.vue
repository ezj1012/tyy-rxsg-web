<template>
  <el-container id="coderTableDesign">
    <el-aside class="controls" width="250px">
      <div v-if="showControlsTemp" class="controlGroup">
        <span>常用控件</span>
        <div class="controlItems">
          <div
            v-for="(item, idx) in controls.templates"
            :key="idx"
            class="controlItem"
            draggable="true"
            @dragstart="tryDrag($event, item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="controlGroup">
        <span>默认控件</span>
        <div class="controlItems">
          <div
            v-for="(item, idx) in controls.controls"
            :key="idx"
            class="controlItem"
            draggable="true"
            @dragstart="tryDrag($event, item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </el-aside>
    <el-main style="padding: 0px">
      <el-row>
        表单设计
      </el-row>
      <el-row class="design-row" style="" v-for="(rowItem, idx) in designList" :key="idx">
        <template v-for="(item, idx2) in rowItem">
          <el-col :key="idx2" class="design-item" :span="item.span * 6">
            <div
              @dragover="tryDragover($event, item)"
              @drop="tryDrop($event, item)"
            ></div>
          </el-col>
        </template>
      </el-row>
    </el-main>
    <!-- 编辑详情页 -->
    <el-aside width="300px">
      <el-tabs v-loading="loading" v-model="activeName" tabPosition="top">
        <el-tab-pane style="height: 100%" label="表详情" name="design">
          <el-card :body-style="{ padding: '10px' }">
            <div slot="header">
              <span>表详情</span>
            </div>
            <el-form
              ref="tableInfo"
              :model="table.edit.info"
              :rules="table.edit.infoRules"
              size="mini"
              label-width="80px"
            >
              <el-form-item label="类名" prop="code">
                <el-input v-model="table.edit.info.code"></el-input>
              </el-form-item>
              <el-form-item label="类描述" prop="name">
                <el-input v-model="table.edit.info.name"></el-input>
              </el-form-item>
              <el-form-item label="功能描述">
                <el-input
                  type="textarea"
                  v-model="table.edit.info.remark"
                  rows="4"
                ></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      </el-tabs>
    </el-aside>
  </el-container>
</template>

<script>
import { queryControls } from "@/api/coder.js";

export default {
  name: "TableDesign",
  props: {
    tableInfo: {},
  },
  components: {},
  data() {
    return {
      controls: {},
      table: {
        edit: {
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
      },
      design: {
        list: [],
      },
      drag: {
        draging: false,
      },
    };
  },
  computed: {
    designList() {
      let columns = this.design.list;
      let result = [];
      let curRow = [];
      result.push(curRow);
      let curSpan = 0;
      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        col.scope = (result.length - 1) * 4 + curSpan;
        curRow.push(col);
        if (curSpan + col.span == 4) {
          curRow = [];
          result.push(curRow);
          curSpan = 0;
        } else if (curSpan + col.span > 4) {
          // 填充当前行
          while (curSpan < 4) {
            curRow.push({
              span: 1,
              empty: true,
              scope: (result.length - 1) * 4 + curSpan,
            });
            curSpan++;
          }
          curRow = [];
          result.push(curRow);
          col.scope = (result.length - 1) * 4 + curSpan;
          curSpan = col.span;
        } else {
          curSpan += col.span;
        }
        if (col.afterNewLine && curSpan != 0) {
          while (curSpan < 4) {
            curRow.push({
              span: 1,
              empty: true,
              scope: (result.length - 1) * 4 + curSpan,
            });
            curSpan++;
          }
          curRow = [];
          result.push(curRow);
          curSpan = 0;
        }
      }

      while (curSpan < 4) {
        curRow.push({
          span: 1,
          empty: true,
          scope: (result.length - 1) * 4 + curSpan,
        });
        curSpan++;
      }
      curSpan = 0;

      let trow = result.length > 6 ? 6 : result.length;
      for (let i = trow; i < 10; i++) {
        curRow = [];
        result.push(curRow);
        while (curSpan < 4) {
          curRow.push({
            span: 1,
            empty: true,
            scope: (result.length - 1) * 4 + curSpan,
          });
          curSpan++;
        }
        curSpan = 0;
      }
      return result;
    },
    showControlsTemp() {
      return this.controls.templates != null && this.controls.templates.length > 0;
    },
  },
  async mounted() {
    this.controls = await queryControls();
    if (this.tableInfo) {
      this.table.edit.info = { ...this.tableInfo.table };
    }
  },
  // async beforeUpdate() {
  // await this.initData();
  // },
  watch: {
    tableInfo() {
      if (this.tableInfo) {
        this.table.edit.info = { ...this.tableInfo.table };
        let columns = this.tableInfo.columns;
        this.design.list = [];
        for (let i = 0; i < columns.length; i++) {
          if (columns[i]["editable"] != 0) {
            this.design.list.push(columns[i]);
          }
        }

        // let row = 0;
        // let curSpan = 0;
        // for (let i = 0; i < columns.length; i++) {
        //   const col = columns[i];
        //   col.scope = row * 4 + curSpan;
        //   this.design.list.push(col);
        //   if (curSpan + col.span == 4) {
        //     row++;
        //     curSpan = 0;
        //   } else if (curSpan + col.span > 4) {
        //     // 填充当前行
        //     while (curSpan < 4) {
        //       this.design.list.push({
        //         span: 1,
        //         empty: true,
        //         scope: row * 4 + curSpan,
        //       });
        //       curSpan++;
        //     }
        //     row++;
        //     col.scope = row * 4 + curSpan;
        //     curSpan = col.span;
        //   } else {
        //     curSpan += col.span;
        //   }
        //   if (col.afterNewLine && curSpan != 0) {
        //     while (curSpan < 4) {
        //       this.design.list.push({
        //         span: 1,
        //         empty: true,
        //         scope: row * 4 + curSpan,
        //       });
        //       curSpan++;
        //       curSpan = 0;
        //     }
        //     row++;
        //   }
        // }
        // let trow = row > 6 ? 6 : row;
        // for (let i = trow; i < 7; i++) {
        //   while (curSpan < 4) {
        //     this.design.list.push({
        //       span: 1,
        //       empty: true,
        //       scope: row * 4 + curSpan,
        //     });
        //     curSpan++;
        //   }
        //   curSpan = 0;
        //   row++;
        // }
        // console.log("row:" + row);
      }
    },
  },
  methods: {
    async initData() {},
    tryDrag(ev, id) {
      console.log("tryDrag", ev, id);
      this.drag.draging = true;
      ev.dataTransfer.setData("controlId", id);
      console.log(ev.dataTransfer);
    },
    tryDragend() {
      console.log("tryDragend");
      this.drag.draging = false;
    },
    tryDragover(ev, item) {
      // console.log(item);
      if (item.empty) {
        ev.preventDefault();
      }
    },
    tryDrop(ev, item) {
      if (!item.empty) {
        return;
      }
      let t = ev.dataTransfer.getData("controlId");
      console.log("控件ID", t, item);
      let newItem = { span: 2 };
      let added = false;
      for (let i = 0; i < this.design.list.length; i++) {
        const e = this.design.list[i];
        if (e.scope >= item.scope) {
          this.design.list.splice(i, 0, newItem);
          added = true;
          break;
        }
      }
      if (!added) {
        this.design.list.push(newItem);
      }
    },
    getDesignInfo() {},
  },
};
</script>
<style lang="less" scope>
#coderTableDesign {
  width: 100%;
  height: 100%;
  position: relative;
  .controls {
    height: 100%;
    background-color: #f7f7f7;
    .controlGroup {
      margin-top: 2px;
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
      border: 1px solid #ebeef5;
      padding: 2px;
      span {
        &:first-child {
          display: block;
          padding: 10px;
        }
      }
      .controlItems {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;

        .controlItem {
          width: 100px;
          margin: 5px;
          font-size: 12px;
          border-radius: 3px;
          padding: 9px 0px;
          transition: 0.1s;
          font-weight: 500;
          display: inline-block;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          background: #fff;
          border: 1px solid #dcdfe6;
          color: #606266;
          text-align: center;
          box-sizing: border-box;
          outline: 0;
          &:hover {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }
          &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: 0;
          }
        }
      }
    }
  }
  .design-row {
    margin: 5px 0;
    height: 80px;
    &:hover {
      // background-color: #c6e2ff;
    }
    .design-item {
      height: 100%;
      padding: 0 2.5px;
      div:first-child {
        width: 100%;
        height: 100%;
        background-color: #c6e2ff;
      }
    }
  }
}
</style>
