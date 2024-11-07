<template>
    <div class="box" @click="dilogIsShow">
      <div v-if="!imageUrl">
          <el-icon ><upload-filled /></el-icon>
          <div class="el-upload__text">
                  上传
          </div>
      </div>
      <div v-else class="imageName">
            <img :src="imageUrl" class="avatar" />
            <span class="overlay">
                <span>
                    <el-icon ><upload-filled /></el-icon>
                    <div class="el-upload__text">
                        重新上传
                    </div>
                </span>
                <span @click.stop="deletefun" v-if="isDelet">
                    <el-icon ><Close /></el-icon>
                    <div class="el-upload__text">
                        删除
                    </div>
                </span>
            </span>
        </div>
      <el-dialog v-model="centerDialogVisible" title="图片裁剪器" width="80%" center :before-close="closeBtn">
        <div class="cropper-content" v-if="centerDialogVisible">
              <div class="cropper-box">
                <div class="cropper">
                  <vue-cropper
                      ref="cropper"
                      :img="option.img"
                      :outputSize="option.outputSize"
                      :outputType="option.outputType"
                      :info="option.info"
                      :canScale="option.canScale"
                      :autoCrop="option.autoCrop"
                      :autoCropWidth="option.autoCropWidth"
                      :autoCropHeight="option.autoCropHeight"
                      :fixed="option.fixed"
                      :fixedNumber="option.fixedNumber"
                      :full="option.full"
                      :fixedBox="option.fixedBox"
                      :canMove="option.canMove"
                      :canMoveBox="option.canMoveBox"
                      :original="option.original"
                      :centerBox="option.centerBox"
                      :height="option.height"
                      :infoTrue="option.infoTrue"
                      :maxImgSize="option.maxImgSize"
                      :enlarge="option.enlarge"
                      :mode="option.mode"
                    
                      @imgLoad="imgLoad"
                      >
                      <!-- @realTime="realTime"   实时预览函数-->
                  </vue-cropper>
                </div>
            <!--底部操作工具按钮-->
            <div class="footer-btn">
              <div class="scope-btn">
                <label class="btn" for="uploads">选择图片</label>
                <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="selectImg($event)">
                <el-button size="mini" type="danger" plain icon="ZoomIn" @click="changeScale(1)">放大</el-button>
                <el-button size="mini" type="danger" plain icon="ZoomOut" @click="changeScale(-1)">缩小</el-button>
                <el-button size="mini" type="danger" plain icon="RefreshLeft" @click="rotateLeft"> 左旋转</el-button>
                <el-button size="mini" type="danger" plain icon="RefreshRight" @click="rotateRight"> 右旋转</el-button>
                <el-button size="mini" type="success" @click="uploadImg('blob')">上传图片 <i class="el-icon-upload"></i></el-button>
              </div>
              <!-- <div class="upload-btn">
                <el-button size="mini" type="success" @click="uploadImg('blob')">上传图片 <i class="el-icon-upload"></i></el-button>
              </div> -->
            </div>
             </div>
    <!--预览效果图-->
            <!-- <div class="show-preview">
              <div :style="previews.div" class="preview">
                <img :src="previews.url" :style="previews.img">
              </div>
            </div> -->
  </div>
      
      </el-dialog>
       <div>
          
       </div>
    </div>
  </template>
  
  <script setup>
  import "vue-cropper/dist/index.css";
  import { VueCropper } from 'vue-cropper'
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  const { proxy } = getCurrentInstance()
  // const file=ref(null) 
  const disabled=ref(false)
  const imageUrl = ref(null)
  const centerDialogVisible=ref(false)
  const option=ref({
        img: '',             //裁剪图片的地址
        outputSize: 1,       //裁剪生成图片的质量(可选0.1 - 1)
        outputType: 'jpeg',  //裁剪生成图片的格式（jpeg || png || webp）
        info: true,          //图片大小信息
        canScale: true,      //图片是否允许滚轮缩放
        autoCrop: true,      //是否默认生成截图框
        autoCropWidth: 260,  //默认生成截图框宽度
        autoCropHeight: 130, //默认生成截图框高度
        fixed: true,         //是否开启截图框宽高固定比例
        fixedNumber: [2, 1], //截图框的宽高比例
        full: true,         //false按原比例裁切图片，不失真
        fixedBox: false,      //固定截图框大小，不允许改变
        canMove: true,      //上传图片是否可以移动
        canMoveBox: true,    //截图框能否拖动
        original: false,     //上传图片按照原始比例渲染
        centerBox: false,    //截图框是否被限制在图片里面
        height: true,        //是否按照设备的dpr 输出等比例图片
        infoTrue: false,     //true为展示真实输出图片宽高，false展示看到的截图框宽高
        maxImgSize: 3000,    //限制图片最大宽度和高度
        enlarge: 1,          //图片根据截图框输出比例倍数
        mode: '230px 150px',  //图片默认渲染方式
        original:true  ,         //上传图片按照原始比例渲染
        // centerBox:true             //截图框是否被限制在图片里面
  })
   const previews=ref({}) 
  let emit =defineEmits(['update:data'])
