window.onload = move()

function move() {
  var container = document.getElementById('container2')

  var width = 0
  var id = setInterval(frame, 50)
  function frame() {
    if (width == 0) {
      clearInterval(id)
      container.style.display = 'none'
      githubFunction()
    } else {
      width++
      container.style.width = width + '%'
    }
  }
}
function githubFunction() {
  let persons = [
    {
      name: '王锋',
      nickName: '小王',
      homeTown: '江苏徐州',
      birthday: '1999.02.23',
      constellation: '双鱼',
      phone: '14752191369',
      QQ: '1244353765',
      mailbox: '1244353765@qq.com',
      avatar: 'http://ww1.sinaimg.cn/large/0084EtCNgy1gcd67rpn01j30hs0hsgmi.jpg',
      github: 'https://github.com/wangfeng351',
      hobby: '编程，听歌，吃，运动',
      sign: '不能输给自己！！！',
      color: '#eeee'
    },
    {
      name: '颜子皓',
      nickName: '小颜',
      homeTown: '江苏无锡',
      birthday: '2000.03.06',
      constellation: '双鱼',
      phone: '19825088733',
      QQ: '3149991705',
      mailbox: '3149991705@qq.com',
      avatar: 'http://ww1.sinaimg.cn/large/007YO3iLgy1gcd72p3hmxj30i60c90tr.jpg',
      github: 'https://github.com/yzh888',
      hobby: '音乐，电影，捉蜂王',
      sign: '要想生活过得去'
    },
    {
      name: '刘恋',
      nickName: '花无泪',
      homeTown: '贵州毕节',
      birthday: '1996.09.15',
      constellation: '天秤',
      phone: '19850099791',
      QQ: '2313673906',
      mailbox: '2313673906@qq.com',
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/img/timg.jpg',
      github: 'https://github.com/ll2313673906',
      hobby: '吃饭，看电影',
      sign: '就喜欢你看不惯我，又灭不掉我的样子'
    },
    {
      name: '席光平',
      nickName: '糖醋排骨',
      homeTown: '安徽阜阳',
      birthday: '1999.08.18',
      constellation: '处女',
      phone: '18851137516',
      QQ: '2816540069',
      mailbox: '2816540069@qq.com',
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/logo/02ecdfe9-e0f2-442b-beaf-f95010bfbb4b.jpg',
      github: 'https://github.com/CodeJasmine',
      hobby: '吃，喝，rush B',
      sign: '没有理所当然的成功，也没有毫无道理的平庸'
    },
    {
      name: '曹暝桕',
      nickName: '',
      homeTown: '',
      birthday: '',
      constellation: '',
      phone: '',
      QQ: '',
      mailbox: '',
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/img/timg%20%282%29.jpg',
      github: '',
      hobby: '',
      sign: ''
    },
    {
      name: '陶永新',
      nickName: 'Tao.',
      homeTown: '江苏扬州',
      birthday: '200.01.01',
      constellation: '摩羯',
      phone: '17826012341',
      QQ: '1427177855',
      mailbox: 'tyxu1427177855@126.com',
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/img/timg%20%283%29.jpg',
      github: 'https://github.com/taoyongxin',
      hobby: '篮球、追剧',
      sign: 'Kepp Calm and Carry On（保持冷静，继续前行）'
    },
    {
      name: '侯粤嘉',
      nickName: '无梦相赠',
      homeTown: '湖南郴州',
      birthday: '2000.09.01',
      constellation: '处女',
      phone: '18851853957',
      QQ: '2298090131',
      mailbox: '2298090131@qq.com',
      avatar: 'https://avatar-cdn.shimo.im/IZuPjlOpBRUTU7oZ/bluetian.jpg__avatar',
      github: 'https://github.com/hyj200091',
      hobby: '',
      sign: ''
    },
    {
      name: '曾传志',
      nickName: '夢想，理應飛翔',
      homeTown: '江西赣州',
      birthday: '1999.10.18',
      constellation: '天秤',
      phone: '18851697603',
      QQ: '599984243',
      mailbox: '599984243@qq.com',
      avatar: 'https://ae01.alicdn.com/kf/U84c4005a0b274d39901e3b7ca2b37f52p.png',
      github: 'https://github.com/czzeng-code',
      hobby: '羽毛球，音乐, 电影',
      sign: '年轻就要醒着拼'
    },
    {
      name: '管江宇',
      nickName: 'Faith',
      homeTown: '江苏南京',
      birthday: '2000.06.19',
      constellation: '双子',
      phone: '18851862391',
      QQ: '2501015371',
      mailbox: 'gjy0619@126.com',
      avatar: 'https://qlogo4.store.qq.com/qzone/2501015371/2501015371/100?1556427576',
      github: 'https://github.com/2501015371',
      hobby: '篮球，健身，游戏',
      sign: '青春在于拼搏'
    },
    {
      name: '韩源',
      nickName: '玛卡巴卡',
      homeTown: '山西忻州',
      birthday: '2000.02.06',
      constellation: '水瓶',
      phone: '18851860919',
      QQ: '2641013950',
      mailbox: '2641013950@qq.com',
      avatar: 'https://avatars1.githubusercontent.com/u/51700682?s=60&v=4',
      github: 'https://github.com/Macabaka',
      hobby: '吃饭、睡觉、打豆豆',
      sign: '丰碑无语，行胜于言'
    },
    {
      name: '孙文龙',
      nickName: 'Kuzma',
      homeTown: '江苏淮安',
      birthday: '2000.07.09',
      constellation: '巨蟹',
      phone: '18805167526',
      QQ: '2673327266',
      mailbox: '2673327266@qq.com',
      avatar: 'https://avatars1.githubusercontent.com/u/55436087?s=60&v=4',
      github: 'https://github.com/Kuzma77',
      hobby: '篮球，音乐，摄影，电影',
      sign: '路还很长，天总会亮。'
    },
    {
      name: '赵玉杰',
      nickName: 'Libra',
      homeTown: '江苏南京',
      birthday: '2000.02.28',
      constellation: '天秤',
      phone: '18852017973',
      QQ: '1836686674',
      mailbox: '1836686674@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/55378225?s=460&v=4',
      github: 'https://github.com/LibraZYJ',
      hobby: '吃饭、睡觉、打豆豆',
      sign: '我就站在你面前，你看我几分像从前！'
    },
    {
      name: '谢晓茜',
      nickName: ' 原味冰淇淋',
      homeTown: '重庆',
      birthday: '1999.04.30',
      constellation: '金牛',
      phone: '17783208600',
      QQ: '2320832818',
      mailbox: '2320832818@qq.com',
      avatar: 'https://avatars1.githubusercontent.com/u/55443431?s=460&v=4',
      github: 'https://github.com/xiexiaoqian',
      hobby: '乒乓球，电影，户外运动',
      sign: 'Beasty'
    },
    {
      name: '杨晶',
      nickName: '毛毛',
      homeTown: '江苏盐城',
      birthday: '1997.12.29',
      constellation: '摩羯',
      phone: '18452555712',
      QQ: '846272692',
      mailbox: ' 846272692@qq.com',
      avatar: 'https://avatars3.githubusercontent.com/u/45115317?s=460&v=4',
      github: 'https://github.com/yj846272692',
      hobby: '骑行、音乐、书法',
      sign: ''
    },
    {
      name: '杨阳',
      nickName: '杨阳',
      homeTown: '江苏南通',
      birthday: '2000.04.28',
      constellation: '金牛',
      phone: '17625835438',
      QQ: '1294898797',
      mailbox: '1294898797@qq.com',
      avatar: 'https://s2.ax1x.com/2020/02/29/3sH5vT.jpg',
      github: 'https://github.com/RuErJieFei',
      hobby: '看电视、看别人的电视',
      sign: '别太一样'
    },
    {
      name: '王林',
      nickName: '林林',
      homeTown: '四川自贡',
      birthday: '1999.01.21',
      constellation: '水瓶',
      phone: '18094247962',
      QQ: '1987153442',
      mailbox: '1987153442@qq.com',
      avatar: 'https://p1.pstatp.com/large/pgc-image/1539249812874260d011c57',
      github: 'https://github.com/wanglin1987153442',
      hobby: '运动，听歌',
      sign: '就这？就这？就这？就这！'
    },
    {
      name: '苏玉溪',
      nickName: '苏先森',
      homeTown: '广西玉林',
      birthday: '1999.04.12',
      constellation: '白羊座',
      phone: '13457513856',
      QQ: '2296887348',
      mailbox: '2296887348@qq.com',
      avatar: '',
      github: '',
      hobby: '听歌，看电影',
      sign: ''
    },

    {
      name: '袁腾飞',
      nickName: 'Rapids',
      homeTown: ' 安徽阜阳',
      birthday: ' 1998.07.30',
      constellation: ' 狮子座',
      phone: '18851856989',
      QQ: '798763046',
      mailbox: ' 798763046@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/44634313?s=460&v=4',
      github: 'https://github.com/RRapids',
      hobby: '打球',
      sign: '若青春只顾疯狂，卑微就越来越近'
    },
    {
      name: '张浩杰',
      nickName: '寻寻觅',
      homeTown: '山西晋城',
      birthday: '1999.05.11',
      constellation: '巨蟹座',
      phone: '18851999738',
      QQ: '1224178565',
      mailbox: '1224178565@qq.com',
      avatar: 'https://github.com/account',
      github: 'https://github.com/GitHub-fly',
      hobby: '什么也不懂，什么都不会',
      sign: '寻寻觅觅，冷冷清清'
    },
    {
      name: '尚宇驰',
      nickName: '盏茶浅抿',
      homeTown: '江苏徐州',
      birthday: '2000.04.02',
      constellation: '白羊座',
      phone: '18094246920',
      QQ: '351234359',
      mailbox: '351234359@qq.com',
      avatar: 'https://avatars3.githubusercontent.com/u/55419799?s=400&u=06400cc24a3dd8b97880a631daad51e37a6792d8&v=4',
      github: 'https://github.com/ycshang123',
      hobby: '追剧、编程、电影、音乐',
      sign: '少年抬头，仰望明天。仰望，就有希望。'
    },
    {
      name: '许源',
      nickName: 'Away',
      homeTown: '重庆酉阳',
      birthday: '2000.2.15',
      constellation: '水瓶座',
      phone: '15025762624',
      QQ: '2414704205',
      mailbox: '2414704205@qq.com',
      avatar:
        'https://lh3.googleusercontent.com/proxy/0Cr5yHQIaOG51i1Vbp9iw3iRcRF-KN0bex1oSXdGTbCc9tITgfpjo25SJZ9HV9qIywnmOeCm-jG-gKBHeKF9nL8eoTBX3Pub76BvQqeenl5t1VCGLus',
      github: 'https://github.com/xuyuan-215',
      hobby: '音乐， 篮球',
      sign: '热爱漫无边际，生活自有分寸'
    },
    {
      name: '黄敬理',
      nickName: '小黄',
      homeTown: '广西灵山',
      birthday: '1999.01.01',
      constellation: '天秤座',
      phone: '18278743357',
      QQ: '2368046759',
      mailbox: '2368046759@qq.com',
      avatar: 'https://aadsadas.oss-cn-beijing.aliyuncs.com/img/avatar.jpg',
      github: 'https://github.com/huangjingliANBAO',
      hobby: '看足球 刷小视频',
      sign: '有事情做真好'
    },

    {
      name: '倪涛涛',
      nickName: '事在人为',
      homeTown: '江苏徐州',
      birthday: '1999.05.27',
      constellation: '双子座',
      phone: '18851855106',
      QQ: '1914866205',
      mailbox: '1914866205@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/58495771?s=460&v=4',
      github: 'https://github.com/1914866205',
      hobby: '学习，跑步，聊天',
      sign: '事在人为'
    },
    {
      name: '黄启佳',
      nickName: '小半吻',
      homeTown: '广西桂林',
      birthday: '19991117',
      constellation: '天枰座',
      phone: '19850099797',
      QQ: '1559022933',
      mailbox: '1559022933@qq.com',
      avatar:
        'http://a1.qpic.cn/psc?/V14UV0uv2eU11o/PBfbIKZtAJlvfOqE04IdJdkm*OHGUOxHOupIWolpLbpoKYA0H4N1t*ptZK2ug5qZtALBR9OHsTEOWFRCRZd4yg!!/c&ek=1&kp=1&pt=0&bo=lAOVAwAAAAARFyE!&tl=1&vuin=1559022933&tm=1582952400&sce=60-2-2&rf=0-0',
      github: 'https://github.com/CHINAHUANGQIJIA',
      hobby: '音乐，美术，鼓乐，球类运动',
      sign: '公平'
    },
    {
      name: '秦健',
      nickName: '',
      homeTown: '',
      birthday: '',
      constellation: '',
      phone: '',
      QQ: '',
      mailbox: '',
      avatar: '',
      github: '',
      hobby: '',
      sign: ''
    },
    {
      name: '陈蓉琪',
      nickName: 'mob',
      homeTown: '湖南衡阳',
      birthday: '2001.2.15',
      constellation: '水瓶座',
      phone: '18851699003',
      QQ: '2631315464',
      mailbox: '2631315464@qq.com',
      avatar:
        'http://m.qpic.cn/psc?/V12hsrLn2axcNX/7o.xLwnHK.dZGyBaILrm92EZCsH0OVZ*zo26brg.RF1iWSGUi0sM.j3n*KIlOCSLIQfKQm1eGD.YX9mTL0jrMbwLMt5I9bgJkpGDH5cuMSk!/b&bo=vALeAwAAAAARB1M!&rf=viewer_4',
      github: 'https://github.com/1802343228',
      hobby: ' 动漫 游戏 音乐 jk制服',
      sign: '走出舒适圈'
    },
    {
      name: '郁杰原',
      nickName: '枫津栈',
      homeTown: '江苏盐城',
      birthday: '2000.01.22',
      constellation: '水瓶座',
      phone: '15370000688',
      QQ: '2641617428',
      mailbox: '2641617428@qq.com',
      avatar: 'http://pic1.zhimg.com/50/v2-60957c76fd38d48903276445b27ac714_hd.jpg',
      github: 'https://github.com/yjyqq123',
      hobby: '吃喝玩乐',
      sign: '开心每一天'
    },
    {
      name: '田震',
      nickName: 'Crihero_',
      homeTown: '山西吕梁',
      birthday: '1998.11.06',
      constellation: '天蝎座',
      phone: '19850099292',
      QQ: '1299088269',
      mailbox: 'zhent1106@163.com',
      avatar: 'https://uploader.shimo.im/f/IZuPjlOpBRUTU7oZ.jpg!avatar',
      github: 'https://github.com/zhent1106',
      hobby: '听歌，阅读，创新',
      sign: '山川湖泊和我都在看你'
    },
    {
      name: '王欢乐',
      nickName: 'Sunny',
      homeTown: '甘肃平凉',
      birthday: '1998.08.07',
      constellation: '处女座',
      phone: '18805162578',
      QQ: '1162608075',
      mailbox: '1162608075@qq.com',
      avatar:
        'https://upload.jianshu.io/users/upload_avatars/14351850/e3e19f54-57bf-4427-b12a-d7d1d563e20c?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
      github: 'https://github.com/WHL1998w',
      hobby: '阅读，听歌，追剧',
      sign: '你就是你，不一样的烟火'
    },
    {
      name: '王登科',
      nickName: 'For',
      homeTown: '山西吕梁',
      birthday: '1997.5.20',
      constellation: '巨蟹座',
      phone: '18851998839',
      QQ: '1091886414',
      mailbox: '1091886414@qq.com',
      avatar: '',
      github: 'https://github.com/wangDk199',
      hobby: '打球、编程',
      sign: ''
    },
    {
      name: '郑亮',
      nickName: '郑亮',
      homeTown: '安徽宿州',
      birthday: '1999.2.8',
      constellation: '水瓶座',
      phone: '18851697510',
      QQ: '1945256212',
      mailbox: '1945256212@qq.com',
      avatar: 'https://avatars3.githubusercontent.com/u/55389274?s=460&v=4',
      github: 'https://github.com/ZL521990208',
      hobby: '听歌、电影',
      sign: ''
    },

    {
      name: '位哲武',
      nickName: '隨颩洏萣',
      homeTown: '江苏徐州',
      birthday: '2000.06.06',
      constellation: '双子座',
      phone: '13013947768',
      QQ: '2316860587',
      mailbox: '2316860587@qq.com',
      avatar: 'https://avatars2.githubusercontent.com/u/43782207?s=460&v=4',
      github: 'https://github.com/weizhewu',
      hobby: '轻音乐、阅读',
      sign: '永远不要跟傻瓜吵架，因为别人会分不清到底谁是傻瓜'
    },
    {
      name: '岳凡',
      nickName: '',
      homeTown: '',
      birthday: '',
      constellation: '',
      phone: '',
      QQ: '',
      mailbox: '',
      avatar: '',
      github: '',
      hobby: '',
      sign: ''
    },
    {
      name: '丁怡凡',
      nickName: '唯一',
      homeTown: '山西运城',
      birthday: '2000.10.09',
      constellation: '天蝎座',
      phone: '18851862081',
      QQ: '510040515',
      mailbox: '510040515@qq.com',
      avatar: 'http://m.imeitou.com/uploads/allimg/2020022416/xcjlklpqncw-lp.jpeg',
      github: 'https://github.com/dyf-yifan',
      hobby: '阅读、音乐、电影',
      sign: '甩掉忧伤找回快乐@'
    }
  ]
  let container = document.getElementById('container')

  function myFunction(item, index) {
    let person = persons[index]

    let card = `<div>

   <div class ="picture">
    <img  src="${person.avatar}"/></div>

    </div>`

    let content = document.createElement('div')

    content.innerHTML = card

    container.appendChild(content)
  }
  persons.forEach(myFunction)
}