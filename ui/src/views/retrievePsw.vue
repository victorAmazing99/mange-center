<template>
  <div class="login">
    <div class="box-card">
      <div class="login_left">
        <div class="icon-title">
          <h1>管理中心</h1>
        </div>
      </div>
      <div v-show="one" class="login_right">
        <div class="main-login">
          <div class="login-title">输入账号</div>
          <div class="login-input">
            <el-form ref="loginRef" :model="loginForm" :rules="loginRules" class="login-form">
              <div class="input-icon">
                <el-form-item >
                  <el-input v-model="loginForm.userName" placeholder="输入用户名" type="text" clearable>
                  </el-input>
                </el-form-item>
              </div>            
            </el-form>
          </div>
          <div class="submitIcon">
            <el-button style="background:#00bc90;color:#fff" class="subBtn" @click="nameNext">下一步</el-button>
          </div> 
        </div>
      </div>

      <div v-show="two" class="login_right">
        <div class="main-login">
          <div class="login-title">验证密保问题</div>
          <div class="login-input">
            <el-form ref="loginRef" class="login-form">
              <div class="input-icon flex-input">
                <div class="input-left">
                  <div class="inpu-quession">{{ answerList.questionDetail1 }}</div>
                </div>
                <div class="input-right">
                  <el-input v-model="answerList.answer1" placeholder="请输入答案" type="text" clearable>
                  </el-input>
                </div>
              </div>
              <div class="input-icon flex-input">
                <div class="input-left">
                  <div class="inpu-quession"> {{ answerList.questionDetail2 }}</div>
                </div>
                <div class="input-right">
                  <el-input v-model="answerList.answer2" placeholder="请输入答案" type="text" clearable>
                  </el-input>
                </div>
              </div>
              <div class="input-icon flex-input">
                <div class="input-left">
                  <div class="inpu-quession">{{ answerList.questionDetail3 }}</div>
                </div>
                <div class="input-right">
                  <el-input v-model="answerList.answer3" placeholder="请输入答案" type="text" clearable>
                  </el-input>
                </div>
              </div>            
            </el-form>
          </div>
          <div style="height:60px;width:100%;margin-top:50px">
              <el-button style="background:#00bc90;color:#fff" class="subBtn" @click="answerNext">下一步</el-button>
            </div> 
        </div>
      </div>

      <div v-show="three" class="login_right">
        <div class="main-login">
          <div class="login-title">修改密码</div>
          <div class="login-input">
            <el-form ref="loginForm3" :hide-required-asterisk="true" :model="loginForm" class="login-form" :rules="loginRules">
              <div class="input-icon" style="margin-bottom:65px">
                <el-form-item prop="newPassword" class="itemLine">
                  <el-input ref="passRefs" v-model="loginForm.newPassword" type="password" auto-complete="off" clearable
                    minlength="8" placeholder="输入新密码">
                  </el-input>
                </el-form-item>
                <span class="tip">*密码至少8位，且必须包括数字、字符和大小写英文字母</span>
              </div>            
              <div class="input-icon">
                <el-form-item prop="anewPassword" class="itemLine">
                  <el-input ref="passRefs" v-model="loginForm.anewPassword" type="password" auto-complete="off" clearable
                    minlength="8" placeholder="确认新密码">
                  </el-input>
                </el-form-item>
              </div>           
            </el-form>
          </div>
          <div style="height:60px;width:100%;margin-top:100px">
              <el-button style="background:#00bc90;color:#fff" class="subBtn" @click="forgetSave">保存</el-button>
            </div> 
        </div>
      </div>
     
    </div>
  </div>
</template>

<script setup>
import { getQuestion, check, updatePassword } from '@/api/login'
const router = useRouter();
const { proxy } = getCurrentInstance();

const pwdCheck = async (rule, value, callback) => {
  // 大小写字母、数字、特殊字符至少8位
  const reg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,}$/
  if (!value || value.length < 8) {
    return callback(new Error('密码至少8位，且必须包括数字、字符和大小写英文字母'))
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
  } else if (loginForm.value.newPassword != loginForm.value.anewPassword) {
    return callback(new Error('两次输入密码不一致！'))
  } else {
    callback()
  }
}

const one = ref(true);
const two = ref(false);
const three = ref(false);
const token = ref('');

const loginForm = ref({
  userName: '',
  newPassword: '',
  anewPassword: ''
});
const answerList = ref({
  questionDetail1: "",
  questionDetail2: "",
  questionDetail3: ""
});

const loginRules = {
  newPassword: [
    { required: true, validator: pwdCheck, trigger: 'blur' }
  ],
  anewPassword: [
    { required: true, validator: pwdAgainCheck, trigger: 'blur' }
  ]
}

function nameNext () {
  // 验证用户名
  getQuestion({ userName: loginForm.value.userName }).then(res => {
    if (res.code == 200) {
      answerList.value = res.data
      one.value = false
      two.value = true
    }
  })
}

