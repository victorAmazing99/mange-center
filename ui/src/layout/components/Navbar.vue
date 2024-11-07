<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="appStore.sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" v-if="!settingsStore.topNav" /> -->
    <top-nav id="topmenu-container" class="topmenu-container" v-if="settingsStore.topNav" />

    <div class="right-menu">
      <span style="display:inline-block;font-size:14px;margin-right:10px;color:#333333" v-if="userStore.userInfoData.orgName">{{ userStore.userInfoData.orgName }}</span>
      <el-dropdown @command="handleCommand" class="right-menu-item hover-effect select" trigger="click">
        <span class="el-dropdown-link">{{ userStore.userInfoData.name }}<el-icon style="margin-left:5px">
            <CaretBottom />
          </el-icon></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item divided command="editPass">
              <span>密码修改</span>
            </el-dropdown-item>
            <el-dropdown-item divided command="logout">
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    </div>

    <el-dialog v-if="openEdit" title="修改密码" v-model="openEdit" width="600px" append-to-body center :show-close="false" :close-on-click-modal="false">
      <el-form ref="userEditPass" :model="NavformData" :rules="rulesEdit" label-width="100px" size='large'>
        <el-row>
          <el-col :span="3" />
          <el-col :span="18">
            <el-form-item label="输入原密码" prop="password">
              <el-input type="password" v-model="NavformData.password" placeholder="输入原密码" maxlength="50" />
            </el-form-item>
          </el-col>
          <el-col :span="3" />
        </el-row>
        <el-row style="margin:10px 0">
          <el-col :span="3" />
          <el-col :span="18">
            <el-form-item label="输入新密码" prop="newPassword">
              <el-input type="password" v-model="NavformData.newPassword" placeholder="输入新密码" maxlength="50" />
            </el-form-item>
          </el-col>
          <el-col :span="3" />
        </el-row>
        <el-row>
          <el-col :span="3" />
          <el-col :span="18">
            <el-form-item label="确认新密码" prop="anewPassword">
              <el-input type="password" v-model="NavformData.anewPassword" placeholder="确认新密码" maxlength="50" />
            </el-form-item>
          </el-col>
          <el-col :span="3" />
        </el-row>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
  import { ElMessageBox } from 'element-plus'
  import Breadcrumb from '@/components/Breadcrumb'
  import TopNav from '@/components/TopNav'
  import Hamburger from '@/components/Hamburger'
  import Screenfull from '@/components/Screenfull'
  import SizeSelect from '@/components/SizeSelect'
  import HeaderSearch from '@/components/HeaderSearch'
  import RuoYiGit from '@/components/RuoYi/Git'
  import RuoYiDoc from '@/components/RuoYi/Doc'
  import useAppStore from '@/store/modules/app'
  import useUserStore from '@/store/modules/user'
  import useSettingsStore from '@/store/modules/settings'
  import { updatePsd } from '@/api/login'

  import { useRouter } from 'vue-router'

  const router = useRouter();
  const { proxy } = getCurrentInstance()
  const appStore = useAppStore()
  const userStore = useUserStore()
  const settingsStore = useSettingsStore()

  const openEdit = ref(false)
  const NavformData = ref({
    userName: '',
    password: '',
    newPassword: '',
    anewPassword: ''
  });
  // const pwdCheck = async (rule, value, callback) => {
  //   const oldPass = sessionStorage.getItem('pass')
  //   const pass = sm3(NavformData.value.password)
  //   if (pass !== oldPass) {
  //     return callback(new Error('原密码不匹配!'))
  //   } else {
  //     callback()
  //   }
  // }
  const newpwdCheck = async (rule, value, callback) => {
    // 大小写字母、数字、特殊字符至少8位
    const reg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,}$/
    if (!value || value.length < 8) {
      return callback(new Error('密码至少8位，且必须包括数字、字符和大小写英文字母'))
    } else if (NavformData.value.password == NavformData.value.newPassword) {
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
    } else if (NavformData.value.newPassword != NavformData.value.anewPassword) {
      return callback(new Error('两次输入密码不一致！'))
    } else {
      callback()
    }
  }
  const rulesEdit = {
    password: [{ required: true, trigger: "blur", message:'请输入原密码' }],
    newPassword: [
      { required: true, trigger: "blur", validator: newpwdCheck }
    ],
    anewPassword: [
      { required: true, trigger: "blur", validator: pwdAgainCheck }
    ]
  };

  function toggleSideBar() {
    appStore.toggleSideBar()
  }

  function handleCommand(command) {
    switch (command) {
      case "setLayout":
        setLayout();
        break;
      case "editPass":
        editPass();
        break;
      case "logout":
        logout();
        break;
      default:
        break;
    }
  }
  // 密码修改
  function editPass() {
    openEdit.value = true
  }

  function logout() {
    ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      userStore.logOut().then(() => {
        // location.href = '/';
        router.push({
          path: '/'
        })
        
        location.reload();
      })
    }).catch(() => {});
  }

  function submitForm() {
    let validData = []
    proxy.$refs.userEditPass.validate(valid => {
      validData.push(valid)
      if (validData.length > 0 && validData[0] == true) {
        let params = { ...NavformData.value, userName: userStore.userInfoData.userName }
        updatePsd(params).then(res => {
          if (res.code == 200) {
            openEdit.value = false
            sessionStorage.setItem('pass', sm3(NavformData.value.newPassword))
            cancel()
            ElMessage({
              type: 'success',
              message: '修改成功',
            })
          }
        })
      }
    })
  }

  function cancel() {
    openEdit.value = false
    NavformData.value = {
      userName: '',
      password: '',
      newPassword: '',
      anewPassword: ''
    };
  }

  const emits = defineEmits(['setLayout'])

  function setLayout() {
    emits('setLayout');
  }
</script>

<style lang='scss' scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background 0.3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }

    .breadcrumb-container {
      float: left;
    }

    .topmenu-container {
      position: absolute;
      left: 50px;
    }

    .errLog-container {
      display: inline-block;
      vertical-align: top;
    }

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;
      display: flex;
      padding-right: 20px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background 0.3s;

          &:hover {
            background: rgba(0, 0, 0, 0.025);
          }
        }
      }

      .avatar-container {
        margin-right: 40px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          i {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #333333 !important;
  }

  .select :deep(.el-tooltip__trigger) {
    .el-icon--right {
      transition: all 0.2s ease;
    }
  }

  .select :deep(.el-tooltip__trigger)[aria-describedby] {
    .el-dropdown-link .el-icon {
      transform: rotate(180deg);
    }
  }
</style>