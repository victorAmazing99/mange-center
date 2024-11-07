<template>
  <div class="login-main">
    <div class="main-icon">
      <div class="icon-title">
        <h1>管理中心</h1>
      </div>
    </div>
    <div class="main-icon right-icon">
      <div class="main-login" v-show="isLogin">
        <div class="login-title">登录</div>
        <div class="login-input">
          <el-form ref="loginRef" :model="loginForm" :rules="loginRules" class="login-form">
            <div class="input-icon">
              <el-form-item prop="username" class="itemLine">
                <el-input ref="userRefs" v-model="loginForm.username" type="text" placeholder="输入用户名" class="borderNone"
                  clearable auto-complete="off" @keyup.enter="enterFoucs(1)">
                </el-input>
              </el-form-item>
            </div>
            <div class="input-icon">
              <el-form-item prop="password" class="itemLine">
                <el-input ref="passRefs" v-model="loginForm.password" type="password" auto-complete="off" clearable
                  minlength="8" placeholder="输入密码" @keyup.enter="enterFoucs(2)">
                </el-input>
              </el-form-item>
            </div>
            <div class="input-icon last-input">
              <el-form-item prop="code" class="itemLine">
                <el-input ref="codeRefs" v-model="loginForm.code" size="large" auto-complete="off" placeholder="输入图形验证码"
                  style="width: 65%" @keyup.enter="handleLogin">
                </el-input>
                <div class="login-code">
                  <span style="display:flex;">
                    <div class="code-text" @click="getCode">换一张</div>
                    <img :src="codeUrl" class="login-code-img" @click="getCode" />
                  </span>
                </div>
              </el-form-item>
            </div>
            <div class="rePassword">
              <span></span>
              <div style="color:#00BC90;cursor: pointer;" @click="forgetPsw">忘记密码?</div>
            </div>
            <div class="submitIcon">
              <el-button :loading="loginLoading" style="background:#00bc90;color:#fff" class="subBtn" @click="handleLogin">登录</el-button>
            </div>
          </el-form>
        </div>
      </div>
      <div class="main-login" v-if="aswEdit">
        <div class="login-title">修改密码</div>
        <div class="login-input">
          <el-form ref="resetForm2" :model="resetForm" :rules="resetRules" class="login-form">
            <div class="input-icon" style="margin-bottom:65px">
              <el-form-item prop="password" class="itemLine">
                <el-input v-model="resetForm.password" type="password" clearable placeholder="请输入新密码">
                </el-input>
              </el-form-item>
              <span class="tip">*密码至少8位，且必须包括数字、字符和大小写英文字母</span>
            </div>
            <div class="input-icon">
              <el-form-item prop="newPassword" class="itemLine">
                <template #lable><span class="labelLittle">确认新密码：</span></template>
                <el-input v-model="resetForm.newPassword" type="password" clearable placeholder="请确认新密码">
                </el-input>
              </el-form-item>
            </div>

            <div class="submitIcon" style="margin-top:150px">
              <el-button v-if="isstus == '3'" type="primary"
                :disabled="resetForm.password && resetForm.newPassword ? false : true" class="subBtn"
                @click="savePsw">保存</el-button>
              <el-button v-else type="primary" :disabled="resetForm.password && resetForm.newPassword ? false : true"
                class="subBtn" @click="resetAnw">保存</el-button>
            </div>
          </el-form>
        </div>
      </div>
      <!-- 设置密保 -->
      <div class="main-login" v-show="isEdit">
        <div class="login-title">设置密保问题</div>
        <div class="login-input">
          <el-form ref="resetProblem2" :hide-required-asterisk="true" :model="resetProblem" class="login-form"
            :rules="anwRules">
            <div class="input-icon flex-input">
              <div class="input-left">
                <div class="inpu-quession">
                  <el-select v-model="resetProblem.questionId1" placeholder="请选择密保问题" style="width:100%;"
                    :suffix-icon="CaretTop">
                    <el-option v-for="item in problemData" :key="item.id" :label="item.question" :value="item.id"
                      :disabled="disabledChoose(item)" />
                  </el-select>
                </div>
              </div>
              <div class="input-right">
                <el-input v-model="resetProblem.answer1" placeholder="请输入答案" clearable type="text" maxlength="20">
                </el-input>
              </div>
            </div>
            <div class="input-icon flex-input">
              <div class="input-left">
                <div class="inpu-quession">
                  <el-select v-model="resetProblem.questionId2" placeholder="请选择密保问题" style="width:100%;"
                    :suffix-icon="CaretTop">
                    <el-option v-for="item in problemData" :key="item.id" :label="item.question" :value="item.id"
                      :disabled="disabledChoose(item)" />
                  </el-select>
                </div>
              </div>
              <div class="input-right">
                <el-input v-model="resetProblem.answer2" placeholder="请输入答案" clearable type="text" maxlength="20">
                </el-input>
              </div>
            </div>
            <div class="input-icon flex-input">
              <div class="input-left">
                <div class="inpu-quession">
                  <el-select v-model="resetProblem.questionId3" placeholder="请选择密保问题" style="width:100%;"
                    :suffix-icon="CaretTop">
                    <el-option v-for="item in problemData" :key="item.id" :label="item.question" :value="item.id"
                      :disabled="disabledChoose(item)" />
                  </el-select>
                </div>
              </div>
              <div class="input-right">
                <el-input v-model="resetProblem.answer3" placeholder="请输入答案" clearable type="text" maxlength="20">
                </el-input>
              </div>
            </div>

            <div class="submitIcon" style="margin-top:90px">
              <el-button type="primary"
                :disabled="resetProblem.answer1 || resetProblem.answer2 || resetProblem.answer3 ? false : true"
                class="subBtn" @click="resetPsw">下一步</el-button>
              <!-- <el-button type="primary" class="subBtn" @click="resetAnw">保存</el-button> -->
            </div>
          </el-form>
        </div>
      </div>
      <!-- 修改成功 -->
      <div class="main-login" v-show="successIcon">
        <div class="sucss-box">
          <el-icon>
            <CircleCheck />
          </el-icon>
          <div>恭喜，密码修改成功！</div>
          <div><span style="color:#00BC90">{{ count }}s </span> 后自动跳转到登录页面</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { CaretTop, Search, CircleCheck } from "@element-plus/icons-vue"
