<template>
  <div>
    <div>
      <div class="login-main">
        <div class="home-img">
          <div class="home-title">
            <div class="home-icon">
              <div class="title-top">你好！欢迎来到</div>
              <div class="title-bottom">管理中心</div>
            </div>
          </div>
          <img style="width:100%;height:103%" class="imgs" src="../assets/images/index.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

//欢迎首页
const version = ref('3.6.1')

</script>
<style lang="scss" scoped>
.gary {
  filter: grayscale(100%);
  pointer-events: none;
}

//首页欢迎页面样式
.login-main {
  width: 100%;
  height: calc(100vh - 140px);
}

.home-img {
  height: 100%;
  width: 100%;
  position: relative;
}

.home-title {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
}

.home-icon {
  position: absolute;
  // width: 430px;
  left: 43%;
  top: 45%;

  transform: translate(-50%, -50%);
}

.title-top {
  font-size: 36px;
  font-weight: 700;
  white-space: nowrap;
}

.title-bottom {
  font-size: 65px;
  font-weight: 700;
  margin-top: 20px;
  white-space: nowrap;
}
.point_none {
  pointer-events: none;
}
</style>