<template>
    <div class="div">
       <search></search>
       <div class="navbar">
           <ul class="">
               <li :class="[itemindex==index? 'active':'']" v-for="(item,index) in infos.navbar" :key="index" @click="navbarindex(index)">{{item}}</li>
           </ul>
       </div>
       <div class="line"></div>
       <div class="main">
            <indexcontent :title="infos.navbar[itemindex]" :info="infos.content"></indexcontent>
            <indexmiddle></indexmiddle>
       </div>
       
    </div>
</template>
<script >
import search from '../../components/search'
import indexcontent from '../../components/indexcontent'
import indexmiddle from '../../components/indexmiddle'
import getdata from '../../rest/index'
export default {
    data() {
        return {
            infos:{},
            itemindex:0 
        }
    },
    components: {
    search,
    indexcontent,
    indexmiddle
  },
  created() {
      this.infos = getdata.get()
  },
  methods: {
      navbarindex(index) {
        this.itemindex = index
      }    
  }
}
</script>
<style lang="less" scoped>
.navbar {
    background-color: white;
    height: .6rem;
    overflow: hidden;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    ul { 
    justify-content: center;
    height: 100%;
    li {
        display: inline-block;
        margin:0rem .29rem;
        font-size: .24rem;
        text-align: center;
        padding: .18rem 0rem;
        height: 100%;        
    }   
   } 
    .active {
        color: red;
        border-bottom: .02rem red solid;
    }
}
.navbar::-webkit-scrollbar {
display: none
}
</style>