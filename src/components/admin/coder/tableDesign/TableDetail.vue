<template>
  <el-aside class="tableDetail" width="300px">
    <el-tabs v-model="detailActiveName" tabPosition="top" :stretch="true">
      <el-tab-pane style="height: 100%" label="表详情" name="tableDesign">
        <!-- 表数据修改 -->
        <div class="tableInfo">
          <div class="tableInfoTitle">基础数据</div>
          <div class="tableInfoMain">
            <el-form
              ref="tableInfo"
              style="text-align: left"
              :model="table.info"
              :rules="table.rules"
              size="mini"
              label-position="top"
            >
              <el-form-item label="类名" prop="code">
                <el-input v-model="table.info.code"></el-input>
              </el-form-item>
              <el-form-item label="类描述" prop="name">
                <el-input v-model="table.info.name"></el-input>
              </el-form-item>
              <el-form-item label="功能描述">
                <el-input type="textarea" v-model="table.info.remark" rows="4"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="列管理" name="colDesign">
        <div v-if="columnInfo">
          <div class="colDesign-title">
            <span>{{ designSelectItemType ? designSelectItemType.name : "" }}</span>
            <el-button-group class="colDesign-title-btns" size="mini">
              <!-- <el-button type="primary" size="mini" @click="moveItem">最左</el-button> -->
              <el-button type="primary" size="mini">保存模块</el-button>
            </el-button-group>
          </div>
          <el-form
            ref="form"
            style="text-align: left"
            :model="columnInfo"
            label-width="80px"
            size="mini"
            label-position="top"
          >
            <el-form-item label="名称: ">
              <el-input v-model="columnInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="编码: ">
              <el-input v-model="columnInfo.code"></el-input>
            </el-form-item>
            <el-form-item label="块大小: ">
              <el-radio-group v-model="columnInfo.span" style="width: 100%">
                <el-radio-button :label="3">1/4</el-radio-button>
                <el-radio-button :label="4">1/3</el-radio-button>
                <el-radio-button :label="6">1/2</el-radio-button>
                <el-radio-button :label="8">2/3</el-radio-button>
                <el-radio-button :label="9">3/4</el-radio-button>
                <el-radio-button :label="12">1</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-if="columnInfo.type == 1" label="数据长度: ">
              <el-radio-group v-model="columnInfo.colLenght" style="width: 100%">
                <el-radio-button :label="100">100</el-radio-button>
                <el-radio-button :label="200">200</el-radio-button>
                <el-radio-button :label="600">600</el-radio-button>
                <el-radio-button :label="2000">2000</el-radio-button>
                <el-radio-button :label="5000">5000</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-else label="最大长度: ">
              <el-input-number
                style="width: 100%"
                v-model="columnInfo.colLenght"
                controls-position="right"
                :min="0"
                :max="10000"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="功能描述">
              <el-input type="textarea" v-model="columnInfo.remark" rows="4"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-aside>
</template>

<script>
import { tableRules } from "./Table";
export default {
  name: "TableDetail",
  props: {
    tableInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
    columnInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {
      detailActiveName: "tableDesign",
      table: {
        info: {},
        rules: {},
      },
    };
  },
  computed: {},
  created() {
    this.table.rules = tableRules;
  },
  async mounted() {},
  watch: {
    tableInfo() {
      if (this.tableInfo) {
        this.table.info = this.tableInfo;
      }
    },
    columnInfo() {},
  },
  methods: {
    async initData() {},
  },
};
</script>
<style lang="less" scope>
.tableDetail {
  height: 100%;
  overflow: hidden;

  .tableInfo {
    height: 100%;
    width: calc(100% - 20px);
    margin: 0 10px;
    overflow: auto;

    .tableInfoTitle {
      padding: 10px;
      text-align: left;
      background-color: white;
      border-left: 10px solid #ebeef5;
    }
    .tableInfoMain {
      padding: 10px;
      width: calc(100% - 22px);
      border: 1px solid #ebeef5;
      border-radius: 0% 0% 2% 2%;
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
    }
  }
}
</style>
