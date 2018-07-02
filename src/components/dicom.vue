<template>
  <div>
    <!--头部-->
    <nav-header >
       <span slot="headTitle">影像列表</span>
       <a slot="tools"  class="more"  @click='shadeToggle'></a>
    </nav-header>
    <div class="moreShade" v-show="isShow">
        <ul>
            <li><router-link to="/report">查看报告详情</router-link></li>
            <li><router-link to="/indexLine">返回时间轴</router-link></li>
        </ul>
    </div>
    <div class="content">
          <ul class="dicom_content">
            <li @click="dicom_img">
                <div class="l_left medical_img">
                    <img src="../../static/image/medical_img.jpg" class="" alt=""/>
                </div>
                <div class="l_left text">
                    <h3 class="medical_name">Images</h3>
                    <p class="medical_title">CT</p>
                    <p class="medical_totle">(<span>126</span>&nbsp;images)</p>
                </div>
                <img src="../../static/image/into_30.png" class="r_right r_arrow"/>
            </li>
          </ul>
    </div>
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
      },
      dicom_img(){
         this.$router.push(
         {
              name: 'dicom_img',
              params: {
                          
                        }
        });
      }
  },
  components:{
    navHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .content{
   padding:.2rem;
 }
</style>
