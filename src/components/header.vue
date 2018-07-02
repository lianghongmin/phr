<template>
  <header>
    <a href="javascript:;" class="back" v-show="isShow" @click="goback"></a>
    <slot name="headTitle"></slot>
    <slot name="tools"></slot>
  </header>
</template>

<script>
export default { 
  data () {
    return {
       isShow:true
    }
  },
   mounted(){
    this.isShow=true;
    if(this.$route.path=='/'||this.$route.path=='/indexLine'){
          this.isShow=false;
    }
  },
  methods:{
    goback() {
        if(this.$route.path=="/report"||this.$route.path=="/dicom"){
            this.$router.push({
             name:"medical",
             params:{
             }
           })
        }else if(this.$route.path=="/medical"){
            this.$router.push({
             name:"indexLine",
             params:{
             }
           })
        }
        else{
         this.$router.go(-1);
        }
       }
  },
  watch:{
      '$route':function(newValue,oldValue){
        this.isShow=true;
        if(newValue.path=='/'||newValue.path=='/medicalLine'){
          this.isShow=false;
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
