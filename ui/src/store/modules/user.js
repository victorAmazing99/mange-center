import { login, logout, getInfo, systemInfoByUser, userList, thirdLogin } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import defAva from '@/assets/images/profile.jpg'

const useUserStore = defineStore(
  'user',
  {
    state: () => ({
      token: getToken(),
      token_show: '',
      name: '',
      avatar: '',
      userInfoData: [],
      roles: [],
      permissions: [],
      panelNode: '',
      existenceTime: '',
      routeList: []
    }),
    actions: {
      // 是否首次登录
      SET_FIRST(val) {
        this.existenceTime = val
      },
      // 登录
      login(userInfo) {
        const username = userInfo.username.trim()
        const password = userInfo.password
        const code = userInfo.code
        const uuid = userInfo.uuid
        return new Promise((resolve, reject) => {
          login(username, password, code, uuid).then(res => {
            if (res.code == 10011) {
              this.SET_FIRST('1')
              this.token_show = res.data.access_token
            } else if (res.code == 10012) {
              this.SET_FIRST('3')
              this.token_show = res.data.access_token
            } else {
              this.SET_FIRST('2')
              setToken(res.data.access_token)
              this.token = res.data.access_token
            }
            resolve()
          }).catch(error => {
            console.log('error', error);
            reject(error)
          })
        })
      },
      // 免登陆
      noLogin({ commit }, userInfo) {
        setToken(userInfo.token)
        this.SET_FIRST('2')
        this.token_show = userInfo.token
      },
      // 第三方登录
      getThirdLogin(userInfo) {
        return new Promise((resolve, reject) => {
          console.log('data777', userInfo);
          let params = {
            orgCode: userInfo.orgCode,
            thirdNo: userInfo.thirdNo
          }
          console.log('params111', params);
          thirdLogin(params).then(res => {
            console.log('***888', res);
            setToken(res.data.access_token)
            this.SET_FIRST('2')
            this.token_show = res.data.access_token
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 获取用户信息
      getInfo() {
        return new Promise((resolve, reject) => {
          // getInfo().then(res => {
          userList().then(res => {
            this.roles = ['admin']
            this.userInfoData = res.data
            this.name = res.data.name
            this.avatar = ''
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })

      },
      getPanel() {
        return new Promise((resolve, reject) => {
          systemInfoByUser().then(res => {
            // console.log('6666=>', res)
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
      getUser() {
        return new Promise((resolve, reject) => {
          userList().then(res => {
            // console.log('999=>', res)
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 退出系统
      logOut() {
        // console.log('out%%5');
        return new Promise((resolve, reject) => {
          logout(this.token).then(() => {
            this.token = ''
            this.roles = []
            removeToken()
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      }
    }
  })

export default useUserStore