import { getCodeImg, updateStartPassword, findAll, saveUserProblem, updateExpiredPassword } from "@/api/login";
import Cookies from "js-cookie";
// import { encrypt, decrypt } from "@/utils/jsencrypt";
import useUserStore from '@/store/modules/user';

// import { sm3 } from 'sm-crypto'
import { useRouter } from 'vue-router'
const userStore = useUserStore();
const router = useRouter();
const { proxy } = getCurrentInstance();
const loginLoading = ref(false)
// 密码验证
const pwdCheck = async (rule, value, callback) => {
  // 大小写字母、数字、特殊字符至少8位
  const reg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,}$/
  if (!value || value.length < 8) {
    return callback(new Error('密码至少8位，且必须包括数字、字符和大小写英文字母'))
  } else if (resetForm.value.password == loginForm.value.password) {
    return callback(new Error('不能与原密码相同！'))
  } else if (!reg.test(value)) {
    return callback(new Error('密码至少8位，且必须包括数字、字符和大小写英文字母'))
  } else {
    callback()
  }
}
// 重复密码验证
const pwdAgainCheck = async (rule, value, callback) => {
  if (!value || value.length < 1) {
    return callback(new Error('新密码不能为空！'))
  } else if (resetForm.value.password != resetForm.value.newPassword) {
    return callback(new Error('两次输入密码不一致！'))
  } else {
    // changeAgainFlag = 1
    callback()
  }
}

// 密码长度校验
const passValid = async (rule, value, callback) => {
  if (!value || value.length < 1) {
    return callback(new Error('请输入您的密码'))
  } else if (value && value.length < 8) {
    loginForm.value.password = ''
    proxy.$refs.passRefs.focus()
    return callback(new Error('密码长度不够8位！'))
  } else {
    callback()
  }
}

const loginForm = ref({
  username: "",
  password: "",
  rememberMe: false,
  code: "",
  uuid: ""
});
const resetForm = ref({
  password: '',
  newPassword: ''
});

const resetProblem = ref({
  userId: '',
  answer1: '',
  answer2: '',
  answer3: '',
  questionId1: '',
  questionId2: '',
  questionId3: ''
});

const loginRules = {
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", validator: passValid }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }]
};
const resetRules = {
  password: [
    { required: true, trigger: 'blur', validator: pwdCheck }
  ],
  newPassword: [
    { required: true, trigger: 'blur', validator: pwdAgainCheck }
  ]
};

