<template>
    <div>
        <div class="top pad">
            <div class="userinfo ">
                <div class="img">
                    <img src="https://avatar2.pddpic.com/avatar/default/6.png?imageView2/2/w/1300/q/80/format/webp" alt="">
                </div>
                <div class="name">
                    <p>1876*****162</p> 
                    <p>勋章墙 <span class="go"></span></p> 
                </div>
                <div class="buttom">
                    <div class="bottom">
                        <span>拼单返现</span>
                    </div>
                    
                </div>
                
            </div>
            <div class="quan">
                <span>省钱月卡|帮您省494元</span>
                <span>领四张五元门槛</span>    
            </div>
        </div>
    </div>
    
</template>
<script>
import  menudate from '../../rest/personal'
export default {
    data() {
       return {
            menus:[]
       }
    },
    created() {
      this.menus = menudate.get();
  },
}
</script>
<style lang="less" scoped>
.top {
    display: flex;
    flex-direction: column;
    background-color: white
}
.userinfo{
    height: 1.6rem;
    display: flex;
    align-items: center;
    padding: .3rem .3rem;
    .img {
        flex:1;
        border-radius: 2rem;
        overflow: hidden;
        img {
            width: 100%;
            vertical-align: middle;
        }        
    }
    .name {
        flex:3;
        line-height: .25rem;
        padding:.3rem .3rem;
        p {
            display: flex;
            align-items: center;
        }
        .go {
            margin-left: .18rem;
            height: .18rem;
            width: .18rem;
            border-top: grey solid .03rem;
            border-right: grey .03rem solid;
            transform: rotate(45deg);
        }
    }
    .buttom {
        flex:1.6;
        div {
            padding: .04rem .07rem;
            border-radius: .7rem;
            border:rgb(214, 214, 214) solid .02rem;
            font-size: .12rem;
            text-align: center;
        }
        
    }
    
}
.quan{
        position: relative;
        background-color: #f5e1e1;
        border-radius: .2rem;
        font-size: .2rem;
        padding: .2rem .3rem;
        color: rgb(216, 4, 4);
        height: .8rem;
        span:first-child {
            position: absolute;
            letter-spacing: .07rem;
            left: 0rem;
        }
        span:last-child {
            position: absolute;
            right: 0rem;
        }
    }
</style>