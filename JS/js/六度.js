muban.首图2.二级.desc = '.pic-text:eq(0)&&Text;;;.data--span:eq(0)&&Text;.data--span:eq(1)&&Text';
muban.首图2.二级.tabs = '.nav-tabs li';
var rule={
    title:'六度TV',
    模板:'首图2',
    // host:'http://6d.zzdacou.cn',
    host:'https://6d.zzdacou.com',
    // url:'/whole/fyclass_______0_id_fypage.html',
    url:'/whole/fyclassfyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'_{{fl.area}}_{{fl.class}}_{{fl.lang}}_{{fl.year}}___0_{{fl.by}}__fypage',
    filter:{
        "1":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"警匪片","v":"警匪片"},{"n":"恐怖片","v":"恐怖片"},{"n":"惊悚片","v":"惊悚片"},{"n":"悬疑片","v":"悬疑片"},{"n":"科幻片","v":"科幻片"},{"n":"战争片","v":"战争片"},{"n":"动作片","v":"动作片"},{"n":"喜剧片","v":"喜剧片"},{"n":"爱情片","v":"爱情片"},{"n":"微电影","v":"微电影"},{"n":"纪录片","v":"纪录片"},{"n":"剧情片","v":"剧情片"},{"n":"其他片","v":"其他片"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"台语","v":"台语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"其他","v":"其他"}]},{"key":"by","name":"排序","value":[{"n":"按添加","v":"addtime"},{"n":"按时间","v":"id"},{"n":"按人气","v":"hits"}]}],
        "2":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"国产剧","v":"国产剧"},{"n":"日韩剧","v":"日韩剧"},{"n":"欧美剧","v":"欧美剧"},{"n":"海外剧","v":"海外剧"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"台语","v":"台语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"其他","v":"其他"}]},{"key":"by","name":"排序","value":[{"n":"按添加","v":"addtime"},{"n":"按时间","v":"id"},{"n":"按人气","v":"hits"}]}],
        "3":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"国产动漫","v":"国产动漫"},{"n":"日韩动漫","v":"日韩动漫"},{"n":"欧美动漫","v":"欧美动漫"},{"n":"动画片","v":"动画片"},{"n":"动漫片","v":"动漫片"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"台语","v":"台语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"其他","v":"其他"}]},{"key":"by","name":"排序","value":[{"n":"按添加","v":"addtime"},{"n":"按时间","v":"id"},{"n":"按人气","v":"hits"}]}],
        "4":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"大陆综艺","v":"大陆综艺"},{"n":"日韩综艺","v":"日韩综艺"},{"n":"欧美综艺","v":"欧美综艺"},{"n":"海外综艺","v":"海外综艺"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"台语","v":"台语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"其他","v":"其他"}]},{"key":"by","name":"排序","value":[{"n":"按添加","v":"addtime"},{"n":"按时间","v":"id"},{"n":"按人气","v":"hits"}]}],
        "5":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"警匪片","v":"警匪片"},{"n":"恐怖片","v":"恐怖片"},{"n":"惊悚片","v":"惊悚片"},{"n":"悬疑片","v":"悬疑片"},{"n":"科幻片","v":"科幻片"},{"n":"战争片","v":"战争片"},{"n":"动作片","v":"动作片"},{"n":"喜剧片","v":"喜剧片"},{"n":"爱情片","v":"爱情片"},{"n":"微电影","v":"微电影"},{"n":"纪录片","v":"纪录片"},{"n":"剧情片","v":"剧情片"},{"n":"其他片","v":"其他片"},{"n":"国产剧","v":"国产剧"},{"n":"港台剧","v":"港台剧"},{"n":"日韩剧","v":"日韩剧"},{"n":"欧美剧","v":"欧美剧"},{"n":"海外剧","v":"海外剧"},{"n":"国产动漫","v":"国产动漫"},{"n":"港台动漫","v":"港台动漫"},{"n":"日韩动漫","v":"日韩动漫"},{"n":"欧美动漫","v":"欧美动漫"},{"n":"动画片","v":"动画片"},{"n":"动漫片","v":"动漫片"},{"n":"大陆综艺","v":"大陆综艺"},{"n":"港台综艺","v":"港台综艺"},{"n":"日韩综艺","v":"日韩综艺"},{"n":"欧美综艺","v":"欧美综艺"},{"n":"海外综艺","v":"海外综艺"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"台语","v":"台语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"其他","v":"其他"}]},{"key":"by","name":"排序","value":[{"n":"按添加","v":"addtime"},{"n":"按时间","v":"id"},{"n":"按人气","v":"hits"}]}],
        "6":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"警匪片","v":"警匪片"},{"n":"恐怖片","v":"恐怖片"},{"n":"惊悚片","v":"惊悚片"},{"n":"悬疑片","v":"悬疑片"},{"n":"科幻片","v":"科幻片"},{"n":"战争片","v":"战争片"},{"n":"动作片","v":"动作片"},{"n":"喜剧片","v":"喜剧片"},{"n":"爱情片","v":"爱情片"},{"n":"微电影","v":"微电影"},{"n":"纪录片","v":"纪录片"},{"n":"剧情片","v":"剧情片"},{"n":"其他片","v":"其他片"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"台语","v":"台语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"其他","v":"其他"}]},{"key":"by","name":"排序","value":[{"n":"按添加","v":"addtime"},{"n":"按时间","v":"id"},{"n":"按人气","v":"hits"}]}],
        "7":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"国产剧","v":"国产剧"},{"n":"日韩剧","v":"日韩剧"},{"n":"欧美剧","v":"欧美剧"},{"n":"海外剧","v":"海外剧"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"台语","v":"台语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"其他","v":"其他"}]},{"key":"by","name":"排序","value":[{"n":"按添加","v":"addtime"},{"n":"按时间","v":"id"},{"n":"按人气","v":"hits"}]}],
        "8":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"国产动漫","v":"国产动漫"},{"n":"日韩动漫","v":"日韩动漫"},{"n":"欧美动漫","v":"欧美动漫"},{"n":"动画片","v":"动画片"},{"n":"动漫片","v":"动漫片"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"台语","v":"台语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"其他","v":"其他"}]},{"key":"by","name":"排序","value":[{"n":"按添加","v":"addtime"},{"n":"按时间","v":"id"},{"n":"按人气","v":"hits"}]}],
        "9":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"大陆综艺","v":"大陆综艺"},{"n":"日韩综艺","v":"日韩综艺"},{"n":"欧美综艺","v":"欧美综艺"},{"n":"海外综艺","v":"海外综艺"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"更早","v":"更早"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"台语","v":"台语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"其他","v":"其他"}]},{"key":"by","name":"排序","value":[{"n":"按添加","v":"addtime"},{"n":"按时间","v":"id"},{"n":"按人气","v":"hits"}]}]
    },
    searchUrl:'/?c=search&cl=**',
    headers: {
        'User-Agent': 'PC_UA',
    },
    class_parse: '.tag-type li;a&&Text;a&&href;.*/(\\d+)~1.html',
}