// 验证密保
function answerNext () {
  if(answerList.value.answer1=='' || answerList.value.answer2 == '' || answerList.value.answer3 == '') {
    proxy.$message({
      message: '请输入问题答案',
      type: 'warning'
    })
    return
  }
  check(answerList.value,).then(res => {
    // console.log(res)
    if (res.code == 200) {
      two.value = false
      three.value = true
      token.value = res.token
    }
  })
}
// 修改密码
function forgetSave () {
  proxy.$refs.loginForm3.validate((valid) => {
    if (valid) {
      loginForm.value.password = loginForm.value.newPassword
      // loginForm.value.anewPassword = loginForm.value.anewPassword
      updatePassword(loginForm.value, token.value).then(res => {
        if (res.code == 200) {
          proxy.$message({
            message: res.msg,
            type: 'success'
          })
          proxy.$router.push({ path: 'login' })
        }
      })
    }
  })
}

</script>
<style lang="scss" scoped>
:deep(.el-input--medium .el-input__inner) {
  height: 55px !important;
  line-height: 55px !important;
}

.labelLittle {
  font-size: 20px;
  color: #B3BFC7;
  height: 55px;
  line-height: 55px;
  width: 100%;
  text-align: left;
  display: block;
}

.inputLalel {
  font-size: 22px;
  width: 100px;
}

.login {
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  box-sizing: border-box;

  .box-card {
    background-image: url("../assets/images/bg.png");
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;

    .login_right {
      width: 50%;
      height: 100vh;
      // overflow: auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .itemLine {
        border-bottom: 1px solid #CCCCCC;
      }

      .form-main {
        height: 80%;
        padding: 0 50px 10px 50px;

        .login-form {
          height: 100%;
          position: relative;
        }

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
          line-height: 65px !important;
        }

        .borderNone {
          background: #fff !important;
          font-size: 22px;
          border: none !important;
        }

        .input-icon {
          font-size: 22px;
        }
      }
    }
  }
}
.flex-input {
  display: flex;
  flex-wrap: nowrap;
}
.main-login {
  width: 500px;
  height: 520px;
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
    :deep(.el-form-item) {
            margin-bottom: 10px !important;
          }

  }
  .input-left {
    height: 100%;
    width: 50%;
    .inpu-quession {
      height: 50px;
      padding-left: 15px;
      line-height: 50px;
      border: 1px solid #EEEEEE;
    }
  }
  .input-right {
    width: 50%;
  }
  .last-input {
    margin-bottom: 0;
  }
}
.tip {
  font-size: 14px;
}

:deep(.el-input__icon) {
  font-size: 26px !important;
}

.rePassword {
  padding: 0 60px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :deep(.el-checkbox__label) {
    color: #AFB8BF;
    font-size: 16px;
    font-weight: 500;
  }
}

.submitIcon {
  width: 100%;
  height: 60px;
  // position: relative;
  margin-top: 220px;
}

.subBtn {
  font-size: 22px;
  width: 100%;
  height: 55px;
  // position: absolute;
  // left: 50%;
  // top: 50%;
  // bottom: 0;
  // transform: translate(-50%, -50%);
}

.login_right {
  .sucss-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    i {
      font-size: 180px;
      color: #347cef;
      padding-bottom: 40px;
    }

    div {
      font-size: 16px;
      line-height: 30px;
    }
  }
}

.loginFormBox {
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.answerList {
  font-size: 20px;
  color: #333;
  height: 60px;
  line-height: 60px;
  text-align: left;
  // margin-bottom: 10px;
  width: 404px;
}

.text-input {
  padding-right: 15px;
  :deep(.el-input__wrapper) {
    box-shadow: 0 0 0 0;
  }
}

.labelLittle-pre {
  font-size: 18px;
  // color: #000000;
  height: 50px;
  line-height: 50px;
}

.borderNone {
  width: 100%;
  background: #fff !important;
  font-size: 22px;
  border: none !important;
}

:deep(.el-input__inner) {
  border: 0px;
  box-shadow: none;
}

.login-user {
  :deep(.el-input__inner) {
    border: 0px;
    border-bottom: 2px solid #cccccc;
    box-shadow: none;
  }

  :deep(.el-input--prefix .el-input__inner) {
    padding-left: 120px !important;
    height: 65px !important;
  }
}

.login_pro {
  :deep(.el-input--prefix .el-input__inner) {
    padding-left: 90px !important;
    height: 65px !important;
  }
}

.login_edit {
  :deep(.el-input__inner) {
    box-shadow: 0 !important;
  }

  :deep(.el-form-item.is-error .el-input__inner) {
    box-shadow: none !important;
    // padding-right: 110px;
  }

  .is-error.itemLine {
    border-bottom: 1px solid red !important;
  }

  :deep(.el-input__prefix) {
    padding-right: 15px;
  }

}
.login_left {
  width: 50%;
  height: 100%;
  background-image: url("../assets/images/login-background.png");
  background-size: 100% 100%;
  position: relative;
  
  .icon-title {
    position: absolute;
    top: 60px;
    left: 85px;
    font-size: 24px;
    h1 {
      font-family: PingFang SC, PingFang SC-Semibold;
      font-weight: 550;
    }
  }
}
.login_right {
  width: 50%;
}
.answer-line {
  :deep(.el-input__inner) {
    padding-left: 30px !important;
    color: #AFB8BF;
  }
}
</style>
