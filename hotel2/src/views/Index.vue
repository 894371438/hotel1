<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h2>酒店管理系统</h2>

        <div class="user2" v-if="show">
          <el-space>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <el-dropdown>
              <span class="el-dropdown-link">
                欢迎：{{ username }}
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleToLogout"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-space>
        </div>
        <div class="user-info" v-if="show1">
          <el-space>
            <el-button type="primary" @click="handlenroll">注册</el-button>
            <el-button type="primary" @click="handlelogin">登录</el-button>
          </el-space>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="skyblue"
            background-color="#272727"
            class="el-menu-vertical-demo"
            text-color="#fff"
            :default-active="activeIndex"
            router
          >
            <el-menu-item index="/"><span>首页</span> </el-menu-item>
            <el-menu-item index="/home"> <span>酒店介绍</span> </el-menu-item>
            <el-menu-item index="/info"><span>客房服务</span> </el-menu-item>

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
            <el-tabs class="demo-tabs">
              <el-tab-pane label="验证码登录" name="first">
                <el-form
                  :model="form1"
                  label-width="70px"
                  ref="ruleFormRef"
                  :rules="rules2"
                  status-icon
                  ><!-- :model证明form是响应式数据 ，ref为原生dom-->
                  <el-form-item label="手机号" prop="phone">
                    <el-input
                      v-model="form1.phone"
                    /><!-- 名字与后端保持一致 -->
                  </el-form-item>
                  <!-- 使用el布局分栏  24格-->
                  <el-form-item label="验证码" prop="code">
                    <!-- prop校验 响应式数据，data-->
                    <el-row>
                      <el-col :span="14">
                        <el-input class="yzm" v-model="form1.code" />
                      </el-col>
                      <el-col :span="10">
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
              <el-tab-pane label="密码登录" name="second">
                <el-form
                  :model="form2"
                  label-width="70px"
                  ref="ruleFormRef"
                  :rules="rulse3"
                  status-icon
                  ><!-- :model证明form是响应式数据 ，ref为原生dom-->
                  <el-form-item label="手机号" prop="userNmae">
                    <el-input
                      v-model="form2.userNmae"
                    /><!-- 名字与后端保持一致 -->
                  </el-form-item>
                  <el-form-item label="密码" prop="pwd">
                    <el-input v-model="form2.pwd" /><!-- 名字与后端保持一致 -->
                  </el-form-item>

                  <el-form-item>
                    <el-button
                      type="primary"
                      @click="onSubmitzh($refs.ruleFormRef)"
                      class="dl"
                      >登陆</el-button
                    >
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-dialog>

          <el-dialog v-model="dialogVisible" title="用户注册" width="500">
            <el-form
              :model="form"
              label-width="0px"
              ref="ruleFormRef"
              :rules="rules"
              status-icon
            >
              <el-form-item prop="userPhone">
                <el-input
                  v-model="form.userPhone"
                  placeholder="请输入您的手机号"
                /><!-- 名字与后端保持一致 -->
              </el-form-item>
              <el-form-item prop="userName">
                <el-input
                  v-model="form.userName"
                  placeholder="请输入您的姓名"
                /><!-- 名字与后端保持一致 -->
              </el-form-item>
              <el-form-item prop="userAge">
                <el-input
                  v-model="form.userAge"
                  placeholder="请输入年龄"
                /><!-- 名字与后端保持一致 -->
              </el-form-item>
              <el-form-item prop="userPsw">
                <el-input
                  v-model="form.userPsw"
                  placeholder="请输入密码"
                /><!-- 名字与后端保持一致 -->
              </el-form-item>
              <el-form-item prop="userPsw2">
                <el-input
                  v-model="form.userPsw2"
                  placeholder="再一次输入密码验证"
                /><!-- 名字与后端保持一致 -->
              </el-form-item>
              <div class="mb-2 flex items-center text-sm">
                <el-form :model="form">
                  <el-form-item >
                    <el-radio-group v-model="form.userSex">
                      <el-radio label="男" />
                      <el-radio label="女" />
                    </el-radio-group>
                  </el-form-item>
                </el-form>
                <!--  <el-radio-group v-model="radio1" class="ml-4" >
                  <el-radio label="man" size="large" value="男">男</el-radio>
                  <el-radio label="woman" size="large" value="女">女</el-radio>
                </el-radio-group> -->
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
import { ref } from "vue";
export default {
  data() {
    return {
      activeIndex: "",
      dialogVisible: false,
      dialogVisiblelogin: false,
      yzmText: "获取验证码",
      username: " ",
      show: false,
      show1: true,

      form: {
        userPhone: "",
        userName: "",
        userAge: "",
        userPsw: "",
        userPsw2: "",
        userSex: "男",
      },
      form1: {
        phone: "",
        code: "",
      },
      form2: {
        userNmae: "",
        pwd: "",
      },
      rules: {
        userPhone: [
          { required: true, message: "电话不能为空", trigger: "blur" },
          {
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        userName: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        userAge: [{ required: true, message: "年龄不能为空", trigger: "blur" }],
        userPsw: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        userPsw2: [
          { required: true, message: "请再一次输入密码", trigger: "blur" },
        ],
      },
      rules2: {
        phone: [
          { required: true, message: "电话不能为空", trigger: "blur" },
          {
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
      },
      rulse3: {
        userNmae: [
          { required: true, message: "电话不能为空", trigger: "blur" },
          {
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        pwd: [{ required: true, message: "密码不能为空", trigger: "blur" }],
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
      this.dialogVisible = false;
      this.dialogVisiblelogin = true;
      if (!formEl) return;
      if (this.form.userPsw2 === this.form.userPsw) {
        formEl.validate((valid, fields) => {
          if (valid) {
            console.log("submit!");
            this.$store.dispatch("users/enroll", this.form).then((res) => {
              if (res.data.success_code === 200) {
                ElMessage.success("注册成功");
                this.dialogVisible = false;

                this.dialogVisiblelogin = true;
              } else if (res.data.err_code1 === 0) {
                ElMessage.error("该手机已经注册");
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
          this.$store.dispatch("users/login", this.form1).then((res) => {
            console.log(res.data);
            if (res.data.err_code == 0 || res.data.success_code == 200) {
              // 登录成功
              ElMessage.success("登录成功");
              this.username = this.form1.phone;
              this.$store.commit("users/updateToken", res.data.token);
              // this.$router.push('/home')   // 编程式路由跳转
              this.dialogVisiblelogin = false;
              this.show = true;
              this.show1 = false;
            } else {
              // 登录失败
              ElMessage.error("登录错误");
            }
          });
        } else {
          this.$store.dispatch("users/login", this.form1).then((res) => {
            console.log(res.data);
            if (res.data.err_code == 0 || res.data.success_code == 200) {
              // 登录成功
              ElMessage.success("登录成功");
              this.username = this.form1.phone;
              this.$store.commit("users/updateToken", res.data.token);
              this.$router.push("/home"); // 编程式路由跳转
              this.dialogVisiblelogin = false;
              this.show = true;
              this.show1 = false;
            } else {
              // 登录失败
              ElMessage.error("登录错误");
            }
          });
        }
      });
    },
    sendYzm() {
      if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.form1.phone)) {
        ElMessage.error("请输入正确手机号");
        return;
      }
      // 请求后端接口，拿到对应手机号的验证码
      this.$store
        .dispatch("users/yzm", { phone: this.form1.phone })
        .then((res) => {
          let count = 10;
          ElMessage.success(res.data);
          // console.log(res.data)
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
    onSubmitzh(formEl) {
      if (!formEl) return;
      formEl.validate((valid, fields) => {
        if (valid) {
          this.$store.dispatch("users/loginpwd", this.form2).then((res) => {
            console.log(res.data);
            if (res.data.errcode === 0) {
              // 登录成功
              ElMessage.success("登录成功");
              this.username = this.form2.userNmae;
              this.$store.commit("users/updateToken", res.data.token);
              this.$router.push("/home"); // 编程式路由跳转
              this.dialogVisiblelogin = false;
              this.show = true;
              this.show1 = false;
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
    handleToLogout() {
      //清空状态管理中的token，持久化就会清空
      this.$store.commit("users/clearToken");
      this.show = false;
      this.show1 = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  background-color: #cdc1b0;
}

.el-header {
  background: #272727;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-header h2 {
  color: #c0c0c0;
}

.el-header .el-space span {
  color: #fff;
}

.user-info {
  display: flex;
  align-items: center;
}

.el-aside {
  height: calc(100vh - 60px);
}

.el-menu {
  height: 100%;
}

.el-menu-item:hover {
  background-color: #00caca;
}

.el-menu-item span {
  display: block;
  margin: auto;
}

.el-row {
  width: 100%;
}
.el-button {
  width: 100%;
  border: 0;
}
.yzm {
  width: calc(100% - 20px);
}
.el-space .el-button {
  background-color: black;
  margin: 0;
}
.dl {
  width: 70%;
}

/* .el-button {
  width: 100%;
 margin-right: 40px;
text-align: center;
  border: 0;
}


.el-input {
  width:80%;
  margin: 10px 25px;
}

.el-space .el-button{
  background-color: black;
  margin: 0;
}
.yzm {
    width: calc(100% - 10px);
}

.el-form{
  width: 500px;
}
.el-row{
  width: 100%;
}

.el-row input{
  width: 100%;
}
.el-radio{
  margin-left: 30px;
}
.dialog-footer button{
  margin-top: -50px;
}

 */
</style>