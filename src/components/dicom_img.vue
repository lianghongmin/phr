<template>
  <div>
    <!--头部-->
    <nav-header >
       <span slot="headTitle">影像详情</span>
       <a slot="tools"  class="tools"  @click='shadeToggle'></a>
    </nav-header>
    <div class="tools_div" v-show="isShow">
        <ul>
            <li ><img src="../../static/image/icon_01.png" alt=""/></li>
            <li ><img src="../../static/image/icon_02.png" alt=""/></li>
            <li ><img src="../../static/image/icon_03.png" alt=""/></li>
            <li ><img src="../../static/image/icon_04.png" alt=""/></li>
            <li ><img src="../../static/image/icon_05.png" alt=""/></li>
            <li ><img src="../../static/image/icon_06.png" alt=""/></li>
            <li ><img src="../../static/image/icon_07.png" alt=""/></li>
            <li ><img src="../../static/image/icon_08.png" alt=""/></li>
            <li ><img src="../../static/image/icon_09.png" alt=""/></li>
            <li ><img src="../../static/image/icon_10.png" alt=""/></li>
            <li ><img src="../../static/image/icon_11.png" alt=""/></li>
            <li ><img src="../../static/image/icon_12.png" alt=""/></li>
        </ul>
    </div>
    <div class="content">
    <div class="dicom_img_title">
        <p class="totle_img">Image: <span>1</span>/<span>126</span></p>
    </div>
    <ul class="dicom_img_content">
        <li>
            <img src="../../static/image/medical_img.jpg" class="r_right r_arrow"/>
        </li>
    </ul>
    </div>
    <footer class="dicom_img_foot">
        <a href="javascript:;" class="icon_left"></a>
        <!--<progress max="100" value="0"></progress>
        <span></span>-->
        <input class="progress" type="range" value="0" min="0" max="100">
        <a href="javascript:;" class="icon_right"></a>
    </footer>
  </div>
</template>

<script>
import navHeader from "@/components/header"
export default {
  name: 'report',
  data () {
    return {
      isShow:false
    }
  },
  mounted(){

  },
  methods:{
    shadeToggle(){
      this.isShow=!this.isShow;
    }
  },
  components:{
    navHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .content{background:#000;}
</style>
