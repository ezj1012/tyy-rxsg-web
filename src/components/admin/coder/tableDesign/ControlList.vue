<template>
  <el-aside class="controls" width="250px">
    <div class="controlTitle">控件组</div>
    <div class="controlMain">
      <div
        v-if="controls.templates && controls.templates.length > 0"
        class="controlGroup"
      >
        <div class="controlGroupTitle">常用控件</div>
        <div class="controlItems">
          <div
            v-for="(item, idx) in controls.templates"
            :key="idx"
            class="controlItem"
            draggable="true"
            @dragstart="tryDrag($event, item)"
            @dragend="tryDragend()"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div v-if="controls.controls && controls.controls.length > 0" class="controlGroup">
        <div class="controlGroupTitle">默认控件</div>
        <div class="controlItems">
          <div
            v-for="(item, idx) in controls.controls"
            :key="idx"
            class="controlItem"
            draggable="true"
            @dragstart="tryDrag($event, item)"
            @dragend="tryDragend()"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </el-aside>
</template>

<script>
export default {
  name: "ControlList",
  props: {
    controls: {
      type: Object,
      default: () => {
        return {
          controls: [],
          templates: [],
        };
      },
    },
    tryDrag: {
      type: Function,
      default: () => {},
    },
    tryDragend: {
      type: Function,
      default: () => {},
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  async mounted() {},
  watch: {},
  methods: {
    async initData() {},
  },
};
</script>
<style lang="less" scope>
.controls {
  height: 100%;
  overflow: hidden;
  .controlTitle {
    height: 38px;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    line-height: 35px;
    padding-left: 15px;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 1px 0px;
  }
  .controlMain {
    width: 100%;
    height: calc(100% - 48px);
    margin-top: 10px;
    overflow: auto;

    .controlGroup {
      width: calc(100% - 20px);
      margin-left: 10px;
      margin-bottom: 20px;
      .controlGroupTitle {
        padding: 10px;
        text-align: left;
        background-color: white;
        border-left: 10px solid #ebeef5;
      }
      .controlItems {
        padding: 5px 0;
        width: calc(100% - 2px);
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        border: 1px solid #ebeef5;
        border-radius: 0% 0% 2% 2%;
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
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
}
</style>
