<template>
  <div>
    <!--头部-->
    <nav-header >
       <span slot="headTitle">报告详情</span>
       <a slot="tools"  class="more"  @click='shadeToggle'></a>
    </nav-header>
    <div class="moreShade" v-show="isShow">
        <ul>
            <li><router-link to="/dicom">查看影像详情</router-link></li>
            <li><router-link to="/indexLine">返回时间轴</router-link></li>
        </ul>
    </div>
    <div class="content">
        <viewer></viewer>
    </div>
  </div>
</template>

<script>
import navHeader from "@/components/header"
import viewer from "@/components/viewer"
//import "../../static/pdfJs/build/pdf.js"
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
      },

  },
  components:{
    navHeader,
    viewer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
