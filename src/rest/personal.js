let menus = [
    {
        name:'我的订单',
        child:[
            {
                img:'icon-daifukuan',
                name:'待付款',
                url:''
            },
            {
                img:'icon-fenxiang1',
                name:'待分享',
                url:''
            },
            {
                img:'icon-daifahuo',
                name:'待发货',
                url:''
            },
            {
                img:'icon-nogoods',
                name:'待收货',
                url:''
            },
            {
                img:'icon-daipingjia',
                name:'待评价',
                url:''
            }
        ]
    },
    {
        name:'一楼',
        child:[
            {
                img:'icon-youhuiquan',
                name:'优惠券',
                url:''
            },
            {
                img:'icon-shoucang',
                name:'商品收藏',
                url:''
            },
            {
                img:'icon-zuji',
                name:'历史浏览',
                url:''
            },
            {
                img:'icon-tuikuanshouhou',
                name:'售后退款',
                url:''
            },
            {
                img:'icon-pingjia-tianchong',
                name:'我的评价',
                url:''
            }
        ]
    },
    // {
    //     name:'二楼',
    //     child:[
    //         {
    //             img:'',
    //             name:'新人红包',
    //             url:''
    //         }
    //     ]
    // } 
]

module.exports = {
    get() {
        return menus
    }
}