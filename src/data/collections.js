
const IMAGE_BASE = "/images/collections";
const VIDEO_BASE = "/videos/collections";

export const collections = {
  "zion-canyon": {
    id: "zion-canyon",
    name: "Zion Canyon",
    campaignNumber: "1st",

    accentColor: "#E00000",

    hero: {
      background: `${IMAGE_BASE}/zion-canyon/hero-bg.png`,
      title: `${IMAGE_BASE}/zion-canyon/hero-title.svg`,
      product: `${IMAGE_BASE}/zion-canyon/hero-product.png`,
    },

    animation: {
      video: `${VIDEO_BASE}/zion-canyon/logo-animation.mp4`,
      description:
        "Zion Canyon의 암석 지형 사이로 들어오는 햇빛을 표현한 Desert Sunlight Collection. GoFurtherOutWest가 제안하는 공간 조명 디자인을 경험해보세요.",
    },

    gallery: {
      images: [
        `${IMAGE_BASE}/zion-canyon/gallery-01.png`,
        `${IMAGE_BASE}/zion-canyon/gallery-02.png`,
        `${IMAGE_BASE}/zion-canyon/gallery-03.png`,
        `${IMAGE_BASE}/zion-canyon/gallery-04.png`,
        `${IMAGE_BASE}/zion-canyon/gallery-05.png`,
      ],

      storyFront:
        `${IMAGE_BASE}/zion-canyon/story-front.png`,

      storyBack:
        `${IMAGE_BASE}/zion-canyon/story-back.png`,
    },

    graphics: {
      ground:
        `${IMAGE_BASE}/zion-canyon/mountain-ground.png`,

      items: [
        {
          image:
            `${IMAGE_BASE}/zion-canyon/graphic-card-01.svg`,
          type: "card-black",
        },
        {
          image:
            `${IMAGE_BASE}/zion-canyon/graphic-card-02.svg`,
          type: "card-white",
        },
        {
          image:
            `${IMAGE_BASE}/zion-canyon/graphic-sticker.svg`,
          type: "sticker",
        },
      ],
    },

    campaign: {
      title: "ZION CANYON",
      subtitle: "GoFurtherOutWest 1st Campaign",

      shotLeft:
        `${IMAGE_BASE}/zion-canyon/campaign-shot-01.png`,

      shotRight:
        `${IMAGE_BASE}/zion-canyon/campaign-shot-02.png`,

      wallObject:
        `${IMAGE_BASE}/zion-canyon/campaign-wall-object.png`,
    },

    productStory: {
      title: "Canyon Sunlight",

      paragraphs: [
        "수천 년에 걸쳐 형성된 자이언 캐니언의 거대한 암석 지형과 그 틈으로 스며드는 햇빛에서 영감을 받은 조형 조명입니다. 겹겹이 쌓인 지층의 형태와 거친 표면의 질감을 재해석하여, 자연의 풍경을 일상 속 하나의 오브제로 담아냈습니다.",

        "암석의 중심에서 퍼져 나오는 따뜻한 빛은 협곡 사이로 쏟아지는 햇살을 연상시킵니다. 불규칙한 형태와 섬세한 빛의 대비를 통해, 조명이 꺼져 있을 때는 조각 작품으로, 켜져 있을 때는 공간의 분위기를 변화시키는 빛의 오브제로 존재합니다.",
      ],

      image:
        `${IMAGE_BASE}/zion-canyon/product-story.png`,

      glowColor: "216, 142, 43",
    },
  },
};

/* =====================================
   VEGAS VIC COLLECTION
===================================== */

const VEGAS = "/images/collections/vegas-vic";

