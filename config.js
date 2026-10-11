/** 所有内容入口统一维护；精选文章与体验邀请必须分开。 */
window.OPC_CONFIG = {
  site: {name:'OPC成长之路', plannedDomain:'opcmap.com', domainBound:false},
  providers:[
    {id:'aliyun',name:'阿里云',color:'#efb581',region:'大陆部署',description:'面向大陆用户的个人网站与应用部署，可重点比较新用户云服务器和轻量套餐，以及后续续费成本。',focus:'新用户资格 · 配置与带宽 · 续费成本',activityInfo:'从个人网站或小型应用的实际需求出发，比较适合的云服务器与轻量套餐。',serverActivityUrl:'https://www.aliyun.com/minisite/goods?userCode=xbifxhv7',button:'查看新用户活动 →'},
    {id:'tencent',name:'腾讯云',color:'#8bbcff',region:'大陆部署',description:'适合比较个人网站、小型应用和入门实践方案，可重点查看轻量应用服务器与新用户活动。',focus:'轻量套餐 · 流量规则 · 后续续费',activityInfo:'把首购成本与后续维护一起考虑，查看轻量应用服务器的套餐限制。',serverActivityUrl:'https://cloud.tencent.com/act/cps/redirect?redirect=6544&cps_key=8eb5bd7fecaebaa8c13d45dcda49294d&from=console',button:'查看新用户活动 →'},
    {id:'yisu',name:'亿速云',color:'#76d9ba',region:'香港 / 海外部署',description:'希望选择香港或海外部署的用户，可重点比较活动套餐、线路、带宽和续费条件。',focus:'香港 CN2 线路 · 带宽 · 首购与续费',activityInfo:'官方活动页列有香港 CN2 回国线路及美国地域方案。适合把线路作为比较重点；实际访问体验需结合目标用户测试。',verifiedOn:'2026-10-11',officialSourceUrl:'https://www.yisu.com/huodong/newuser.html',serverActivityUrl:'https://www.yisu.com/coupon?partner=RjIO6',button:'查看香港 / 海外活动 →'},
    {id:'ucloud',name:'UCloud',color:'#b8a4f4',region:'香港 / 海外部署',description:'有香港或海外部署需求的用户，可重点查看相关地域活动，结合访问体验与总成本选择。',focus:'轻量与云主机 · 网络线路 · 总成本',activityInfo:'官方香港活动页列有轻量应用云主机、快杰云主机及更多海外地域。可按负载与线路需求比较。页面部分规则标注期限已过，购买前请确认当前资格、有效期与续费条件。',verifiedOn:'2026-10-11',officialSourceUrl:'https://www.ucloud.cn/site/active/hk-global.html',serverActivityUrl:'https://www.ucloud.cn/site/active/hk-global.html?cps_code=C1x43AB84293347',button:'查看香港 / 海外活动 →'}
  ],
  community: {
    memberCountText:'已有超5.5W用户加入', // 用户提供，更新时核对数据口径。
    communityExperienceInvitationUrl:'https://t.zsxq.com/xq3qO',
    qrImage:'assets/invitation-qr.png',
    experienceRules:{days:7,benefits:'体验1.5亿字AI付费内容 + 3天AI新手实操课程',dailyQuota:null,dailyQuotaConfirmed:false,confirmedNotes:[]}
  },
  // 添加真实文章：{title,summary,tags:['建站实践'],featuredArticleUrl,accessLabel:'可预览，全文需会员'}
  featuredArticles:[]
};
