<template>
  <div id="coder" v-loading="loading">
    <el-card
      class="moduleItem"
      v-for="(item, idx) in modules"
      :key="idx"
      :body-style="{ padding: '0px', height: '100%' }"
    >
      <section style="height: 100%" @dblclick="goInfo(item)">
        <header class="moduleItemHeader">
          <span>{{ item.module.code }}</span>
        </header>
        <main class="moduleItemMain">
          <span>{{ item.module.name }}</span>
          <span>{{ item.module.remark }}</span>
        </main>
      </section>
    </el-card>
    <el-card class="moduleItem" :body-style="{ padding: '0px', height: '100%' }">
      <section
        style="height: 100%"
        @click="
          () => {
            addModuleVisible = true;
            info = {};
          }
        "
      >
        <header class="moduleItemHeader">
          <span>新增模块</span>
        </header>
        <main>
          <i class="el-icon-folder-add add-size"> </i>
        </main>
      </section>
    </el-card>
    <el-dialog title="新增模块" :visible.sync="addModuleVisible" width="300px">
      <el-form
        ref="info"
        :model="info"
        :rules="infoRules"
        label-position="top"
        size="mini"
      >
        <el-form-item label="模块编码" prop="code">
          <el-input v-model="info.code"></el-input>
        </el-form-item>
        <el-form-item label="模块名称" prop="name">
          <el-input v-model="info.name"></el-input>
        </el-form-item>
        <el-form-item label="模块描述">
          <el-input type="textarea" v-model="info.remark" rows="4"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button
          type="primary"
          :loading="addModuleIng"
          style="width: 100%"
          @click="newModule"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getModules, addModule } from "@/api/coder.js";
// import RxsgMain from "@/components/game/main";

export default {
  name: "Admin",
  components: {},
  data() {
    return {
      //菜单是否折叠
      loading: false,
      modules: [],
      addModuleVisible: false,
      addModuleIng: false,
      info: {
        name: "",
        code: "",
        remark: "",
      },
      infoRules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        code: [
          { required: true, message: "请输入编码", trigger: "blur" },
          { min: 2, max: 3, message: "长度在 2 到 3 个字符", trigger: "blur" },
        ],
      },
    };
  },
  async mounted() {
    await this.initData();
  },
  methods: {
    async initData() {
      this.loading = true;
      try {
        this.modules = await getModules();
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async newModule() {
      this.$refs["info"].validate(async (valid) => {
        if (valid) {
          this.addModuleIng = true;
          try {
            let params = {
              name: this.info.name,
              code: this.info.code,
              remark: this.info.remark,
            };
            await addModule(params);
            this.addModuleVisible = false;
            this.info = {
              name: "",
              code: "",
              remark: "",
            };
          } catch (err) {
            console.log(err);
          } finally {
            this.addModuleIng = false;
          }
          await this.initData();
        } else {
          return false;
        }
      });
    },
    goInfo(item) {
      this.$router.push({
        name: "moduleInfo",
        params: {
          id: item.module.id,
        },
      });
    },
  },
};
</script>
<style lang="less" scope>
#coder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .moduleItem {
    width: 180px;
    height: 200px;
    margin: 10px;
    user-select: none;
    .add-size {
      font-size: 130px;
      color: #56789a;
      &:hover {
        color: #12789a;
      }
    }
    .add-text {
      font-weight: 600;
      color: #56789a;
      &:hover {
        color: #12789a;
      }
    }
    .moduleItemHeader {
      border-bottom: 1px solid #456789;
      width: 100%;
      display: block;
      padding-top: 5px;
      text-align: center;
      font-weight: 900;
      font-size: 30px;
      color: #56789a;
    }
    .moduleItemMain {
      span:first-child {
        font-size: 12px;
        color: #7cbdec;
        display: block;
        width: 100%;
        text-align: left;
        padding: 2px 0 2px 15px;
      }
      span:last-child {
        font-size: 15px;
        padding: 5px 10px;
        overflow: hidden;
        text-align: left;
        display: block;
        color: #56789a;
      }
    }
  }
}
</style>
