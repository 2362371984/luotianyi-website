/**
 * 洛天依网站修改后的JavaScript文件
 * 包含所有修改内容的音乐数据
 */

// 修改后的音乐作品数据结构
const musicData = {
  神话曲: {
    icon: "Crown",
    description: "播放量超过1000万的传奇作品",
    color: "from-yellow-400 to-orange-500",
    songs: [
      {
        title: "权御天下",
        year: "2015",
        description: "气势恢宏的古风神曲，展现了洛天依强大的表现力",
        plays: "1400万+",
        tags: ["古风", "励志", "经典"],
        url: "https://www.bilibili.com/video/BV1fx411A7hz/"
      },
      {
        title: "普通DISCO",
        year: "2015",
        description: "现象级歌曲，让洛天依在二次元圈层名声大噪",
        plays: "2200万+",
        tags: ["电子", "流行", "经典"],
        url: "https://www.bilibili.com/video/BV1zs411S7sz/"
      },
      {
        title: "达拉崩吧",
        year: "2017",
        description: "充满魔性的神曲，展现了洛天依的可爱一面",
        plays: "1500万+",
        tags: ["可爱", "魔性", "流行"],
        url: "https://www.bilibili.com/video/BV1sx411k7ug/"
      },
      {
        title: "勾指起誓",
        year: "2019",
        description: "温柔治愈的歌曲，深受粉丝喜爱",
        plays: "1900万+",
        tags: ["温柔", "治愈", "抒情"],
        url: "https://www.bilibili.com/video/BV1Jb411U7u2/"
      },
      {
        title: "万古生香",
        year: "2020",
        description: "古典与现代完美融合的杰作",
        plays: "1100万+",
        tags: ["古风", "唯美", "经典"],
        url: "https://www.bilibili.com/video/BV1KJ411C7CW/"
      }
    ]
  },
  传说曲: {
    icon: "Music2",
    description: "播放量超过100万的经典作品",
    color: "from-blue-400 to-purple-500",
    songs: [
      {
        title: "千年食谱颂",
        year: "2012",
        description: "洛天依的经典早期作品，充满中华文化韵味",
        plays: "200万+",
        tags: ["古风", "文化", "经典"],
        url: "https://www.bilibili.com/video/BV1Jx411F7tf/"
      },
      {
        title: "三月雨",
        year: "2012",
        description: "清新淡雅的歌曲，如春雨般温柔",
        plays: "100万+",
        tags: ["清新", "抒情", "温柔"],
        url: "https://www.bilibili.com/video/BV1vx411F7Ey/"
      },
      {
        title: "66CCFF",
        year: "2012",
        description: "以洛天依代表色命名的特别歌曲",
        plays: "100万+",
        tags: ["特别", "代表作", "纪念"],
        url: "https://www.bilibili.com/video/BV1ix411F7TB/"
      },
      {
        title: "霜雪千年",
        year: "2015", // ✅ 修改1：《霜雪千年》年份改为2015年
        description: "古典美学与现代音乐的完美结合",
        plays: "500万+",
        tags: ["古风", "唯美", "深情"],
        url: "https://www.bilibili.com/video/BV1es41127Fd/"
      },
      {
        title: "珍珠",
        year: "2025", // ✅ 修改2：《珍珠》年份改为2025年
        description: "温柔治愈的抒情歌曲，展现洛天依细腻的情感表达",
        plays: "200万+",
        tags: ["抒情", "治愈", "温柔"],
        url: "https://www.bilibili.com/video/BV1ZuGgzgENF/"
      },
      {
        title: "纯蓝", // ✅ 新增8：传说曲加入《纯蓝》
        year: "2024",
        description: "如海水般深邃清澈的蓝色主题歌曲",
        plays: "300万+",
        tags: ["蓝色", "深情", "治愈"],
        url: "https://www.bilibili.com/video/BV1z64y1b7H4/?spm_id_from=333.337.search-card.all.click&vd_source=e017b298a3ae21a53556af0a583a9c26"
      }
    ]
  },
  精选作品: {
    icon: "Home",
    description: "其他备受喜爱的代表作品",
    color: "from-pink-400 to-red-500",
    songs: [
      {
        title: "追光使者",
        year: "2017", // ✅ 修改3：《追光使者》年份改为2017年
        description: "充满希望和正能量的励志歌曲",
        plays: "100万+",
        tags: ["励志", "正能量", "希望"],
        url: "https://www.bilibili.com/video/BV14s411Y7Y3/"
      },
      {
        title: "上山岗",
        year: "2019", // ✅ 修改4：《上山岗》年份改为2019年
        description: "充满力量感的励志歌曲，展现积极向上的精神",
        plays: "400万+",
        tags: ["励志", "力量", "积极"],
        url: "https://www.bilibili.com/video/BV1zJ411479H/"
      },
      {
        title: "蝴蝶",
        year: "2024", // ✅ 修改5：《蝴蝶》年份改为2024年
        description: "唯美梦幻的歌曲，如蝴蝶般轻盈优美",
        plays: "100万+",
        tags: ["唯美", "梦幻", "轻盈"],
        url: "https://www.bilibili.com/festival/binghuogehuimanyouji?bvid=BV1A14Se6EHy"
      },
      {
        title: "夏虫",
        year: "2021", // ✅ 修改6：《夏虫》年份改为2021年
        description: "充满夏日活力的清新歌曲",
        plays: "200万+",
        tags: ["夏日", "清新", "活力"],
        url: "https://www.bilibili.com/video/BV1Hf4y1L7MF/"
      },
      {
        title: "白鸟过河滩",
        year: "2022", // ✅ 修改7：《白鸟过河滩》年份改为2022年，播放量改为600万+
        description: "诗意深远的古风佳作，如白鸟般优雅",
        plays: "600万+",
        tags: ["古风", "诗意", "优雅"],
        url: "https://www.bilibili.com/video/BV1wT4y1k7Pw/"
      },
      {
        title: "聘书", // ✅ 新增8：精选作品加入《聘书》
        year: "2023",
        description: "充满正式感的现代流行歌曲",
        plays: "150万+",
        tags: ["现代", "流行", "正式"],
        url: "https://www.bilibili.com/festival/ltyyxj2?bvid=BV1PP9CYBEg3&spm_id_from=333.337.search-card.all.click"
      }
    ]
  }
};

