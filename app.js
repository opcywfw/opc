(() => {
'use strict';
const config=window.OPC_CONFIG;
const $=s=>document.querySelector(s);
const themeToggle=$('#theme-toggle');
function applyTheme(theme,persist=false){
 const mode=theme==='light'?'light':'dark';
 document.documentElement.dataset.theme=mode;
 const next=mode==='dark'?'浅色模式':'深色模式';
 
 themeToggle.setAttribute('aria-label',`切换到${next}`);
 themeToggle.setAttribute('title',`切换到${next}`);
 themeToggle.setAttribute('aria-pressed',String(mode==='dark'));
 document.querySelector('meta[name="theme-color"]').content=mode==='dark'?'#0b100f':'#f7f8f3';
 if(persist){try{localStorage.setItem('opc-display-theme',mode);}catch{}}
}
applyTheme(document.documentElement.dataset.theme);
themeToggle.addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark',true));
window.addEventListener('storage',event=>{if(event.key==='opc-display-theme')applyTheme(event.newValue);});
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const external=(url,label,cls='')=>`<a href="${escape(url)}" target="_blank" rel="noopener noreferrer" class="${cls}">${label}</a>`;
const rules=config.community.experienceRules;
const quota=rules.dailyQuotaConfirmed && Number.isInteger(rules.dailyQuota) && rules.dailyQuota>0 ? `每天限量${rules.dailyQuota}个名额，` : '通过专属邀请，';
$('#community-entry-description').textContent=`看看真实的实战内容，找到值得学习的方法。${quota}可领取七天免费会员体验。`;
$('#member-note').textContent=config.community.memberCountText;
document.querySelectorAll('[data-site-name]').forEach(el=>el.textContent=config.site.name);
document.querySelectorAll('[data-site-domain]').forEach(el=>el.textContent=config.site.plannedDomain);
const articleItems=config.featuredArticles.filter(a=>a.title&&a.summary&&a.featuredArticleUrl&&a.featuredArticleUrl!==config.community.communityExperienceInvitationUrl&&/^https:\/\//.test(a.featuredArticleUrl));
const scenarios=[
{symbol:'A · 网站',title:'搭建自己的网站',description:'展示教程、作品、工具或服务，积累内容和访问入口。',role:'提供网页访问与后端运行环境；纯静态页面也可选择静态托管。',example:'把作品介绍和服务说明做成一个可分享的页面。',start:'先整理三件代表作品，请几位朋友试用并检查信息是否清楚。'},
{symbol:'B · AI 应用',title:'部署 AI 应用与知识库',description:'运行应用后端，调用模型 API，制作针对具体需求的小工具或资料问答应用。',role:'运行应用、管理资料与访问权限，在后端安全调用模型 API。',example:'做一个只围绕产品手册回答问题的资料助手。',start:'先用少量资料测试常见问题，检查答案和引用是否准确。'},
{symbol:'C · 自动化',title:'运行自动化工作流',description:'执行定时整理、报告生成、通知等任务，减少重复操作。',role:'电脑关机后，仍能执行定时任务、记录运行结果与异常。',example:'每天整理表格数据，生成一份待你审核的摘要。',start:'选一个重复任务，先手动确认输入、输出和审核方式。'},
{symbol:'D · 服务交付',title:'支持副业服务交付',description:'为客户运行网站、小工具或自动化流程，让已经验证的服务稳定交付。',role:'承载服务、维护访问入口，并配合备份和监控保障交付。',example:'为一家小店维护产品展示页和预约信息收集工具。',start:'先与一位真实用户明确需求，用小范围交付验证效果。'}
];
function serverContent(){return `
<div class="read-lead">当你想把一个网站真正上线，让一个 AI 应用随时可以访问，或者让自动化任务在电脑关机后继续运行，云服务器就有了具体用途。</div>
<p style="margin-top:15px">它可以成为你实践 AI、运行项目、积累作品的工作空间。先想清楚自己要做什么，再选择合适的工具与配置。</p>
<aside class="quiet-note">纯静态网站也可以使用静态托管；需要常驻任务、自定义后端或更自由的部署环境时，服务器更值得考虑。</aside>
<section class="read-section" id="server-uses" tabindex="-1"><h3><span class="chapter-number">01</span>可以用它做什么</h3><p>从一个能说清楚的用途开始，让工具服务于你的需求。</p><div class="scenario-grid">${scenarios.map(s=>`<div class="read-card"><span class="card-symbol">${s.symbol}</span><h4>${s.title}</h4><p>${s.description}</p><p><strong>服务器承担：</strong>${s.role}</p><p><strong>小例子：</strong>${s.example}</p><p><strong>从这里验证：</strong>${s.start}</p></div>`).join('')}</div><aside class="quiet-note">普通 CPU 服务器适合运行网站、应用和调用模型 API。自行部署大型模型时，需要另外评估 GPU、显存和预算；模型 API、域名等也可能产生独立费用。</aside></section>
<section class="read-section" id="server-practice" tabindex="-1"><h3><span class="chapter-number">02</span>如何开始实践</h3><p>先完成一件小事，观察它有没有帮助到真实的人。</p><div class="route"><span>确定需求</span><i>→</i><span>做出最小可用版本</span><i>→</i><span>选择部署方式</span><i>→</i><span>上线测试</span><i>→</i><span>收集反馈</span><i>→</i><span>持续改进</span></div><div class="practice"><h4>你的第一个网站</h4><ol><li>确定用途：它是作品介绍、内容分享，还是一个小工具？</li><li>整理内容：先准备核心介绍、代表作品与联系信息。</li><li>制作页面：让访客能看懂你提供什么、如何使用。</li><li>选择部署方式：静态页面可用静态托管；有后端再评估服务器。</li><li>上线测试：在电脑和手机检查访问、链接与表单。</li><li>根据反馈改进：从访客真正需要的信息开始完善。</li></ol></div><div class="practice"><h4>你的第一条自动化流程</h4><ol><li>选择一项经常重复、规则相对明确的任务。</li><li>明确输入与输出：数据从哪里来，结果交给谁？</li><li>先手动跑通，确认每一步及结果是否可靠。</li><li>逐步加入自动化，为任务安排适合的运行环境。</li><li>保留人工审核与异常提醒，持续检查运行记录。</li></ol></div><aside class="quiet-note">自动化仍需必要审核、权限管理与维护。收入来自真实需求和可靠交付，服务器不会自动赚钱。</aside></section>
<section class="read-section" id="server-choice" tabindex="-1"><h3><span class="chapter-number">03</span>轻量应用服务器，还是云服务器？</h3><div class="comparison-grid"><div class="read-card"><span class="card-symbol">简单项目的起点</span><h4>轻量应用服务器</h4><p>常见为套餐形式，适合个人网站、小型应用与入门实践。</p><p><strong>重点看：</strong>流量、带宽、镜像与套餐限制。</p></div><div class="read-card"><span class="card-symbol">更明确的部署需求</span><h4>云服务器</h4><p>配置与配套能力通常更灵活，适合有明确网络、扩容或复杂部署需求的项目。</p><p><strong>重点看：</strong>资源配置、网络能力、扩容方式与总成本。</p></div></div><p style="margin-top:16px">简单项目可以先比较轻量套餐；有明确复杂需求再考虑云服务器。具体能力以服务商产品说明为准。</p></section>
<section class="read-section" id="server-region" tabindex="-1"><h3><span class="chapter-number">04</span>先选地域，再比较方案</h3><div class="region-notes"><div><h4>主要面向大陆用户</h4><p>先结合访问体验比较大陆地域。网站部署在中国内地通常需办理适用的 ICP 备案；根据业务与访问范围，也应核查其他适用要求。</p></div><div><h4>考虑香港或海外部署</h4><p>结合用户所在地区、回国线路、带宽与实际访问速度选择。香港及海外节点通常不需中国内地 ICP 备案，但仍需遵守适用规则、服务商条款及必要的其他备案要求。</p></div></div><aside class="quiet-note">香港 / 海外方案可重点比较下方亿速云与 UCloud 的活动。不同套餐的网络线路可能不同，先测试目标用户的访问体验，再比较总成本。</aside></section>
<section class="read-section" id="server-providers" tabindex="-1"><h3><span class="chapter-number">05</span>找到适合你的活动入口</h3><p>第一次实践，可以先比较新用户优惠，用较低成本开始。购买前一起看清续费价格、地域、带宽和流量规则，避免只看首年价格。</p><div class="provider-grid">${config.providers.map(p=>`<div class="provider-card" style="--provider-dark:${escape(p.color)};--provider-light:${escape(p.lightColor)}"><div class="provider-head"><h4>${escape(p.name)}</h4><span class="region-tag">${escape(p.region)}</span></div><p>${escape(p.description)}</p><p class="focus">${escape(p.focus)}</p><p class="activity-info">${escape(p.activityInfo)}</p><div class="source-note">按实际需求比较配置与长期成本。</div>${external(p.serverActivityUrl,escape(p.button),'activity-link')}</div>`).join('')}</div><p class="small-print">产品页面价格可能有变动，具体价格与优惠以活动页面为准。 新用户购买产品价格通常较便宜，非常划算。</p><aside class="quiet-note">妥善备份网站文件、数据库与配置后，可以根据成本和需求更换服务商。迁移需要操作，部分产品有相关限制；新用户优惠应以各活动的真实资格与规则为准。</aside></section>
<div class="switch-block"><p>有了运行空间，也可以继续寻找实践方法。</p><button class="text-button purple" data-open="community">了解 AI 实战社群 →</button></div>`;}
function communityContent(){return `<div class="community-intro"><p class="read-lead">工具更新很快，真正值得积累的，<br>是把工具用到具体事情里的方法。</p><p style="margin-top:19px">这个 AI 学习与实战社群，是我自己已经加入并持续学习的地方。对我而言，价值在于可以接触实战内容，少一些独自摸索，多一些可参考的思路。</p><p>${articleItems.length?'你可以先看看下面的内容，再通过我的专属邀请，':'你可以通过我的专属邀请，'}领取七天免费会员体验，判断它是否适合自己。</p><div class="community-values"><span>AI 应用</span><span>建站实践</span><span>自动化思路</span></div></div>
${articleItems.length?`<section class="read-section" id="community-articles" tabindex="-1"><h3><span class="chapter-number">01</span>精选内容预览</h3><div class="article-grid">${articleItems.map(a=>`<div class="article-card"><span class="article-tags">${(a.tags||[]).map(escape).join(' · ')}</span><h4>${escape(a.title)}</h4><p>${escape(a.summary)}</p>${external(a.featuredArticleUrl,'阅读内容 →')}<small>${escape(a.accessLabel||'')}</small></div>`).join('')}</div><p class="small-print">想进一步阅读和实践，可以通过下方专属邀请领取七天体验。</p></section>`:''}
<section class="experience-block" id="community-experience" tabindex="-1"><h3>先体验七天，<br>再判断是否适合自己</h3><p>通过下方专属邀请入口，领取七天免费会员体验，看看这里的内容与学习方式是否适合你。</p>${rules.dailyQuotaConfirmed&&rules.dailyQuota?`<p class="small-print">每天限量${escape(rules.dailyQuota)}个体验名额。</p>`:''}<div class="invitation-grid"><div class="invitation-method"><h4><span>01</span>扫描专属二维码</h4><p>扫描我提供的专属二维码添加微信，免费领7天会员，${escape(rules.benefits)}。</p><button class="qr-button" id="qr-toggle" aria-label="放大专属邀请二维码" aria-expanded="false"><img src="${escape(config.community.qrImage)}" alt="添加微信领取七天体验的专属邀请二维码" width="276" height="276" draggable="false"></button><div class="qr-caption">扫码添加微信。</div><p class="qr-hint">点击放大；手机可长按图片保存，再在微信中识别。</p></div><div class="invitation-method direct"><h4><span>02</span>直接点击领取</h4><p>点击链接，免费领7天会员，${escape(rules.benefits)}。</p>${external(config.community.communityExperienceInvitationUrl,'点击领取七天体验 →','experience-link')}<p class="process-note">进入专属邀请后，按实际流程完成领取与开通。</p></div></div>${(rules.confirmedNotes||[]).map(n=>`<p class="small-print">${escape(n)}</p>`).join('')}<p class="small-print">本站提供专属推广邀请，是否继续付费由你在体验后自行决定。</p></section><div class="switch-block"><p>想把一个想法部署上线？</p><button class="text-button" data-open="server">查看服务器实践指南 →</button></div>`;}
const dialog=$('#reader'),scroll=$('#reader-scroll'),content=$('#reader-content');
let active=null,returnFocus=null,pageY=0,observer=null,backdropDown=false;
const positions={server:0,community:0};
const chapters={server:[['server-uses','具体用途'],['server-practice','开始实践'],['server-choice','配置选择'],['server-region','地域选择'],['server-providers','活动入口']],community:[...(articleItems.length?[['community-articles','精选内容']]:[]),['community-experience','七天体验']]};
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
function remember(){if(active)positions[active]=scroll.scrollTop;}
function openReader(type){
 if(!['server','community'].includes(type))return;
 const wasOpen=dialog.open;remember();
 if(!wasOpen){returnFocus=document.activeElement;pageY=window.scrollY;Object.assign(document.body.style,{position:'fixed',top:`-${pageY}px`,left:'0',right:'0'});}
 active=type;$('#reader-title').textContent=type==='server'?'为什么你需要一台云服务器？':'AI 学习与实战社群';$('#reader-number').textContent=type==='server'?'01':'02';
 content.innerHTML=type==='server'?serverContent():communityContent();
 $('#chapter-nav').innerHTML=chapters[type].map(([id,label])=>`<button data-chapter="${id}">${label}</button>`).join('');
 if(!wasOpen)dialog.showModal();
 $('#reader-title').focus({preventScroll:true});scroll.scrollTo({top:positions[type],behavior:'instant'});
 observer?.disconnect();observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){document.querySelectorAll('[data-chapter]').forEach(b=>b.classList.toggle('active',b.dataset.chapter===e.target.id));}}},{root:scroll,rootMargin:'-5% 0px -65% 0px',threshold:0});
 content.querySelectorAll('section[id]').forEach(el=>observer.observe(el));
}
function closeReader(){if(dialog.open){remember();dialog.close();}}
dialog.addEventListener('close',()=>{observer?.disconnect();active=null;Object.assign(document.body.style,{position:'',top:'',left:'',right:''});window.scrollTo({top:pageY,behavior:'instant'});if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});});
dialog.addEventListener('cancel',e=>{e.preventDefault();closeReader();});
$('#close-reader').addEventListener('click',closeReader);
function outside(e){const r=dialog.getBoundingClientRect();return e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom;}
dialog.addEventListener('pointerdown',e=>{backdropDown=e.target===dialog&&outside(e);});
dialog.addEventListener('click',e=>{if(backdropDown&&e.target===dialog&&outside(e))closeReader();backdropDown=false;});
// 原生 dialog 的模态语义加上显式首尾循环，保证键盘焦点留在面板。
dialog.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const items=[...dialog.querySelectorAll('button,a[href]')].filter(el=>el.getClientRects().length);const first=items[0],last=items.at(-1);if(e.shiftKey&&(document.activeElement===first||document.activeElement===$('#reader-title'))){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}});
document.addEventListener('click',e=>{
 const opener=e.target.closest('[data-open]');if(opener){openReader(opener.dataset.open);return;}
 const chapter=e.target.closest('[data-chapter]');if(chapter){const target=document.getElementById(chapter.dataset.chapter);if(target){target.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});target.focus({preventScroll:true});}return;}
 const qr=e.target.closest('#qr-toggle');if(qr){const expanded=qr.getAttribute('aria-expanded')!=='true';qr.classList.toggle('expanded',expanded);qr.setAttribute('aria-expanded',String(expanded));qr.setAttribute('aria-label',expanded?'缩小专属邀请二维码':'放大专属邀请二维码');}
});
$('#start-button').addEventListener('click',()=>{const target=$('#starting-points');target.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});target.focus({preventScroll:true});});
const feedback={website:'先做一个介绍技能与作品的简单页面，再选择适合的上线方式。',automation:'选一项经常重复的任务，先跑通一个带人工审核的自动化流程。',service:'找到一个具体问题，用小范围交付验证需求，再考虑扩大。'};
document.querySelectorAll('[data-goal]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-goal]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));$('#goal-feedback').textContent=feedback[btn.dataset.goal];$('#goal-result').hidden=false;}));
const hover=window.matchMedia('(hover:hover) and (pointer:fine)');
document.querySelectorAll('.entry-card').forEach(card=>{let frame;card.addEventListener('pointermove',e=>{if(!hover.matches||reduced.matches)return;cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;card.style.setProperty('--mx',`${x*100}%`);card.style.setProperty('--my',`${y*100}%`);card.style.setProperty('--rx',`${(y-.5)*-3}deg`);card.style.setProperty('--ry',`${(x-.5)*3}deg`);});});card.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg');});});
})();