collections["vegas-vic"] = {
  id: "vegas-vic",
  name: "Vegas Vic",
  campaignNumber: "2nd",

  accentColor: "#90FF00",

  // HERO
  hero: {
    background: `${VEGAS}/hero-bg.png`,
    title: `${VEGAS}/hero-title.svg`,
    product: `${VEGAS}/hero-product.png`,
    titleWidth: "min(51vw, 760px)",
  },

  // LOGO ANIMATION
  animation: {
    video: "/videos/collections/vegas-vic/logo-animation.mp4",

    description:
      "라스베이거스의 상징적인 네온 카우보이 사인, Vegas Vic에서 영감을 받은 컬렉션. 강렬한 빛과 도시의 에너지를 GoFurtherOutWest만의 오브제로 재해석했습니다.",
  },

  // GALLERY & STORY
  gallery: {
    images: [
      `${VEGAS}/gallery-01.png`,
      `${VEGAS}/gallery-02.png`,
      `${VEGAS}/gallery-03.png`,
      `${VEGAS}/gallery-04.png`,
      `${VEGAS}/gallery-05.png`,
    ],

    storyFront: `${VEGAS}/story-front.png`,
    storyBack: `${VEGAS}/story-back.png`,
  },

  // COLLECTION GRAPHICS
 
graphics: {
  layout: "vegas-collage",

  topImages: [
    `${VEGAS}/graphic-01.png`,
    `${VEGAS}/graphic-02.png`,
    `${VEGAS}/graphic-03.png`,
    `${VEGAS}/graphic-04.png`,
  ],

  stickers: [
    `${VEGAS}/sticker-01.svg`,
    `${VEGAS}/sticker-02.svg`,
  ],

  neonImages: [
    `${VEGAS}/neon-01.png`,
    `${VEGAS}/neon-02.png`,
    `${VEGAS}/neon-03.png`,
    `${VEGAS}/neon-04.png`,
  ],
},


  // CAMPAIGN: left two stacked photos + right one tall photo
  campaign: {
    title: "VEGAS VIC",
    titleImage: `${VEGAS}/campaign-title.svg`,
    titleWidth: "min(44vw, 630px)",
    subtitle: "GoFurtherOutWest 2nd Campaign",
    layout: "vegas-grid",
    items: [
  { src: `${VEGAS}/campaign-01.png` },
  { src: `${VEGAS}/campaign-03.png` },
  { src: `${VEGAS}/campaign-02.png` },
],
  },

  // PRODUCT STORY
  productStory: {
    title: "Neon After Dark",
    titleColor: "#90FF00",

    paragraphs: [
      "라스베이거스의 거리에서 오랜 시간 빛나온 네온 카우보이 사인, Vegas Vic의 강렬한 실루엣에서 출발한 캔들입니다. 도시를 상징하는 익숙한 이미지를 새로운 조형 언어로 재해석하여 일상 속 오브제로 담아냈습니다.",

      "선명한 네온그린 컬러와 입체적인 형태는 라스베이거스의 화려한 밤과 자유로운 분위기를 떠올리게 합니다. 불을 밝히는 순간, 도시의 에너지가 작은 공간 안에서 새로운 감각으로 이어집니다.",
    ],

    image: `${VEGAS}/product-story.png`,
    glowColor: "144, 255, 0",
    imageScale: 1.35,
    hint: "Hold and Spin!",
  },
};



/* =====================================
   ROUTE 66 COLLECTION
   Files live under public/images/collections/route-66/
===================================== */

const ROUTE66 = `${IMAGE_BASE}/route-66`;

