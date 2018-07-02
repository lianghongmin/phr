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
        <iframe width="100%" height="100%" :src="pdfsrc"></iframe>
    </div>
  </div>
</template>

<script>
import navHeader from "@/components/header"
export default {
  name: 'report',
  data () {
    return {
      isShow:false,
      pdfsrc:'./../../static/pdfJs/build/generic/web/viewer.html?file=/static/pdf/pp.pdf'
    }
  },
  mounted(){

  },
  methods:{
    shadeToggle(){
        this.isShow=!this.isShow;
      },
     getPdf(){
       var url="pp.pdf"
     } 
  },
  components:{
    navHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{overflow:none;}
</style>
