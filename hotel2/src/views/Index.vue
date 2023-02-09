<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h2>酒店管理系统</h2>
        <div class="user-info">
          <el-space>
            <el-button type="primary" @click="handlenroll">注册</el-button>
            <el-button type="primary" @click="handlelogin">登录</el-button>
          </el-space>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#fff"
            background-color="#272727"
            class="el-menu-vertical-demo"
            text-color="#fff"
            router
          >
            <el-menu-item index="/">
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/home">
              <span>酒店介绍</span>
            </el-menu-item>
<!--             <el-menu-item index="/Bookingroom">
              <span>酒店介绍</span>
            </el-menu-item> -->
            <el-menu-item index="/info">
              <span>客房服务</span>
            </el-menu-item>
            <el-menu-item index="/Introduction">
              <span>个人信息</span>
            </el-menu-item>
            <el-menu-item index="/order">
              <span>我的订单</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in breadcrumb" :key="item">{{
              item
            }}</el-breadcrumb-item>
          </el-breadcrumb>
          <RouterView />

          <el-dialog v-model="dialogVisiblelogin" width="400px">
            <el-tabs
              v-model="activeName"
              class="demo-tabs"
              @tab-click="handleClick"
            >
              <el-tab-pane label="验证码登录" name="first">
                <el-form
                  :model="form1"
                  label-width="70px"
                  ref="ruleFormRef"
                  :rules="rules"
                  status-icon
                  ><!-- :model证明form是响应式数据 ，ref为原生dom-->
                  <el-form-item label="手机号" prop="user_phone">
                    <el-input
                      v-model="form1.user_phone"
                    /><!-- 名字与后端保持一致 -->
                  </el-form-item>
                  <!-- 使用el布局分栏  24格-->
                  <el-form-item label="验证码" prop="yzm">
                    <!-- prop校验 响应式数据，data-->
                    <el-row>
                      <el-col :span="16">
                        <el-input class="yzm" v-model="form1.yzm" />
                      </el-col>
                      <el-col :span="8">
                        <el-button @click="sendYzm" :disabled="yzmDisabled">{{
                          yzmText
                        }}</el-button>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      type="primary"
                      @click="onSubmit($refs.ruleFormRef)" class="dl"
                      >登陆</el-button
                    >
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="密码登录" name="second">
                <el-form
                  :model="form2"
                  label-width="70px"
                  ref="ruleFormRef"
                  :rules="rules"
                  status-icon
                  ><!-- :model证明form是响应式数据 ，ref为原生dom-->

                  <el-form-item label="手机号" prop="user_phone">
                    <el-input
                      v-model="form2.user_phone"
                    /><!-- 名字与后端保持一致 -->
                  </el-form-item>
                  <el-form-item label="密码" prop="user_psw">
                    <el-input
                      v-model="form2.user_psw"
                    /><!-- 名字与后端保持一致 -->
                  </el-form-item>
                  <!-- 使用el布局分栏  24格-->
                  <el-form-item label="验证码" prop="yzm">
                    <!-- prop校验 响应式数据，data-->
                    <el-row>
                      <el-col :span="16">
                        <el-input class="yzm" v-model="form2.yzm" />
                      </el-col>
                      <el-col :span="8">
                        <el-button @click="sendYzm" :disabled="yzmDisabled">{{
                          yzmText
                        }}</el-button>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      type="primary"
                      @click="onSubmit($refs.ruleFormRef)"
                      class="dl"
                      >登陆</el-button
                    >
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-dialog>

          <el-dialog
            v-model="dialogVisible"
            title="用户注册"
            width="500"
            @close="handleClose"
          >
            <el-form
              :model="form"
              label-width="0px"
              ref="ruleFormRef"
              :rules="rules"
              status-icon
            >
              <el-form-item prop="user_phone">
                <el-input
                  v-model="form.user_phone"
                  placeholder="请输入您的手机号"
                /><!-- 名字与后端保持一致 -->
              </el-form-item>
              <el-form-item prop="user_name">
                <el-input
                  v-model="form.user_name"
                  placeholder="请输入您的姓名"
                /><!-- 名字与后端保持一致 -->
              </el-form-item>
              <el-form-item prop="user_age">
                <el-input
                  v-model="form.user_age"
                  placeholder="请输入年龄"
                /><!-- 名字与后端保持一致 -->
              </el-form-item>
              <el-form-item prop="user_psw">
                <el-input
                  v-model="form.user_psw"
                  placeholder="请输入密码"
                /><!-- 名字与后端保持一致 -->
              </el-form-item>
              <el-form-item prop="user_psw2">
                <el-input
                  v-model="form.user_psw2"
                  placeholder="再一次输入密码验证"
                /><!-- 名字与后端保持一致 -->
              </el-form-item>

              <div class="mb-2 flex items-center text-sm">
                <el-radio-group v-model="radio1" class="ml-4">
                  <el-radio label="man" size="large">男</el-radio>
                  <el-radio label="woman" size="large">女</el-radio>
                </el-radio-group>
              </div>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button type="primary" @click="addusers($refs.ruleFormRef)">
                  注册
                </el-button>
              </span>
            </template>
          </el-dialog>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>




