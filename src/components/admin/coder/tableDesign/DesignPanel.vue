<template>
  <div class="designPanelMain">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      label-position="top"
      size="small"
      style="padding: 10px 15px"
    >
      <el-row class="design-row" style="" v-for="(rowItem, idx) in designList" :key="idx">
        <template v-for="(item, idx2) in rowItem.items">
          <el-col :key="idx2" class="design-item" :span="item.span * 2">
            <!-- 列控制器 -->
            <div
              class="design-item-control"
              v-if="!item.empty"
              v-show="item.hover"
              @mouseover.stop="colMouseover(item)"
              @mouseout.stop="colMouseout(item)"
            >
              <i
                class="el-icon-delete design-item-control-btn"
                @click="deleteItem(item)"
              ></i>
            </div>
            <!-- 内容显示 -->
            <div
              class="design-item-main"
              :class="{
                'design-item-main-select':
                  design.select && design.select.orderNum == item.orderNum,
              }"
              @dragover="tryDragover($event, item)"
              @drop="tryDrop($event, item)"
              @mouseover.stop="colMouseover(item)"
              @mouseout.stop="colMouseout(item)"
              @click="colSelect(item)"
            >
              <template v-if="item.type == 1">
                <el-form-item :label="item.name">
                  <el-input v-model="item.value"></el-input>
                </el-form-item>
              </template>
              <template v-else-if="item.type == 2">
                <el-form-item :label="item.name">
                  <el-input-number
                    style="width: 100%"
                    v-model="item.value"
                    controls-position="right"
                  ></el-input-number>
                </el-form-item>
              </template>
              <template v-else>
                <div :class="{ 'design-item-do-drop': drag.draging }">
                  {{ JSON.stringify(item) }}
                </div>
              </template>
            </div>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "DesignPanel",
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
    return {
      designList: [],
      form: {},
    };
  },
  computed: {},
  async mounted() {},
  watch: {},
  methods: {},
};
</script>
<style lang="less" scope>
.designPanelMain {
  width: 100%;
  height: calc(100% - 38px);
}
</style>