const props = defineProps({
  size: {
    type: Number,
    default: 2,//限制文件多少 M
  },
  with:{
    type: Number, //限制图片宽
    default: null,
  },
  height:{
    type: Number,//限制图片高
    default: null,
  },
  isDelet:{
    type: Boolean,//限制图片高
    default: true,
  },
  data:{
    type:String,
    default: null,
  }
}
)

 const size=computed(()=>{
   return props.size
 })
 const imgWith=computed(()=>{
   return props.with
 })
 const imgHeight=computed(()=>{
   return props.height
 })
 const isDelet=computed(()=>{
   return props.isDelet
 })


 const imgData=computed({
  get: () => {
    return props.data
  },
  set:(value)=> {
    emit('update:data', value);
  }
 })
 //裁剪
 function dilogIsShow(){
  centerDialogVisible.value=true
 }

      // 初始化函数
    function imgLoad (msg) {
          console.log("工具初始化函数====="+msg)
        }
    //图片缩放
    function changeScale (num) {
      num = num || 1
      proxy.$refs.cropper.changeScale(num)
    }
    //向左旋转
    function rotateLeft () {
      proxy.$refs.cropper.rotateLeft()
    }
    //向右旋转
    function rotateRight () {
      proxy.$refs.cropper.rotateRight()
    }
    //实时预览函数
    // function  realTime (data) {
    //   // console.log(data,'data');
    //   // data.div.width=parseInt(data.w)/2+'px',
    //   // data.div.height=parseInt(data.h)/2+'px',
    //   // data.img.width=parseInt(data.img.width)/(parseInt(data.img.width)/data.w)+'px',
    //   // data.img.height=parseInt(data.img.height)/(parseInt(data.img.height)/data.h)+'px',
    //   // data.img.transform='scale(0.5)',
    //   previews.value = data
    // }
    //选择图片
    function  selectImg (e) {
      let file = e.target.files[0]
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        proxy.$message({
          message: '图片类型要求：jpeg、jpg、png',
          type: "error"
        });
        return false
      }
      //转化为blob
      let reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
       option.value.img = data.toString()
      }
      //转化为base64
      reader.readAsDataURL(file)
    }
    //上传图片
    function  uploadImg (type) {
      if (type === 'blob') {
        //获取截图的blob数据
        proxy.$refs.cropper.getCropBlob(async (data) => {
           //获取url
             if (data.size / 1024 / 1024 > size.value) {
            ElMessage.error(`图片不能大于${size.value}MB!`)
            return false
          }
          const reader = new FileReader();
            reader.onload = (e) => {
                imgSizefn(e.target.result)
            };
            //上传
            reader.readAsDataURL(data);
                //  console.log(data,'data');
              })
            }
          }


  function imgSizefn(url){
      const image = new Image();
        image.src=url
        image.onload = function () {
          if ((imgWith.value&& this.width !=imgWith.value)||(imgHeight.value&&this.height != imgHeight.value) ) {
              ElMessage.warning('请上传宽为' + imgWith.value+'px' +'高为' + imgHeight.value  + "px的图片")
              imageUrl.value=undefined
              return
            }
            imgData.value = url;
            imageUrl.value=url
            closeBtn()
                }
      } 