collections["route-66"] = {
  id: "route-66",
  name: "Route 66",
  campaignNumber: "3rd",
  accentColor: "#F15A16",

  hero: {
    background: `${ROUTE66}/hero-bg.png`,
    title: `${ROUTE66}/hero-title.svg`,
    product: `${ROUTE66}/hero-product.png`,
    titleWidth: "min(78vw, 1030px)",
  },

  animation: {
    video: `${VIDEO_BASE}/route-66/logo-animation.mp4`,
    description:
      "미국 서부를 가로지르는 Route 66의 길 위에서 시작된 컬렉션. 도로의 속도감과 끝없이 펼쳐지는 풍경을 일상 속 러그 오브제로 경험해보세요.",
  },

  gallery: {
    images: [
      `${ROUTE66}/gallery-01.png`,
      `${ROUTE66}/gallery-02.png`,
      `${ROUTE66}/gallery-03.png`,
      `${ROUTE66}/gallery-04.png`,
      `${ROUTE66}/gallery-05.png`,
    ],
    storyFront: `${ROUTE66}/story-front.png`,
    storyBack: `${ROUTE66}/story-back.png`,
  },

  // Figma: left vintage map, right route map, diagonal ticket, grass along bottom
  graphics: {
    layout: "route66-collage",
    mapVintage: `${ROUTE66}/graphic-01.png`,
    mapUSA: `${ROUTE66}/graphic-02.svg`,
    ticket: `${ROUTE66}/graphic-03.svg`,
    grass: `${ROUTE66}/graphic-ground.png`,
  },

  // Figma: upper row wide + narrow / lower row narrow + wide
  campaign: {
    layout: "route66-grid",
    title: "ROUTE 66",
    titleImage: `${ROUTE66}/campaign-title.svg`,
    titleWidth: "min(62vw, 880px)",
    subtitle: "GoFurtherOutWest 3rd Campaign",
    items: [
      { src: `${ROUTE66}/campaign-01.png` },
      { src: `${ROUTE66}/campaign-02.png` },
      { src: `${ROUTE66}/campaign-03.png` },
      { src: `${ROUTE66}/campaign-04.png` },
    ],
  },

  productStory: {
    title: "The Open Road",
    titleColor: "#F15A16",
    paragraphs: [
      "미국 서부를 가로지르는 역사적인 도로 Route 66에서 영감을 받은 러그입니다. 길게 이어지는 도로의 실루엣과 상징적인 숫자 66을 결합해, 익숙한 풍경을 대담한 형태의 라이프스타일 오브제로 재해석했습니다.",
      "선명한 오렌지와 크림 컬러, 풍성한 실의 질감은 건조한 사막을 달리는 자동차와 그 여정의 에너지를 떠올리게 합니다. 바닥 위에 놓인 하나의 도로처럼, 공간에 자유로운 움직임과 서부 특유의 분위기를 더합니다.",
    ],
    image: `${ROUTE66}/product-story.png`,
    glowColor: "241, 90, 22",
    imageScale: 1,
    hint: "Explore the Object",
  },
};

const HORSE = "/images/collections/horseshoe-bend";
collections["horseshoe-bend"] = {
  id: "horseshoe-bend",
  name: "Horseshoe Bend",
  campaignNumber: "4th",
  accentColor: "#cbdadd",
  hero: {
    background: `${HORSE}/hero-bg.png`,
    title: `${HORSE}/hero-title.svg`,
    product: `${HORSE}/hero-product.png`,
    titleWidth: "min(70vw, 1070px)",
  },
  animation: {
    video: "/videos/collections/horseshoe-bend/logo-animation.mp4",
    description: "Horseshoe Bend의 굽이치는 지형과 행운을 상징하는 말발굽을 재해석한 컬렉션. 거친 웨스턴의 분위기와 금속의 섬세한 디테일을 하나의 장식 오브제로 담았습니다.",
  },
  gallery: {
    images: [1,2,3,4,5].map(n => `${HORSE}/gallery-0${n}.png`),
    storyFront: `${HORSE}/story-front.png`,
    storyBack: `${HORSE}/story-back.png`,
  },
  graphics: {
    layout: "horseshoe-collage",
    background: `${HORSE}/graphic-bg.png`,
    logo: `${HORSE}/graphic-01.png`,
    card: `${HORSE}/graphic-02.png`,
    horseshoe: `${HORSE}/graphic-03.png`,
    ground: `${HORSE}/graphic-ground.png`,
  },
  campaign: {
    layout: "horseshoe-grid",
    title: "HORSESHOE BEND",
    subtitle: "GoFurtherOutWest 4th Campaign",
    titleImage: `${HORSE}/campaign-title.svg`,
    titleWidth: "min(64vw, 940px)",
    items: [1,2,3,4].map(n => ({src:`${HORSE}/campaign-0${n}.png`})),
  },
  productStory: {
    title: "Lucky Bend",
    titleColor: "#d9e5e5",
    paragraphs: [
      "굽이치는 협곡의 형태와 행운을 상징하는 말발굽에서 영감을 받은 장식 오브제입니다. 묵직한 블랙 실루엣에 금속의 질감과 반짝이는 디테일을 더해 서부의 상징을 현대적으로 재해석했습니다.",
      "단단한 형태 위에 섬세하게 배치된 장식은 빛을 받을 때마다 다른 표정을 만들어냅니다. 투박함과 장식성이 공존하는 웨스턴의 매력을 일상 속 작은 오브제로 경험해 보세요.",
    ],
    image: `${HORSE}/product-story.png`,
    glowColor: "155, 183, 190",
    imageScale: 1.13,
    hint: "Hold and Spin!",
  },
};

export const collectionIds = Object.keys(collections);

export function getCollection(id) {
  return collections[id] ?? null;
}
