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
        <canvas id="the-canvas"></canvas>
    </div>
  </div>
</template>

<script>
import navHeader from "@/components/header"
//import viewer from "@/components/viewer"
import "../../static/pdfJs/build/pdf.js"
export default {
  name: 'report',
  data () {
    return {
      isShow:false
    }
  },
  mounted(){
     this.showPdf();
  },
  methods:{
    shadeToggle(){
        this.isShow=!this.isShow;
      },
    showPdf(){
            var url = '../../static/pdf/pp.pdf';
            PDFJS.workerSrc = '../../static/pdfJs/build/generic/build/pdf.worker.js';
            PDFJS.getDocument(url).then(function getPdfHelloWorld(pdf) {
                 pdf.getPage(1).then(function getPageHelloWorld(page) {
                     var scale = 1;
                     var viewport = page.getViewport(scale);
                     var canvas = document.getElementById('the-canvas');
                     var context = canvas.getContext('2d');
                     canvas.height = viewport.height;
                     canvas.width = viewport.width;
                     var renderContext = {
                         canvasContext: context,
                         viewport: viewport
                     };
                     page.render(renderContext);
                 });
            });
    }
  },
  components:{
    navHeader,
    //viewer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
