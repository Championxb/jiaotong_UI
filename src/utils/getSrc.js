export const getImgSrc = (type, page, id) => {
  const content = ALL_SECOND_IMAGES[type][id];
  if (content) {
    return content.url[page - 1];
  }
  return;
};

export const ALL_SECOND_IMAGES = [
  [
    {
      name: "成都南站改造方案",
      url: [
        new URL(
          "../assets/images/09二级界面案例/1-成都南站改造方案图片1.jpg",
          import.meta.url
        ).href,
      ],
    },
    {
      name: "成都东站快速进站厅研究",
      url: [
        new URL(
          "../assets/images/09二级界面案例/2-成都东站快速进站厅研究图片1.jpg",
          import.meta.url
        ).href,
      ],
    },
    {
      name: "杭州城站地区城市更新规划",
      url: [
        new URL(
          "../assets/images/09二级界面案例/3-杭州城站地区城市更新规划图片1.jpg",
          import.meta.url
        ).href,
      ],
    },
    {
      name: "成都地铁陆肖站TOD一体化城市设计",
      url: [
        new URL(
          "../assets/images/09二级界面案例/4-成都地铁陆肖站TOD一体化城市设计图片1.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/4-成都地铁陆肖站TOD一体化城市设计图片2.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/4-成都地铁陆肖站TOD一体化城市设计图片3.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/4-成都地铁陆肖站TOD一体化城市设计图片4.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/4-成都地铁陆肖站TOD一体化城市设计图片5.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/4-成都地铁陆肖站TOD一体化城市设计图片6.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/4-成都地铁陆肖站TOD一体化城市设计图片7.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/4-成都地铁陆肖站TOD一体化城市设计图片8.jpg",
          import.meta.url
        ).href,
      ],
    },
    {
      name: "深圳平湖枢纽空间适应性评价与优化",
      url: [
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片1.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片2.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片3.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片4.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片5.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片6.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片7.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片8.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片9.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片10.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片11.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片12.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/5-深圳平湖枢纽空间适应性评价与优化图片13.jpg",
          import.meta.url
        ).href,
      ],
    },
    {
      name: "成都双流区地下空间规划",
      url: [
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片1.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片2.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片3.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片4.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片5.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片6.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片7.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片8.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片9.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片10.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片11.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片12.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片13.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片14.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片15.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片16.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片17.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片18.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片19.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片20.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/6-成都双流区地下空间规划图片21.jpg",
          import.meta.url
        ).href,
      ],
    },
  ],
  [
    {
      name: "日本京都火车站",
      url: [
        new URL(
          "../assets/images/09二级界面案例/1-日本京都火车站图片1.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/1-日本京都火车站图片2.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/1-日本京都火车站图片3.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/1-日本京都火车站图片4.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/1-日本京都火车站图片5.jpg",
          import.meta.url
        ).href,
      ],
    },
    {
      name: "英国伦敦国王十字火车站",
      url: [
        new URL(
          "../assets/images/09二级界面案例/2-英国伦敦国王十字火车站图片1.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/2-英国伦敦国王十字火车站图片2.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/2-英国伦敦国王十字火车站图片3.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/2-英国伦敦国王十字火车站图片4.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/2-英国伦敦国王十字火车站图片5.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/2-英国伦敦国王十字火车站图片6.jpg",
          import.meta.url
        ).href,
      ],
    },
    {
      name: "德国柏林中央火车站",
      url: [
        new URL(
          "../assets/images/09二级界面案例/3-德国柏林中央火车站图片1.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/3-德国柏林中央火车站图片2.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/3-德国柏林中央火车站图片3.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例/3-德国柏林中央火车站图片4.jpg",
          import.meta.url
        ).href,
      ],
    },
    {
      name: "日本上野火车站",
      url: [
        new URL(
          "../assets/images/09二级界面案例//4-日本上野火车站图片1.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例//4-日本上野火车站图片2.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例//4-日本上野火车站图片3.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例//4-日本上野火车站图片4.jpg",
          import.meta.url
        ).href,
        new URL(
          "../assets/images/09二级界面案例//4-日本上野火车站图片5.jpg",
          import.meta.url
        ).href,
      ],
    },
  ],
];