<script>
import { ElMessage } from "element-plus";
//import { ref } from 'vue'
export default {
  data() {
    return {
      activeIndex: "",
      dialogVisible: false,
      dialogVisiblelogin: false,
      yzmText: "获取验证码",
      //radio1 : ref('man'),
      /*  radio1:ref('1'), */
      form: {
        user_phone: "",
        user_name: "",
        user_age: "",
        user_psw: "",
        user_psw2: "",
      },
      form1: {
        user_phone: "",
      },
      form2: {
        user_phone: "",
        user_psw: "",
      },
      rules: {
        user_phone: [
          { required: true, message: "电话不能为空", trigger: "blur" },
          {
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        user_name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        user_age: [
          { required: true, message: "年龄不能为空", trigger: "blur" },
        ],
        user_psw: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
        user_psw2: [
          { required: true, message: "请再一次输入密码", trigger: "blur" },
        ],
      },
      yzmDisabled: false,
    };
  },
  created() {
    this.activeIndex = this.$route.path;
  },
  computed: {
    breadcrumb() {
      return this.$route.meta.breadcrumb || [];
    },
  },
  methods: {
    handlenroll() {
      this.dialogVisible = true;
    },
    handlelogin() {
      this.dialogVisiblelogin = true;
    },
    addusers(formEl) {
      if (!formEl) return;
      if (this.form.user_psw2 === this.form.user_psw) {
        formEl.validate((valid, fields) => {
          if (valid) {
            console.log("submit!");
            this.$store.dispatch("users/enroll", this.form).then((res) => {
              if (res.data.errcode === 0) {
                ElMessage.success("注册成功");
                this.shopList();
              }
            });
          } else {
            console.log("error submit!", fields);
          }
        });
      } else {
        ElMessage.error("两次密码输入不一致");
      }
    },
    onSubmit(formEl) {
      if (!formEl) return;
      formEl.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");

          this.$store.dispatch("users/login", this.form1).then((res) => {
            console.log(res.data);
            if (res.data.errcode === 0) {
              // 登录成功
              ElMessage.success("登录成功");
              this.$store.commit("users/updateToken", res.data.token);
              this.$router.push("/"); // 编程式路由跳转
            } else {
              // 登录失败
              ElMessage.error("登录错误");
            }
          });
        } else {
          console.log("error submit!", fields);
        }
      });
    },
    sendYzm() {
      if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.form1.user_phone)) {
        ElMessage.error("请输入正确手机号");
        return;
      }
      // 请求后端接口，拿到对应手机号的验证码
      this.$store
        .dispatch("users/yzm", { user_phone: this.form1.user_phone })
        .then((res) => {
          console.log(12323);
          let count = 10;
          console.log(res.data);
          this.yzmDisabled = true;
          this.yzmText = `剩余${count}秒`;
          let timer = setInterval(() => {
            count--;
            this.yzmText = `剩余${count}秒`;
            if (count === 0) {
              clearInterval(timer);
              this.yzmDisabled = false;
              this.yzmText = "再次发送验证码";
            }
          }, 1000);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header{
  background: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #132;
}
.user-info{
  display: flex;
  align-items: center;
}
.el-aside{
  height: calc(100vh - 60px);
}
.el-menu{
  height: 100%;
}
.zc{
    padding-left: 700px;
}
.el-menu{
    background: #999;
}
.el-main{
  background: #ccc0b0;
}
</style>