/** 服务器活动、精选文章、专属体验邀请分别配置，不能混用。 */
window.OPC_CONFIG = {
  "site": {
    "name": "OPC成长之路",
    "plannedDomain": "opcmap.com",
    "domainBound": true
  },
  "providers": [
    {
      "id": "aliyun",
      "name": "阿里云",
      "color": "#efb581",
      "lightColor": "#99602d",
      "region": "大陆部署",
      "description": "面向大陆用户的个人网站与应用部署，可重点比较新用户云服务器和轻量套餐，以及后续续费成本。",
      "focus": "新用户资格 · 配置与带宽 · 续费成本",
      "activityInfo": "从个人网站或小型应用的实际需求出发，比较适合的云服务器与轻量套餐。",
      "serverActivityUrl": "https://www.aliyun.com/minisite/goods?userCode=xbifxhv7",
      "button": "查看新用户活动 →"
    },
    {
      "id": "tencent",
      "name": "腾讯云",
      "color": "#8bbcff",
      "lightColor": "#2f63a4",
      "region": "大陆部署",
      "description": "适合比较个人网站、小型应用和入门实践方案，可重点查看轻量应用服务器与新用户活动。",
      "focus": "轻量套餐 · 流量规则 · 后续续费",
      "activityInfo": "把首购成本与后续维护一起考虑，查看轻量应用服务器的套餐限制。",
      "serverActivityUrl": "https://cloud.tencent.com/act/cps/redirect?redirect=6544&cps_key=8eb5bd7fecaebaa8c13d45dcda49294d&from=console",
      "button": "查看新用户活动 →"
    },
    {
      "id": "yisu",
      "name": "亿速云",
      "color": "#76d9ba",
      "lightColor": "#24765e",
      "region": "香港 / 海外部署",
      "description": "希望选择香港或海外部署的用户，可重点比较活动套餐、线路、带宽和续费条件。",
      "focus": "香港 CN2 线路 · 带宽 · 首购与续费",
      "activityInfo": "官方活动页列有香港 CN2 回国线路及美国地域方案。适合把线路作为比较重点；实际访问体验需结合目标用户测试。",
      "verifiedOn": "2026-10-14",
      "officialSourceUrl": "https://www.yisu.com/huodong/newuser.html",
      "serverActivityUrl": "https://www.yisu.com/coupon?partner=RjIO6",
      "button": "查看香港 / 海外活动 →"
    },
    {
      "id": "ucloud",
      "name": "UCloud",
      "color": "#b8a4f4",
      "lightColor": "#7053a1",
      "region": "香港 / 海外部署",
      "description": "有香港或海外部署需求的用户，可重点查看相关地域活动，结合访问体验与总成本选择。",
      "focus": "轻量与云主机 · 网络线路 · 总成本",
      "activityInfo": "官方香港活动页列有轻量应用云主机、快杰云主机及更多海外地域。可按负载与线路需求比较。页面部分规则标注期限已过，购买前请确认当前资格、有效期与续费条件。",
      "verifiedOn": "2026-10-14",
      "officialSourceUrl": "https://www.ucloud.cn/site/active/hk-global.html",
      "serverActivityUrl": "https://www.ucloud.cn/site/active/hk-global.html?cps_code=C1x43AB84293347",
      "button": "查看香港 / 海外活动 →"
    }
  ],
  "community": {
    "displayName": "AI付费社群",
    "memberCountText": "",
    "communityExperienceInvitationUrl": "https://t.zsxq.com/xq3qO",
    "qrImage": "assets/invitation-qr.png",
    "experienceRules": {
      "days": 7,
      "benefits": "7天会员体验 + 3天AI新手实操课程",
      "supplementaryBenefit": "官方邀请资料介绍：体验1.5亿字AI付费内容。",
      "dailyQuota": null,
      "dailyQuotaConfirmed": false,
      "confirmedNotes": []
    }
  },
  "practiceDirections": [
    {
      "id": "geo",
      "tag": "AI 流量",
      "title": "GEO获客",
      "summary": "了解 AI 搜索推荐机制，探索如何让内容更容易被目标客户发现。",
      "number": "01",
      "image": "assets/direction-geo.webp",
      "imageWidth": 100,
      "imageHeight": 83
    },
    {
      "id": "content",
      "tag": "AI 系统",
      "title": "AI超级大脑：内容Agent、内容自动化",
      "summary": "参考用 WorkBuddy 搭建内容 Agent，辅助文案、视频制作与内容流程自动化。",
      "number": "02",
      "image": "assets/direction-content.webp",
      "imageWidth": 100,
      "imageHeight": 83
    },
    {
      "id": "website",
      "tag": "AI 产品",
      "title": "AI编程（小程序、网站）",
      "summary": "参考用 AI 制作网站和小程序，把具体需求变成可展示、可试用的作品。",
      "number": "03",
      "image": "assets/direction-website.webp",
      "imageWidth": 100,
      "imageHeight": 83
    },
    {
      "id": "omnichannel",
      "tag": "AI 商业实践",
      "title": "AI全域系统带货",
      "summary": "了解用 AI 辅助制作抖音、视频号带货内容的思路，参考短视频制作与运营流程。",
      "number": "04",
      "image": "assets/direction-omnichannel.webp",
      "imageWidth": 100,
      "imageHeight": 83
    },
    {
      "id": "product",
      "tag": "数字产品",
      "title": "AI小红书虚拟产品",
      "summary": "了解数字产品从制作到平台上架的实践方向，思考你能为哪类用户解决具体问题。",
      "number": "05",
      "image": "assets/direction-product.webp",
      "imageWidth": 100,
      "imageHeight": 83
    },
    {
      "id": "skills",
      "tag": "AI Agent",
      "title": "Agent Skills锤炼营",
      "summary": "了解如何封装可复用的 Agent Skills，把重复工作整理成可以持续使用的技能包。",
      "number": "06",
      "image": "assets/direction-skills.webp",
      "imageWidth": 100,
      "imageHeight": 83
    },
    {
      "id": "agent",
      "tag": "AI Agent",
      "title": "AI Agent锻造师",
      "summary": "参考在 WorkBuddy 和 Codex 中搭建 AI Agent 的实践，了解业务助手的制作思路。",
      "number": "07",
      "image": "assets/direction-agent.webp",
      "imageWidth": 100,
      "imageHeight": 83
    },
    {
      "id": "workbuddy",
      "tag": "AI 工作流",
      "title": "Workbuddy铸造营",
      "summary": "参考用 WorkBuddy 辅助办公提效与内容创作，探索适合自己的 AI 工作流。",
      "number": "08",
      "image": "assets/direction-workbuddy.webp",
      "imageWidth": 100,
      "imageHeight": 83
    },
    {
      "id": "presentation",
      "tag": "AI 服务",
      "title": "AI PPT实战",
      "summary": "参考 AI 辅助制作商业 PPT 的过程，了解作品制作与服务交付这一实践方向。",
      "number": "09",
      "image": "assets/direction-presentation.webp",
      "imageWidth": 100,
      "imageHeight": 83
    },
    {
      "id": "fde",
      "tag": "项目交付",
      "title": "FDE初探营",
      "summary": "了解拆解需求、设计方案与 AI 项目落地交付的实践思路。",
      "number": "10",
      "image": "assets/direction-fde.webp",
      "imageWidth": 100,
      "imageHeight": 83
    }
  ],
  "contentPreview": {
    "libraryImage": "assets/project-library.webp",
    "imageWidth": 1840,
    "imageHeight": 233
  },
  "analytics": {
    "enabled": true,
    "eventEndpoint": "/api/events",
    "pageVersion": "2026-10-light-catalog",
    "enabledHosts": [
      "127.0.0.1",
      "localhost",
      "opc-growth-road.ywfw888888.chatgpt.site"
    ]
  },
  "featuredArticles": [],
  "appearance": {
    "defaultTheme": "light",
    "preferenceKey": "opc-display-theme-v2"
  }
};