//
function closeBtn(){
  option.value.img=''
  centerDialogVisible.value=false
}






  // const beforeAvatarUpload = (rawFile) => {
  // if (!(rawFile.file.type === 'image/jpeg'||rawFile.file.type==='image/png')) {
  //   ElMessage.error('图片上传png或者jpg')
  //   return false
  // } 
  //  if (rawFile.file.size / 1024 / 1024 > size.value) {
  //   ElMessage.error(`图片不能大于${size.value}MB!`)
  //   return false
  // }
  //   //获取url
  //   const reader = new FileReader();
  //     reader.onload = (e) => {
  //         disabled.value=true
  //         imgSizefn(e.target.result)
  //     };
  //     //上传
  //     reader.readAsDataURL(rawFile.file);
  //   return true
    
  // }


  // //图片大小
  // function imgSizefn(url){
  //     const image = new Image();
  //       image.src=url
  //       image.onload = function () {
  //         if ((imgWith.value&& this.width !=imgWith.value)||(imgHeight.value&&this.height != imgHeight.value) ) {
  //             ElMessage.warning('请上传宽为' + imgWith.value+'px' +'高为' + imgHeight.value  + "px的图片")
  //             return
  //           }
  //           imgData.value = url;
  //           imageUrl.value=url
  //               }
  //     } 
  //删除图片
    function deletefun(){
      imageUrl.value=null
      imgData.value=null
    }
  
   function install(){
    imageUrl.value=imgData.value
     option.value.img=imgData.value

  }

 
  install()
  </script>
  <style lang="scss"  scoped>
  .box{
    overflow: hidden;
    font-size: 28px;
  color: #00BC90;
  border: 1px solid #CBCFD6;
  border-radius: 5px;
  width: 100px;
  height: 100px;
  text-align: center; 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  .el-upload__text{
    font-size: 12px;
    margin-right: 5px;
  }
  }
  .avatar{
    width: 100%;
    height: 100%;
  }
  .imageName{
    position: relative; /* 设置容器为相对定位 */
   display: inline-block;
   width: 100px;
    height: 100px;
  }
  .overlay {
  position: absolute; /* 设置遮罩层为绝对定位 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // pointer-events: none; /* 遮罩层不响应鼠标事件 */
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    .el-upload__text{
        font-size: 8px;
        text-align: center;
    }
  }
  span:nth-child(1){
    width: 60%;
  }
  span:nth-child(2){
    width: 40%;
  }
  span:hover{
    color: #00BC90;
  }
  }
  .imageName:hover .overlay {
  background-color: rgba(0, 0, 0, 0.5); /* 设置遮罩层的颜色和透明度 */
  color: #fff;
  opacity: 1;
  }


  .cropper-content{
    display: -webkit-flex;
    display: flex ;
    justify-content: flex-end;
    
  }
   .cropper-box{
    flex: 2;
    width: 100%;
    //  overflow: auto;
   }
    .cropper{
      width: auto;
      height: 500px;
    }
 
  .show-preview{
    overflow: hidden;
    width: 100%;
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
}
.preview{
      overflow: hidden;
      border:1px solid #67c23a;
      background: #cccccc;
    }
.footer-btn{
  margin-top: 30px;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
}
  .upload-btn{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }
  .scope-btn{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    padding-right: 10px;
  }
  .btn {
    outline: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 8px 15px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #409EFF;
    border-color: #409EFF;
    margin-right: 10px;
  }
  </style>