const anwRules = {
  answer1: [
    { required: true, trigger: 'blur', message: '内容不能为空' }
  ],
  answer2: [
    { required: true, trigger: 'blur', message: '内容不能为空' }
  ],
  answer3: [
    { required: true, trigger: 'blur', message: '内容不能为空' }
  ],
  questionId1: [
    { required: true, trigger: 'change', message: '内容不能为空' }
  ],
  questionId2: [
    { required: true, trigger: 'change', message: '内容不能为空' }
  ],
  questionId3: [
    { required: true, trigger: 'change', message: '内容不能为空' }
  ]
};

const disabledChoose = computed((item) => {
  return function (item) {
    let findItemIndex = [resetProblem.value.questionId1, resetProblem.value.questionId2, resetProblem.value.questionId3].findIndex(item2 => item2 == item.id);
    let newArr = [resetProblem.value.questionId1, resetProblem.value.questionId2, resetProblem.value.questionId3].splice(findItemIndex, 1);
    return newArr.includes(item.id);
  }
})

const codeUrl = ref("");
const loading = ref(false);
const isEdit = ref(false);
const aswEdit = ref(false);
const isLogin = ref(true);
const successIcon = ref(false);
const problemData = ref([]); // 密保问题
// 验证码开关
const captchaEnabled = ref(true);
// 注册开关
const register = ref(false);
const redirect = ref(undefined);
const timer = ref(null);
const count = ref('2');
const isstus = ref('1');

function thirdLogin() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramValue = urlParams.get('param');
  let params = JSON.parse(paramValue)
  if(params) {
    useUserStore().getThirdLogin(params).then((res) => {
      router.push({ path: '/SignManage/signAssess/detail', query: { idCard: params.idCard } }).catch(() => { })
    })
  }
}

function handleLogin () {
  if (loginForm.value.username == '') {
    return proxy.$refs.userRefs.focus()
  } else if (loginForm.value.password == '') {
    return proxy.$refs.passRefs.focus()
  }
  proxy.$refs.loginRef.validate(valid => {
    if (valid) {
      loading.value = true;
      loginLoading.value = true
      // 调用action的登录方法
      // sessionStorage.setItem('pass', sm3(loginForm.value.password))
      userStore.login(loginForm.value).then((res) => {
        isstus.value = userStore.existenceTime
        // router.push({ path: redirect.value || "/" });
        loginLoading.value = false
        if (isstus.value == '1') {
          // 第一次登录
          isEdit.value = true
          isLogin.value = false
          getProblemList()
        } else if (isstus.value == '3') {
          isEdit.value = true
          isLogin.value = false
          getProblemList()
        } else {
          router.push({ path: redirect.value || "/" })
          // router.push({ path: '/index' });
        }
        if (res.code != 200) {
          if (captchaEnabled.value) {
            getCode();
          }
        }
      }).catch(() => {
        loginLoading.value = false
        loading.value = false;
        loginForm.value.code = ''
        // 重新获取验证码
        if (captchaEnabled.value) {
           getCode();
        }
      });
    }
  });
}

function getCode () {
  getCodeImg().then(res => {
    captchaEnabled.value = res.captchaEnabled === undefined ? true : res.captchaEnabled;
    if (captchaEnabled.value) {
      codeUrl.value = "data:image/gif;base64," + res.img;
      loginForm.value.uuid = res.uuid;
    }
  });
}

function enterFoucs (type) {
  if (type == 1) {
    if (loginForm.value.password == '') {
      proxy.$refs.passRefs.focus()
    } else if (loginForm.value.code == '') {
      proxy.$refs.codeRefs.focus()
    } else {
      handleLogin()
    }
  } else {
    if (loginForm.value.username == '') {
      proxy.$refs.userRefs.focus()
    } else if (loginForm.value.code == '') {
      proxy.$refs.codeRefs.focus()
    } else {
      handleLogin()
    }
  }
}

function resetPsw () {
  if (resetProblem.value.questionId1 == '' || resetProblem.value.questionId2 == '' || resetProblem.value.questionId3 == '') {
    proxy.$message({
      message: '请选择密保问题',
      type: 'warning'
    })
    return
  }
  if (resetProblem.value.answer1 == '' || resetProblem.value.answer2 == '' || resetProblem.value.answer3 == '') {
    proxy.$message({
      message: '请输入问题答案',
      type: 'warning'
    })
    return
  }
  proxy.$refs.resetProblem2.validate(valid => {
    if (valid) {
      aswEdit.value = true
      isEdit.value = false

    }
  })
}

