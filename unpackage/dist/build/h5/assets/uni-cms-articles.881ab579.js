const e={user_id:{rules:[{required:!0},{format:"string"}],defaultValue:{$env:"uid"},label:"作者"},category_id:{rules:[{format:"string"}],title:"分类",label:"分类"},content:{rules:[{required:!0}],label:"文章内容",title:"文章内容"},excerpt:{rules:[{format:"string"}],label:"摘要",title:"文章摘录"},article_status:{rules:[{format:"int"},{range:[{value:0,text:"草稿箱"},{value:1,text:"已发布"}]}],title:"文章状态",defaultValue:0,label:"文章状态"},view_count:{rules:[{format:"int"}],title:"阅读数量",label:"阅读数量"},is_sticky:{rules:[{format:"bool"}],title:"是否置顶",label:"是否置顶"},is_essence:{rules:[{format:"bool"}],title:"阅读加精",label:"阅读加精"},comment_status:{rules:[{format:"int"},{range:[{value:0,text:"关闭"},{value:1,text:"开放"}]}],title:"开放评论",label:"开放评论"},thumbnail:{rules:[{format:"string"},{required:!0}],label:"封面大图",title:"封面大图"},publish_date:{rules:[{format:"timestamp"}],title:"发表时间",defaultValue:{$env:"now"},label:"发表时间"}},t={article_status_valuetotext:{0:"草稿箱",1:"已发布"},comment_status_valuetotext:{0:"关闭",1:"开放"}};function l(e,t){let l={};for(let a in e){let{type:r,value:s}=e[a];switch(r){case"search":"string"==typeof s&&s.length&&(l[a]=new RegExp(s));break;case"select":if(s.length){let e=[];for(let l of s)e.push(t.eq(l));l[a]=t.or(e)}break;case"range":if(s.length){let e=s[0],r=s[1];l[a]=t.and([t.gte(e),t.lte(r)])}break;case"date":if(s.length){let[e,r]=s,i=new Date(e),u=new Date(r);l[a]=t.and([t.gte(i),t.lte(u)])}break;case"timestamp":if(s.length){let[e,r]=s;l[a]=t.and([t.gte(e),t.lte(r)])}}}return l}export{t as e,l as f,e as v};