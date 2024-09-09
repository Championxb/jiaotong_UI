export const CITYRAIL_IMG = [
  {
    name: '站点类型',
    items: [
      {
        itemName: '居住主导型',
        translation: 'Residential-oriented',
        images: [
          new URL('../../assets/imgSort/s3CityRail/s3-1-1-1.jpg', import.meta.url).href,
          new URL('../../assets/imgSort/s3CityRail/s3-1-1-2.jpg', import.meta.url).href,
        ],
        des:'居住主导型典型站点包括天河路、韦家碾、龙泉驿等站点。\n主要特征：客流时序分布曲线为进站早高峰、出站晚高峰客流强度大,分担率较高,客流强度的均衡系数平均值也较大,属于单峰型，具有典型的通勤“潮汐性”。站点周边区域多体现“睡城”特性, 土地混合度较低,居住型用地具有较大优势度。'},
      {
        itemName: '就业主导型',
        translation: 'Employment-oriented',
        images: [
          new URL('../../assets/imgSort/s3CityRail/s3-1-2-1.jpg', import.meta.url).href,
          new URL('../../assets/imgSort/s3CityRail/s3-1-2-2.jpg', import.meta.url).href,
        ],
        des:'就业主导型典型站点包括天府三街、天府五街、高新等站点。\n主要特征：客流时序分布曲线为早高峰出站、晚高峰进站客流强度大，与居住型站点的早晚高峰时段分布相反,而平峰时段客流量较小,属于单峰型,具有典型的早就业、晚返程的通勤特征。站点地区土地混合度较小,商业办公类用地占主导。'
      },
      {
        itemName: '综合型',
        translation: 'Integrative',
        images: [
          new URL('../../assets/imgSort/s3CityRail/s3-1-3-1.jpg', import.meta.url).href,
          new URL('../../assets/imgSort/s3CityRail/s3-1-3-2.jpg', import.meta.url).href,
        ],
        des:'综合型典型站点包括文化宫、天府广场等以文化类为主导的站点；华西坝、中医大省医院等以医院服务类为主导的站点；春熙路、太平园等以商业服务为主的站点。\n主要特征：客流时序分布曲线为全峰型，早晚高峰客流分担率不显著,相比居住型与就业型,无明显平峰时段,在中午或下午3:00易出现多个波峰,高峰小时系数较小。站点周边地区用地类型多样,混合度较高，反映人群出行目的的复杂性。'},
      {
        itemName: '职住错位型',
        translation: 'Misalignment of occupation and residence',
        images: [
          new URL('../../assets/imgSort/s3CityRail/s3-1-4-1.jpg', import.meta.url).href,
          new URL('../../assets/imgSort/s3CityRail/s3-1-4-2.jpg', import.meta.url).href,
          ],
        des:'职住错位型典型站点包括,一品天下、红牌楼、人民公园等。\n主要特征：客流时序分布曲线同时存在早晚高峰,为双峰型，但进出站的早高峰客流量均高于晚高峰,站点客流时段分布均衡系数和高峰小时系数较大,具有典型的混合职住通勤特征。站点周边用地信息复杂,混合度较高,居住与商业办公用地比例均较高。'
      },
      {
        itemName: '错位偏居住型',
        translation: 'Misaligned residence',
        images: [
          new URL('../../assets/imgSort/s3CityRail/s3-1-5-1.jpg', import.meta.url).href,
          new URL('../../assets/imgSort/s3CityRail/s3-1-5-2.jpg', import.meta.url).href,
        ],
        des:'错位偏居住型典型站点包括,东坡路、花照壁、九里堤、华兴站等。\n主要特征：客流时序分布曲线表现为差异双峰型，但进展早高峰与出站晚高峰客流量显著高于进站晚高峰与出站早高峰,且部分站点客流时序曲线有午高峰,站点客流高峰小时系数也较大，具有混合错位通勤特征,但是错位程度相对较低, 其主体居住功能相比就业功能更显著。站点周边土地混合度相比居住主导型站点较高,居住用地占主导,混合部分商务办公、行政办公用地。'
      },
      {
        itemName: '错位偏就业型',
        translation: 'Misaligned employment',
        images: [
          new URL('../../assets/imgSort/s3CityRail/s3-1-6-1.jpg', import.meta.url).href,
          new URL('../../assets/imgSort/s3CityRail/s3-1-6-2.jpg', import.meta.url).href,
          ],
        des:'错位偏就业型典型站点包括,体育馆、牛王庙、骡马市、武汉路、广州路、兴隆湖等。\n主要特征：客流时序分布曲线也为差异双峰型，该类型的进站早高峰与出站晚高峰,显著高于进站晚高峰与出站早高峰,站点客流高峰小时系数也较大。与就业主导型站点相比,该类型兼有错位型站点的双峰属性,但又有显著早出站高峰与晚进站高峰。该类型站点周边用地混合地低于错位偏居住型。'
      },
      {
        itemName: '枢纽型',
        translation: 'Hub',
        images: [
          new URL('../../assets/imgSort/s3CityRail/s3-1-7-1.jpg', import.meta.url).href,
          new URL('../../assets/imgSort/s3CityRail/s3-1-7-2.jpg', import.meta.url).href,
        ],
        des:'枢纽型典型站点包括,成都东站、火车北站、火车南站、火车西站等。\n主要特征：客流时序分布曲线的早晚高峰不明显，全日出现多个高峰,属于全峰型,且客流进出站相对均衡,除新修建的双流机场航站楼T1、T2站外,其他枢纽型站点客流量均较大,进出站量差异不大,反映了枢纽型站点的对外长距出行的交通枢纽特点。点周边土地利用差异性较大，大型铁路综合枢纽周边交通枢纽用地为主，市域型枢纽周边由交通枢纽用地、商业用地、居住用地混合形成。'
      }
    ]
  },
  {
    name: '出行规律',
    items: [
      {
        itemName: '客流时空分布',
        translation: 'Temporal and spatial distribution of passenger flow',
        images: [
          new URL('../../assets/imgSort/s3CityRail/s3-2-1-1.jpg', import.meta.url).href,
        ],
        des:'客流量空间分布格局：客流量前十的站点分别为春熙路、成都东客站、犀浦站等，主要为换乘站、首末站及枢纽站，是成都市轨道交通网络中的核心集散站点；后十位站点主要分布在城市四环外待开发的外围区域。\n各站客流量空间分布趋势由东-西与北-南,均呈现两边低中间高的倒U型特征,城市中心区的客流量显著大于城市外围地区,主要是由于城市用地开发强度的空间异质性、站区功能业态混合的多样性、以及轨道线网密度的片区差异性等原因造成的。'
      },
      {
        itemName: '客流线路分担率',
        translation: 'Passenger Route Sharing Ratio',
        images: [
          new URL('../../assets/imgSort/s3CityRail/s3-2-2-1.jpg', import.meta.url).href,
          new URL('../../assets/imgSort/s3CityRail/s3-2-2-2.jpg', import.meta.url).href,
        ],
        des:'1、2号线的工作日客流压力明显,分别占到了全日总客流量的27.37%与22.75%。晚高峰时段,1号线客流断面分担率达35.5%,与周末客流的分线占比相对均衡。\n成都市大量的新兴就业地集聚在1号线附近,而传统商业中心则主要分布在2号线周边。因此,工作日与非工作日线路分担率的差异也体现了站点地区服务设施空间分异下的轨道出行需求规律。'
      },
      {
        itemName: '客流时序变化特征',
        translation: 'Characteristics of temporal changes in passenger flow',
        images: [
          new URL('../../assets/imgSort/s3CityRail/s3-2-3-1.jpg', import.meta.url).href,
          new URL('../../assets/imgSort/s3CityRail/s3-2-3-2.jpg', import.meta.url).href,
        ],
        des:'工作日客流1小时时序曲线属于双峰型，高峰与平峰的差值达到了15万；非工作日客流分散，高峰不显著，属于无峰型，客流量最大峰值仅为8万，全天客流分布均衡系数高。\n近年来，随着成都市人口的快速聚集、轨道建设的不断加快，工作日高峰段分担率呈逐年上升趋势，城市远郊区的通勤者通过轨道交通获得中心区就业机会得到提升。'
      }
    ]
  },
];
