import { Model, time } from "echarts";

export const FIRST_STATION_DATA = [
  {
    name: "成都西站",
    imgName: ["成都西站", "成都西站内部"],
    url: [
      new URL("../assets/pic/成都西.png", import.meta.url).href,
      new URL("../assets/pic/成都西站内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/成都西站/布局-暂未发布.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/成都西站/成都西站换乘.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/成都西站/成都西站模型.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/成都西站/设施-暂未发布.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "成都东站",
    imgName: ["成都东站", "成都东站内部"],
    url: [
      new URL("../assets/pic/成都东.png", import.meta.url).href,
      new URL("../assets/pic/成都东站内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/成都东站/成都东站布局.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/成都东站/成都东站换乘.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/成都东站/成都东站模型.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/成都东站/成都东站模型2.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/成都东站/成都东站模型3.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/成都东站/成都东站设施.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/成都东站/成都东站设施2.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "成都南站",
    imgName: ["成都南站", "成都南站内部"],
    url: [
      new URL("../assets/pic/成都南.png", import.meta.url).href,
      new URL("../assets/pic/成都南站内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/成都南站/成都南站布局.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/成都南站/成都南站布局2.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/成都南站/成都南站布局3.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/成都南站/成都南站布局4.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/成都南站/成都南站换乘.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/成都南站/模型-暂未发布.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/成都南站/成都南站设施.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "成都站",
    imgName: ["成都站", "成都站内部（改造中）"],
    url: [
      new URL("../assets/pic/成都站.png", import.meta.url).href,
      new URL("../assets/pic/成都站内部（改造中）.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/成都站/成都站布局.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/成都站/成都站布局2.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/成都站/成都站布局3.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/成都站/成都站换乘.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/成都站/模型-暂未发布.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/成都站/设施-暂未发布.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "重庆北站",
    imgName: ["重庆北站", "重庆北站内部"],
    url: [
      new URL("../assets/pic/重庆北.png", import.meta.url).href,
      new URL("../assets/pic/重庆北站内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/重庆北站/重庆北站布局.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/重庆北站/重庆北站布局2.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/重庆北站/重庆北站换乘.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/重庆北站/重庆北站换乘2.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/重庆北站/模型-暂未发布.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/重庆北站/重庆北站设施.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "重庆西站",
    imgName: ["重庆西站", "重庆西站内部"],
    url: [
      new URL("../assets/pic/重庆西.png", import.meta.url).href,
      new URL("../assets/pic/重庆西站内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/重庆西站/重庆西站布局.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/重庆西站/重庆西站换乘.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/重庆西站/重庆西站模型.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/重庆西站/重庆西站设施.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "上海虹桥",
    imgName: ["上海虹桥", "上海虹桥内部"],
    url: [
      new URL("../assets/pic/上海虹桥.png", import.meta.url).href,
      new URL("../assets/pic/上海虹桥内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/上海虹桥站/虹桥站布局.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/上海虹桥站/虹桥站布局2.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/上海虹桥站/虹桥站换乘.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/上海虹桥站/虹桥站换乘2.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/上海虹桥站/虹桥站模型.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/上海虹桥站/虹桥站设施1.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/上海虹桥站/虹桥站设施2.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "杭州东站",
    imgName: ["杭州东站", "杭州东站内部"],
    url: [
      new URL("../assets/pic/杭州东站.png", import.meta.url).href,
      new URL("../assets/pic/杭州东站内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/杭州东站/杭州东站布局.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/杭州东站/杭州东站换乘.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/杭州东站/杭州东站模型.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/杭州东站/杭州东站设施.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "杭州西站",
    imgName: ["杭州西站", "杭州西站内部"],
    url: [
      new URL("../assets/pic/杭州西站.png", import.meta.url).href,
      new URL("../assets/pic/杭州西站内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/杭州西站/杭州西站布局.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/杭州西站/杭州西站换乘.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/杭州西站/杭州西站模型.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/杭州西站/杭州西站模型2.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/杭州西站/杭州西站设施.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "长沙站",
    imgName: ["长沙站", "长沙站内部"],
    url: [
      new URL("../assets/pic/长沙站.png", import.meta.url).href,
      new URL("../assets/pic/长沙站内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/长沙站/布局-暂未发布.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/长沙站/换乘-暂未发布.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/长沙站/长沙站模型.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/长沙站/长沙站模型2.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/长沙站/长沙站模型3.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/长沙站/长沙站设施.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/长沙站/长沙站设施2.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "南京南站",
    imgName: ["南京南站", "南京南站内部"],
    url: [
      new URL("../assets/pic/南京南站.png", import.meta.url).href,
      new URL("../assets/pic/南京南站内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/南京南站/南京南站布局.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/南京南站/南京南站布局2.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/南京南站/南京南站换乘.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/南京南站/模型-暂未发布.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/南京南站/南京南站设施.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/南京南站/南京南站设施2.png",
          import.meta.url
        ).href,
      ],
    },
  },
  {
    name: "沙坪坝站",
    imgName: ["沙坪坝站", "沙坪坝站内部"],
    url: [
      new URL("../assets/pic/沙坪坝站.png", import.meta.url).href,
      new URL("../assets/pic/沙坪坝站内部.png", import.meta.url).href,
    ],
    imgSrc: {
      layout: [
        new URL(
          "../assets/secondPageImg/沙坪坝站/沙坪坝站布局.png",
          import.meta.url
        ).href,
      ],
      transfer: [
        new URL(
          "../assets/secondPageImg/沙坪坝站/沙坪坝换乘1.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/沙坪坝站/沙坪坝换乘2.png",
          import.meta.url
        ).href,
        new URL(
          "../assets/secondPageImg/沙坪坝站/沙坪坝换乘3.png",
          import.meta.url
        ).href,
      ],
      model: [
        new URL(
          "../assets/secondPageImg/沙坪坝站/沙坪坝站模型.png",
          import.meta.url
        ).href,
      ],
      facility: [
        new URL(
          "../assets/secondPageImg/沙坪坝站/设施-暂未发布.png",
          import.meta.url
        ).href,
      ],
    },
  },
];
export const FIRST_STATION_TEXT = [
  {
    name: "成都西站",
    text: [
      {
        title:
          "成都西站是一个集铁路、公交、地铁、有轨电车为一体的综合性区域交通 ",
      },
      {
        title:
          "铁路（运营动车组线路）：4 个站台、7 个站台面、8 条站线，主要途经线",
      },
      {
        title:
          "路有川藏铁路成雅段、成都铁路枢纽西环铁路，并规划成灌铁路联络线等。",
      },
      {
        title: "轨道交通：包括成都地铁 4 号线、9 号线，及有轨电车蓉 2 号线。",
      },
      {
        title:
          "公交：包括 32 路、35 路、89 路、142 路、226B 路、228 路、338 路、772 路、904 路、G30 路、G101 路、G102 路、6 路等 13 条线路。",
      },
    ],
  },
  {
    name: "成都东站",
    text: [
      {
        title: "占地面积:86.7万平方米",
      },
      {
        title: "总建筑面积:22万平方米",
      },
      {
        title: "客运用房面积:10.7万平方米",
      },
      {
        title: "进站口数量:4个",
      },
      {
        title: "日均铁路客运量:9 万人次",
      },
      {
        title: "步行道长度:82298米",
      },
      {
        title: "步行道覆盖率:69.02%",
      },
      {
        title: "站区1500米的容积率:0.028",
      },
      {
        title: "地铁站密度（个/平方千米）:0.00005",
      },
      {
        title: "公交站密度（个/平方千米）:0.0045",
      },
      {
        title: "路网密度（千米/平方千米）:11.28",
      },
      {
        title: "交叉口密度（个/平方千米）:86.8",
      },
      {
        title: "站区500米的容积率:0.047",
      },
      {
        title: "建筑密度:0.003",
      },
      {
        title: "地铁站密度（个/平方千米）:0.00014",
      },
      {
        title: "公交站密度（个/平方千米）:0.0097",
      },
      {
        title: "路网密度（千米/平方千米）:12.07",
      },
      {
        title: "交叉口密度（个/平方千米）:87.9",
      },
    ],
  },
  {
    name: "成都南站",
    text: [
      {
        title: "占地面积：8092.43平方米,站房总建筑面积：13997 ㎡。",
      },
      {
        title: "日旅客发送量： 47931 人;客流：87.33%高铁、12.67%非高铁",
      },
      {
        title:
          "铁路（运营动车组线路）：共有 5 个站台、11 条股道线，主要途径线路有成昆铁路、成绵乐城际铁路、成都铁路枢纽西环线等。",
      },
      {
        title:
          "轨道交通：包括成都地铁 1 号线、7 号线、18 号线，是三条线路的换乘站。",
      },
      {
        title:
          "公交线路：包括 16 路、112 路、121 路、300 路、304 路、49 路、501 路、 806B路、806 路、809 路、815A 路、815 路、816 路、824 路、90 路、99 路等16条线路。",
      },
      {
        title: "步行道长度：69851米;步行道覆盖率：71.37%",
      },
      {
        title:
          "站区1500米的——容积率：0.049；建筑密度：0.002；地铁站密度（个/平方千米）0.00004；",
      },
      {
        title:
          "公交站密度（个/平方千米）0.0016；路网密度（千米/平方千米）12.03；交叉口密度（个/平方千米）84.3",
      },
      {
        title:
          "站区500米的容积率：0.037；建筑密度：0.002；地铁站密度（个/平方千米）0.00006；",
      },
      {
        title:
          "公交站密度（个/平方千米）0.0013；路网密度（千米/平方千米）12.19；交叉口密度（个/平方千米）86.2",
      },
    ],
  },
  {
    name: "成都站",
    text: [
      {
        title: "成都站，位于成都市中部区域，在市中心以北，又称火车北站。",
      },
      {
        title:
          "车站建筑面积超过16万㎡，设到发铁路18条，是西南地区最大的全国性枢纽之一，与各大省会城市都有直接的铁路联系，并与成都东站、成都南站、成都西站、犀浦站、天府站、双流机场站等铁路客运枢纽，及成都双流国际机场、成都天府国际机场等航空枢纽共同构成西南地区综合交通立体运输体系",
      },
      {
        title: "",
      },
      {
        title: "",
      },
    ],
  },
  {
    name: "重庆北站",
    text: [
      {
        title: "截至2016年11月，重庆北站占地面积93.33万平方米。",
      },
      {
        title:
          "其北广场建筑总面积25.55万平米，站房面积为11万平方米，地面广场11.9万平方米；",
      },
      {
        title:
          "南广场站房面积16121平方米；共计14台29线，可同时容纳25000人候车。",
      },
      {
        title:
          "2021年1月20日起，重庆北站改造完成并投用，南北广场实现全面互通。",
      },
      {
        title: "乘客出行，既可以在重庆北站南广场下，也可以在重庆北站北广场下。",
      },
      {
        title: "此外，可乘坐高铁公交化列车与重庆西站快速换乘。",
      },
    ],
  },
  {
    name: "重庆西站",
    text: [
      {
        title:
          "重庆西站采用高架候车模式，站房设计采用上进下出为主、下进下出为辅的进出站方式，",
      },
      {
        title: "共设五层，采用“综合交通、立体布局”的方式。",
      },
      {
        title: "地面二层（1F、2F层）为铁路主站房候车厅，",
      },
      {
        title: "地面层中间设置铁路站台、售票大厅和进站大厅。",
      },
      {
        title: "地下负一、负二层（B1、B2层），为站台层、出站层，",
      },
      {
        title: "东广场地面与站台层持平，",
      },
      {
        title:
          "中间设置铁路客流集散大厅、轨道票厅、公共换乘区（轨道区域、出租车区域）。",
      },
      {
        title:
          "地下负三（B3层）至负四层（B4层）为重庆轨道交通环线、重庆轨道交通5号线及重庆轨道交通12号线区域 ",
      },
    ],
  },
  {
    name: "上海虹桥",
    text: [
      {
        title:
          "虹桥综合交通枢纽体现了多元化交通模式的衔接在一体化的协调管理下进行，协调各个不同的利益方的关系",
      },
      {
        title: "(1)枢纽本体总体布局",
      },
      {
        title: "枢纽本体各交通主体的平面布局由东向西依次为：",
      },
      {
        title: "航站楼、东交通中心、磁浮、高铁、西交通中心。",
      },
      {
        title:
          "轨道交通进入枢纽的线路为轨道交通2号线、10号线、17号线（在建）。",
      },
      {
        title: "（2）枢纽立体集散系统",
      },
      {
        title:
          "立体道路系统主要由循环高架道路、地下道路、高架落地匝道、地下道路连接段组成，",
      },
      {
        title: "包括4个既相对独立又能有机联系的环路，",
      },
      {
        title: "通过落地匝遵与地面道路、 广场、停车场库进行沟通、连接。",
      },
    ],
  },
  {
    name: "杭州东站",
    text: [
      {
        title: "截至2019年12月，杭州东站总用地面积40公顷（600亩），",
      },
      {
        title: "总建筑面积32万平方米。东站设有东、西两大广场，占地488亩，",
      },
      {
        title: "广场建筑总面积81.3万平米；其中东广场占地185亩，",
      },
      {
        title: "地上建筑面积16万平米，地下建筑面积21万平米；",
      },
      {
        title: "西广场占地300亩，地上11万平米，地下33万平米。",
      },
      {
        title: "杭州东站开通时只启用了东广场，",
      },
      {
        title: "西广场主体部分于2014年1月1日投入使用，",
      },
      {
        title:
          "环站北路、新塘路、天城路三个下穿铁路隧道以及西广场公交枢纽也同步开通。",
      },
      {
        title: "杭州东站的站房设计以“钱江潮”的建筑形式为主题，",
      },
      {
        title:
          "以此体现出杭州“精致和谐、大气开放”的城市形象和从“西湖时代”迈向“钱塘江”时代的时代特征。",
      },
      {
        title:
          "“动车”的外形，塑造了一个充满动感的、具有鲜明时代特征和未来感的新型车站。",
      },
      {
        title:
          "“动车”的外形，塑造了一个充满动感的、具有鲜明时代特征和未来感的新型车站。",
      },
      {
        title: "在车站站房功能设计上，杭州东站遵循以人为本的原则，",
      },
      {
        title:
          "注重流线组织，缩小换乘距离，旅客进站和出站的流线简介顺畅、短捷，",
      },
      {
        title:
          "站内导向直观明确，把最大的空间、最便捷的通道、最好的环境留给旅客，",
      },
      {
        title:
          "室内高空间、雨棚开敞通透，建设投入与维护成本兼顾，确保一百年不落后。",
      },
    ],
  },
  {
    name: "杭州西站",
    text: [
      {
        title: "截至2022年9月，杭州西站总建筑面积51.2220万平方米，",
      },
      {
        title: "站房综合体总建筑面积58万平方米，包括铁路客运部分20万平方米，",
      },
      {
        title: "城市综合配套31万平方米，以及相关地铁工程7万平方米 ",
      },
      {
        title:
          "杭州西站整体以“云之城”为设计理念，以“城市未来生活典范区”为目标，",
      },
      {
        title: "以“云端站房”为设计概念，提出“云谷”、“云路”、“云厅”等意向；",
      },
      {
        title: "候车室以“云端候车厅”为设计理念，采用云雾漂浮状屋顶顶盖，",
      },
      {
        title: "并在站房中部采用玻璃顶棚模仿云层之间的缝隙，",
      },
      {
        title: "构成“云谷”通过“云谷”解决站与城复杂的交通组织，",
      },
      {
        title: "通过“云路”实现中央快速进站系统，",
      },
      {
        title: "车站整体以“云”的形象出现，形成既统一、又鲜明的整体造型；",
      },
      {
        title: "“云”既呼应了杭州独有的山水格局，",
      },
      {
        title: "又象征了城西科创大走廊的科技精神。",
      },
      {
        title: "站区整体与余杭塘河，以及寡山、吴山构成“看”与“被看”的相互关系，",
      },
      {
        title: "形成“呼应山水，沟通南北”的自然生态格局",
      },
    ],
  },
  {
    name: "长沙站",
    text: [
      {
        title: "据1983年3月《古城长沙》显示，长沙站车站大楼高23米，宽151米，",
      },
      {
        title: "建筑面积为19000多平方米，车站广场总面积为37000平方米。",
      },
      {
        title: " 据2000年出版的《湖南五十年大事记述》显示，",
      },
      {
        title: "长沙站站房主楼高63.1米，宽150米，",
      },
      {
        title: "总面积为42064平方米，一次可同时容纳旅客6000人候车。",
      },
      {
        title: " 2015年改造后的长沙站总面积达6.8万平方米。",
      },
      {
        title: "长沙站的设计方案主要结构是“方盒子+钟楼+火炬”，",
      },
      {
        title: "方盒子是指下面的主楼，钟楼是为了方便大家看时间准时乘车，",
      },
      {
        title: "长沙站为前后错层、地道进站的田字形平面；",
      },
      {
        title:
          "带有民族风格的钟楼火炬，象征着长沙是毛主席最早点燃革命烈火的地方。",
      },
      {
        title: "车站的火炬燃烧方案是由万里部长最终拍板：",
      },
      {
        title: "没有风，火炬火焰冲天燃烧，体现“风平浪静，国泰民安”。",
      },
    ],
  },
  {
    name: "南京南站",
    text: [
      {
        title:
          "截至2022年，南京南站占地面积约70万平方米，总建筑面积73万平方米，",
      },
      {
        title: "站房总建筑面积约45.8万平方米，其中主站房面积达38.7万平方米,",
      },
      {
        title: "总投资超过300亿元人民币，站房建筑秉承“古都新站”的设计理念,",
      },
      {
        title: "吸纳了大量中国古典建筑元素，如藻井、斗拱、窗花和木纹肌理等，",
      },
      {
        title: "同时中西合璧、兼收并蓄，将中国宫殿建筑的优势及特点充分发挥，",
      },
      {
        title: "体现了古都南京浓郁的风格和特有的气质。",
      },
      {
        title: "南京南站有15个候车厅、3个站场、15个站台，",
      },
      {
        title: "整体东西宽度450米，总高59.96米；",
      },
      {
        title: "站房屋顶南北最长451米，东西最大宽度211米，面积近10万平方米；",
      },
      {
        title: "二层平台为站台层，长660米，宽450米，高12.5米；",
      },
      {
        title: "三层平台为主候车厅，候车大厅南北长417米、东西宽156米，",
      },
      {
        title: "总面积5.8万平方米，高22.4米；",
      },
      {
        title: "站房顶部“南京南站”4个红色汉字单字大小为8米×8米，面积64平方米。",
      },
    ],
  },
  {
    name: "沙坪坝站",
    text: [
      {
        title: "沙坪坝站TOD项目结合地铁埋深,构建了深度达到47米的地下八层空间,",
      },
      {
        title: "拆迁量达到14.1万平方米。",
      },
      {
        title: "其中,住宅1015户,非住宅（含商铺）117户。",
      },
      {
        title: "通过高铁线路“上盖”,并预留40米宽的自由道路,",
      },
      {
        title: "连通高铁站南北两侧人流,有效连通了铁路分割后的城市空间,",
      },
      {
        title: "实现了站城融合发展,居民出行便捷度大幅提升。",
      },
      {
        title: "沙坪坝站TOD项目总占地面积21.82公顷，总建筑面积为75万平方米。",
      },
      {
        title: "其中,高铁综合交通枢纽部分面积27万平方米。",
      },
      {
        title: "项目上盖物业提供48万平方米的商业综合体，",
      },
      {
        title: "包括商业裙房、双子塔办公楼及四栋写字楼。",
      },
    ],
  },
];
