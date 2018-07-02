<template>
  <div>
    <!--头部-->
    <nav-header>
       <span slot="headTitle">住院详情</span>
    </nav-header>
    <nav>
        <ul>
            <li><router-link  to="/report">查看报告</router-link></li>
            <!--<li><a href="../../static/pdfJs/build/generic/web/viewer.html">查看报告1</a></li>-->
            <li><router-link class="border-r" to="/dicom">查看影像</router-link></li>
        </ul>
    </nav>
    <div class="content">
         <div class="medical_content clearfix">
            <p><span class="l_name">姓名&nbsp;:&nbsp;</span><span>曾某某</span></p>
            <p><span class="l_name">性别&nbsp;:&nbsp;</span><span>男</span></p>
            <p><span class="l_name">年龄&nbsp;:&nbsp;</span><span>54</span>岁</p>
            <p><span class="l_name">婚姻&nbsp;:&nbsp;</span><span>已婚</span></p>
            <p><span class="l_name">民族&nbsp;:&nbsp;</span><span>汉</span></p>
            <p><span class="l_name">国籍&nbsp;:&nbsp;</span><span>中国</span></p>
            <p><span class="l_name">电话&nbsp;:&nbsp;</span><span>18911432345</span></p>
            <p><span class="l_name">入院方式&nbsp;:&nbsp;</span><span></span></p>
            <p><span class="l_name">诊断&nbsp;:&nbsp;</span><span></span></p>
            <p><span class="l_name">接诊日期&nbsp;:&nbsp;</span><span></span></p>
            <p><span class="l_name">接诊医生&nbsp;:&nbsp;</span><span></span></p>
            <p><span class="l_name">所属医院&nbsp;:&nbsp;</span><span></span></p>
        </div>
    </div>
  </div>
</template>

<script>
import navHeader from "@/components/header"
export default {
  name: 'medical',
  data () {
    return {
      
    }
  },
  mounted(){

  },
  methods:{
    //跳转medical页面
    medical(){
       this.$router.push(
         {
              name: 'medical',
              params: {
                          
                        }
        });
    },
  },
  components:{
    navHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .content{
            background: #f7f7f7;
            bottom:0;
            top:2rem;
            padding:.1rem;
        }
</style>