// 修改过期密码
function savePsw () {
  proxy.$refs.resetForm2.validate(valid => {
    if (valid) {
      updateExpiredPassword(resetForm.value, userStore.token_show).then(res => {
        if (res.code === 200) {
          isEdit.value = false
          successIcon.value = true
          aswEdit.value = false
          sendCode()
          getCode()
        }
      })
    }
  })
}

function resetAnw () {
  proxy.$refs.resetProblem2.validate(valid => {
    if (valid) {
      resetProblem.value.userName = loginForm.value.username
      let questionData = { ...resetProblem.value }
      let StartPasswordData = { ...resetForm.value }
      let params = {
        question: questionData,
        updateStartPassword: StartPasswordData
      }
      updateStartPassword(params, userStore.token_show).then(res => {
        if (res.code === 200) {
          successIcon.value = true
          aswEdit.value = false
          sendCode()
          // getCode()
        }
      })
    }
  })
}

function sendCode () {
  timer.value = setInterval(() => {
    // 创建定时器
    if (count.value === 0) {
      // 关闭定时器
      clearInterval(timer.value)
      timer.value = null
      count.value = 2
      successIcon.value = false
      isLogin.value = true
    } else {
      count.value--
    }
  }, 1000)
}


function getCookie() {
  const username = Cookies.get("username");
  const password = Cookies.get("password");
  const rememberMe = Cookies.get("rememberMe");
  loginForm.value = {
    username: username === undefined ? loginForm.value.username : username,
    password: password === undefined ? loginForm.value.password : decrypt(password),
    rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
  };
}

// 查询所有密保问题
function getProblemList () {
  findAll(userStore.token_show).then(res => {
    if (res.code == 200) {
      problemData.value = res.data
    }
  })
}

// 忘记密码
function forgetPsw () {
  router.push({ path: '/retrievePsw' })
}
thirdLogin()
getCode();
  getCookie();
</script>
<style lang="scss" scoped>
:deep(.el-input--medium .el-input__inner) {
  height: 55px !important;
  line-height: 55px !important;
}

// :deep(.el-input__inner) {
//   height: 42px !important;
//   line-height: 42px !important;
// }

.labelLittle {
  font-size: 18px;
  color: #b3bfc7;
  height: 55px;
  line-height: 55px;
}

.labelLittle-pre {
  font-size: 18px;
  color: #CCCCCC;
  // height: 50px;
  line-height: 42px;
  // line-height: 50px;
  // margin-bottom: 5px;
}

.inputLalel {
  font-size: 22px;
  width: 100px;
}

.login-main {
  width: 100%;
  height: 100%;
  // padding: 50px 120px 40px 120px;
  // overflow-x: scroll;
  background: #f0f2f5;
  background-image: url("../assets/images/bg.png");
  background-size: cover;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
}

.main-icon {
  width: 50%;
  // height: calc(100vh - 20px);
  height: 100vh;
}

.icon-title {
  position: absolute;
  top: 60px;
  left: 115px;
  font-size: 30px;
  // color: #06283d;

  h1 {
    font-family: PingFang SC, PingFang SC-Semibold;
    font-weight: 550;
  }
}

.right-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-login {
  width: 600px;
  height: 620px;
  background: #fff;
  z-index: 100;
  position: relative;
  box-shadow: 10px 20px 30px #e7efeb;
  padding: 40px 35px 30px 35px;

  .login-title {
    font-size: 23px;
    font-weight: 550;
  }

  .login-input {
    margin-top: 60px;
  }

  .input-icon {
    height: 50px;
    margin-bottom: 35px;

    :deep(.el-input__inner) {
      height: 50px;
      line-height: 50px;
      background: #f5f7f7;
      box-shadow: 0 0 0 0;
      border-radius: 0;
    }
  }

  .last-input {
    margin-bottom: 0;
  }
}

.itemLine {
  :deep(.el-input__wrapper) {
    box-shadow: 0 0 0 0;
  }
}

.login-code {
  width: 35%;
  height: 50px;
  line-height: 50px;
  text-align: right;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  background: #f5f7f7;

  .code-text {
    color: #00BC90;
    height: 50px;
    line-height: 50px;
    padding-right: 10px;
    // font-weight: 550;
    cursor: pointer;
  }
}

.login-code-img {
  width: 120px;
  height: 50px;
}

.rePassword {
  padding: 20px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :deep(.el-checkbox__label) {
    color: #afb8bf;
    font-size: 16px;
    font-weight: 500;
  }
}

