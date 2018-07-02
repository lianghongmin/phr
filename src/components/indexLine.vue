<template>
  <div>
    <!--头部-->
    <nav-header >
       <span slot="headTitle">我的医疗时间轴</span>
    </nav-header>
    <div class="content">
    <!-- 轴中内容-->
    <div class="timeline-content">
        <!-- 时间轴主轴-->
        <div class="timeline-bar"></div>
        <!-- 时间轴底部圆点-->
        <div class="timeline-start-dot"></div>
        <div class="timeline-set-month" @click="medical()"> 
            <h3 class="timeline-month">
                <span>2017-12-30</span>
            </h3>
            <div class="set-month">
                <article>
                    <div class="post-inner">
                       <!-- <div class="post-date">
                            <span>2017-12-30</span>
                        </div>-->
                        <h1 class="post-title"><i class="fa fa-pencil color"></i>住院</h1>
                        <div class="post-content">
                            <p>解放军第305医院</p>
                            <!-- <p>
                                 <a class="btn"">查看病案详情</a>
                                 <a class="btn" href="">图片详情</a></p>-->
                            <!--<p>
                                <span class="color"><i class="fa fa-user"></i>305医院<em>⋅</em></span>
                                <span class="color"><i class="fa fa-file"></i>{{item.outDeptName}}<em>⋅</em></span>
                            </p>-->
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div class="timeline-set-month">
            <h3 class="timeline-month">
                <span>2017-12-30</span>
            </h3>
            <div class="set-month">
                <article>
                    <div class="post-inner">
                       <!-- <div class="post-date">
                            <span>2017-12-30</span>
                        </div>-->
                        <h1 class="post-title"><i class="fa fa-pencil color"></i>体检</h1>
                        <div class="post-content">
                            <p>解放军第305医院</p>
                            <!-- <p>
                                 <a class="btn"">查看病案详情</a>
                                 <a class="btn" href="">图片详情</a></p>-->
                            <!--<p>
                                <span class="color"><i class="fa fa-user"></i>305医院<em>⋅</em></span>
                                <span class="color"><i class="fa fa-file"></i>{{item.outDeptName}}<em>⋅</em></span>
                            </p>-->
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>

</div>
  </div>
</template>

<script>
import navHeader from "@/components/header"
export default {
  name: 'indexLine',
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

</style>