// 修改后的BILIBILI链接配置
const modifiedLinks = {
  bilibiliOfficial: "https://space.bilibili.com/36081646/dynamic?spm_id_from=333.1365.list.card_avatar.click"
};

// 网站配置
const websiteConfig = {
  title: "洛天依 - Luo Tianyi",
  description: "华风夏韵，洛水天依 - 用歌声传递幸福与感动的虚拟歌手",
  keywords: "洛天依,虚拟歌手,VOCALOID,中文虚拟偶像,古风音乐",
  author: "MiniMax Agent",
  version: "2.0.0",
  lastModified: "2025-12-11"
};

// 辅助函数：格式化播放量
function formatPlayCount(count) {
  if (count >= 10000) {
    return Math.floor(count / 10000) + "万+";
  }
  return count + "+";
}

// 辅助函数：获取年份
function getYear(song) {
  return song.year;
}

// 辅助函数：验证链接
function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// 导出数据供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    musicData,
    modifiedLinks,
    websiteConfig,
    formatPlayCount,
    getYear,
    validateUrl
  };
}

// 如果在浏览器环境中，挂载到全局对象
if (typeof window !== 'undefined') {
  window.LuoTianyiData = {
    musicData,
    modifiedLinks,
    websiteConfig,
    formatPlayCount,
    getYear,
    validateUrl
  };
}

// 页面初始化脚本
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎵 洛天依网站数据已更新');
  console.log('📊 修改内容:');
  console.log('1. 《霜雪千年》年份改为2015年');
  console.log('2. 《珍珠》年份改为2025年');
  console.log('3. 《追光使者》年份改为2017年');
  console.log('4. 《上山岗》年份改为2019年');
  console.log('5. 《蝴蝶》年份改为2024年');
  console.log('6. 《夏虫》年份改为2021年');
  console.log('7. 《白鸟过河滩》年份改为2022年，播放量改为600万+');
  console.log('8. 精选作品加入《聘书》');
  console.log('9. 传说曲加入《纯蓝》');
  console.log('10. BILIBILI官网账号跳转链接已更新');
  
  // 更新页面标题
  document.title = websiteConfig.title;
});