.submitIcon {
  width: 100%;
  height: 60px;
  position: relative;
  margin-top: 50px;

  .subBtn {
    font-size: 22px;
    // width: 300px;
    width: 100%;
    height: 55px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.login {
  min-width: 1200px;
  align-items: center;
  height: 100%;
  background: #f0f2f5;
  box-sizing: border-box;

  .box-card {
    width: 100%;
    height: 100%;
    min-height: 580px;
    display: flex;
    flex-wrap: nowrap;
    border-radius: 20px !important;

    :deep(.el-card__body) {
      width: 100%;
      height: 100%;
      padding: 0 !important;
      display: flex;
      flex-wrap: nowrap;
    }

    .login_left {
      width: 55%;
      height: 100%;
      background-image: url("../assets/images/login-background.png");
      background-size: 100% 100%;

      .title {
        font-size: 38px;
        font-weight: 550;
        text-align: center;
        color: #347cef;
        padding: 120px 30px;
      }
    }

    .login_right {
      width: 45%;
      height: 100%;
      overflow: auto;

      // background: #ffffff;
      .title {
        font-size: 30px;
        font-weight: 550;
        color: #333333;
        padding: 80px 50px 30px;
      }

      :deep(.el-input__inner) {
        border: 0px;
        // border-bottom: 2px solid #cccccc;
        box-shadow: none;
      }

      .form-main {
        padding: 0 120px 10px 50px;

        :deep(input::-webkit-input-placeholder) {
          font-size: 22px;
        }

        :deep(input::-moz-input-placeholder) {
          font-size: 22px;
        }

        :deep(.el-input) {
          height: 65px;

          .el-input__prefix {
            display: flex;
            align-items: center;
          }
        }

        :deep(.el-input--prefix .el-input__inner) {
          padding-left: 50px;
          font-size: 22px;
          background: #fff !important;
          height: 65px !important;
          // line-height: 65px !important;
        }

        .borderNone {
          background: #fff !important;
          font-size: 22px;
          border: none !important;
        }

        .input-icon {
          font-size: 22px;
          height: 100%;
        }
      }

      .form-main-problem {
        padding: 0 120px 10px 50px;

        :deep(input::-webkit-input-placeholder) {
          font-size: 16px;
        }

        :deep(.el-input) {
          width: 100%;
        }

        .text-input :deep(.el-input__inner) {
          padding-left: 80px;
        }

        :deep(.el-input__inner) {
          // height: 50px;
          // width: 100%;
          // line-height: 50px;
          font-size: 18px;
          color: #000000;

          .el-input__prefix {
            display: flex;
            align-items: center;
          }
        }

        .borderNone {
          width: 100%;
          background: #fff !important;
          font-size: 22px;
          border: none !important;
        }
      }
    }
  }
}

:deep(.el-input__icon) {
  font-size: 24px !important;
  // margin: 0 10px;
  margin-right: 20px;
}

.main-login {
  .sucss-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    i {
      font-size: 180px;
      color: #00BC90;
      padding-bottom: 40px;
    }

    div {
      font-size: 16px;
      line-height: 30px;
    }
  }
}

.copyright {
  font-size: 12px;
  font-family: STHeitiSC;
  line-height: 60px;
  margin: 0;
  text-align: center;
  color: #333333;
  // background: $grey-background;
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.labelLittle {
  font-size: 18px;
  color: #b3bfc7;
  height: 55px;
  line-height: 55px;
}

.borderNone :deep(.el-input__inner:focus) {
  box-shadow: none !important;
}

:deep(.el-form-item__error) {
  margin-top: 2px;
}

.question-line {
  border-bottom: 1px solid #CCCCCC;
}

.answer-line {
  border-bottom: 1px solid #CCCCCC;

  :deep(.el-input__inner) {
    color: #AFB8BF !important;
  }
}

.answerInput {
  padding-right: 40px;
}

.tip {
  font-size: 14px;
}

.flex-input {
  display: flex;
  flex-wrap: nowrap;
}

.input-left {
  height: 100%;
  width: 50%;

  .inpu-quession {
    height: 50px;
    // padding-left: 15px;
    line-height: 50px;
    box-sizing: border-box;
    border: 1px solid #EEEEEE;

    :deep(.el-select) {
      height: 100%;
      display: block;
    }

    :deep(.el-input__inner) {
      background: #fff;
      height: 48px;
      line-height: 48px;
    }
  }
}

.input-right {
  width: 50%;
}</style>