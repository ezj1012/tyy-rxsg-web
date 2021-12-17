<template>
  <el-container id="coderTableDesign">
    <ControlList :controls="controls" :tryDrag="tryDrag" :tryDragend="tryDragend" />
    <el-main class="designPanel" style="padding: 0px">
      <div class="title">
        <span>表单设计</span>
        <el-button
          size="mini"
          style="float: right; margin-right: 20px; margin-top: 2px"
          type="primary"
          :loading="design.saving"
          @click="saveDesign"
          >保存设计</el-button
        >
      </div>
      <DesignPanel  />
    </el-main>
    <!-- 编辑详情页 -->
    <TableDetail :tableInfo="table.edit.info" />
  </el-container>
</template>

<script>
import { queryControls, updateTableInfo } from "@/api/coder.js";
import ControlList from "./ControlList";
import TableDetail from "./TableDetail";
import DesignPanel from "./DesignPanel";
export default {
  name: "TableDesign",
  props: {
    tableInfo: {},
  },
  components: { ControlList, TableDetail, DesignPanel },
  data() {
    return {
      controls: {
        idMap: {},
      },
      form: {},
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
        idxMap: {},
        select: null,
        saving: false,
      },
      drag: {
        draging: false,
      },
      detailActiveName: "tableDesign",
      selectedControls: null,
    };
  },
  computed: {
    designList() {
      let columns = this.design.list;
      let result = [];
      // result.push(curRow);
      let idxMap = {};
      let maxY = 0;
      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        col.y = Math.floor(col.orderNum / 12);
        col.x = col.orderNum - col.y * 12;
        idxMap[col.orderNum] = col;
        maxY = maxY < col.y ? col.y : maxY;
      }
      if (columns.length == 0) {
        let colRow = { size: 12, items: [] };
        for (let i = 0; i < 12; i++) {
          colRow.items.push(this.createEmptyCol(i, 0));
        }
        result.push(colRow);
      } else {
        for (let i = 0; i < maxY + 2; i++) {
          let colRow = { size: 12, items: [] };
          result.push(colRow);
          for (let j = 0; j < 12; j++) {
            let idx = i * 12 + j;
            let col = idxMap[idx];
            if (col == null) {
              colRow.items.push(this.createEmptyCol(j, i));
            } else {
              colRow.items.push(col);
              console.log("j", j, col.span);
              j = j + col.span - 1;
              console.log("j", j);
            }
          }
          // let tsize = 0;
          // for (let j = 0; j < colRow.items.length; j++) {
          //   tsize += colRow.items[j].span;
          // }
          // console.log(tsize);
        }
      }
      console.log(maxY, result);
      return result;
    },
    designSelectItemType() {
      if (this.design.select) {
        return this.controls.idMap[this.design.select.type];
      }
      return null;
    },

    showControlsTemp() {
      return this.controls.templates != null && this.controls.templates.length > 0;
    },
    controlDetails() {
      if (this.selectedControls == null) {
        return this.design.list;
      } else {
        return [this.selectedControls];
      }
    },
  },
  async mounted() {
    this.controls = await queryControls();
    this.controls.idMap = {};
    if (this.controls.controls) {
      for (let i = 0; i < this.controls.controls.length; i++) {
        const c = this.controls.controls[i];
        this.controls.idMap[c.id] = c;
      }
    }
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
            columns[i].hover = false;
            this.design.list.push(columns[i]);
            this.design.idxMap[columns[i].orderNum] = columns[i];
          }
        }
      }
    },
  },
  methods: {
    async initData() {},
    tryDrag(ev, item) {
      console.log("tryDrag", ev, JSON.stringify(item));
      this.drag.draging = true;
      ev.dataTransfer.setData("controlId", JSON.stringify(item));
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
    // 放下
    tryDrop(ev, item) {
      this.drag.draging = false;
      if (!item.empty) {
        return;
      }
      let dropItem = ev.dataTransfer.getData("controlId");
      console.log("控件ID", dropItem, item);
      let sItem = JSON.parse(dropItem);
      let newItem = this.createColByItem(item.x, item.y, sItem);
      let added = false;
      for (let i = 0; i < this.design.list.length; i++) {
        const e = this.design.list[i];
        if (e.orderNum >= item.orderNum) {
          this.design.list.splice(i, 0, newItem);
          added = true;
          break;
        }
      }
      if (!added) {
        this.design.list.push(newItem);
      }
      this.design.idxMap[newItem.orderNum] = newItem;
    },
    createEmptyCol(x, y) {
      return { y: y, x: x, orderNum: y * 12 + x, span: 1, empty: true };
    },
    createColByItem(x, y, item) {
      // 边框判断是否超出
      let span = this.getColCanUseSpan(x, y, item.span);

      let idx = x + y * 12;
      return {
        x: x,
        y: y,
        orderNum: idx,
        span: span,
        type: item.type,
        name: item.name,
        code: idx + item.name,
        colLenght: 10,
        hover: false,
      };
    },
    getColCanUseSpan(x, y, span) {
      let idx = x + y * 12;
      while (x + span > 12) {
        span--;
      }
      for (let i = 1; i < span; i++) {
        let col = this.design.idxMap[idx + i];
        if (col) {
          // return i;
          span = i;
          break;
        }
      }
      console.log("getColCanUseSpan", span);
      return span;
    },
    changeIndex(col) {
      console.log(col);
      let oldY = Math.floor(col.orderNum / 12);
      let oldX = col.orderNum - col.y * 12;
      console.log(oldY, oldX, col);
      let targetCol = this.idxMap[col.x + col.y * 12];

      if (targetCol) {
        col.x = oldX;
        col.y = oldY;
      } else {
        col.span = this.getColCanUseSpan(col.x, col.y, col.span);
      }
    },
    deleteItem(item) {
      let idx = item.orderNum;
      delete this.design.idxMap[idx];
      for (let i = 0; i < this.design.list.length; i++) {
        const e = this.design.list[i];
        if (e.orderNum == item.orderNum) {
          this.design.list.splice(i, 1);
          break;
        }
      }
      if (this.design.select && this.design.select.orderNum == idx) {
        this.design.select = null;
      }
    },
    moveItem() {
      let col = this.design.select;
      if (!col || col.x == 0) {
        return;
      }

      let span = 0;
      for (let i = col.x - 1; i >= 0; i--) {
        let idx = col.y * 12 + i;
        let tCol = this.design.idxMap[idx];
        if (tCol) {
          span = tCol.span + tCol.x;
          break;
        }
      }
      if (span == col.x) {
        return;
      }
      col.x = span;
      delete this.design.idxMap[col.orderNum];
      col.orderNum = col.y * 12 + col.x;
      this.design.idxMap[col.orderNum] = col;
    },
    getDesignInfo() {},
    async saveDesign() {
      this.design.saving = true;
      let info = {
        table: this.table.edit.info,
        columns: this.design.list,
      };
      try {
        await updateTableInfo(info);
      } catch (error) {
        //
      } finally {
        this.design.saving = false;
      }
    },
    colMouseover(item) {
      if (item.empty || item.hover) {
        return;
      }
      item.hover = true;
    },
    colMouseout(item) {
      if (item.empty) {
        return;
      }
      item.hover = false;
    },
    colSelect(item) {
      if (item.empty) {
        return;
      }
      this.design.select = item;
      this.detailActiveName = "colDesign";
    },
  },
};
</script>
<style lang="less" scope>
#coderTableDesign {
  width: 100%;
  height: 100%;
  position: relative;

  .design-row {
    margin: 5px 0;
    max-height: 107px;
    &:hover {
      // background-color: #c6e2ff;
    }
    .design-item {
      position: relative;
      height: 100%;
      padding: 0 2.5px;
      overflow: hidden;
      white-space: normal;
      word-break: break-all;
      text-align: left;

      .design-item-control {
        position: absolute;
        right: 10px;
        top: 5px;

        .design-item-control-btn {
          line-height: 24px;
          cursor: pointer;
          color: rgb(189, 189, 189);
          padding: 0px 4px;
          margin-right: 4px;
          background-color: rgb(255, 255, 255);
          box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px 2px;
          border-radius: 50%;
          &:hover {
            color: red;
          }
        }
      }

      .design-item-main {
        padding: 2.5px 2.5px;
        width: calc(100% - 5px);
        height: calc(100% - 5px);
        border-radius: 3%;
        box-shadow: rgb(100 100 100 / 10%) 0px 0px 4px 2px;
      }

      .design-item-main-select {
        background-color: #e3e3e3;
      }

      .design-item-do-drop {
        background-color: #c6e2ff;
      }
    }
  }

  .designPanel {
    padding: 0px;
    width: 100%;
    height: 100%;
    .title {
      height: 38px;
      text-align: left;
      font-size: 20px;
      font-weight: 800;
      line-height: 35px;
      padding-left: 15px;
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);

      .titleBtns {
        width: 200px;
        float: right;
        button {
          margin-bottom: 2px;
        }
      }
    }
  }
}
</style>
