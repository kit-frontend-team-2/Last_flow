const posts = [
  {
    title: "화산귀환",
    writing: "lico",
    painting: "lico",
    day: "수요웹툰",
    genre: {
      nikname: "#무협/사극",
      nikname: "#세계관",
      nikname: "#동양풍판타지",
      nikname: "#힘숨찐",
      nikname: "#회귀",
      nikname: "#이세계",
      nikname: "#먼치킨",
      nikname: "#소설원작",
    },
    Comment:
      "대 화산파 13대 제자.천하삼대검수 매화검존 청명.천하를 혼란에 빠뜨린 고금제일마 천마의 목을 치고 십만대산의 정상에서 영면.백 년의 시간을 뛰어넘어 아이의 몸으로 다시 살아나다.......뭐? 화산이 망해? 이게 뭔 개소리야!?",
  },
  {
    title: "선천전 얼간이들",
    writing: "가스파드",
    painting: "가스파드",
    day: "목요웹툰",
    genre: {
      nikname: "#개그",
      nikname: "#무해한",
      nikname: "#러블리",
      nikname: "#힐링",
      nikname: "#4차원",
      nikname: "#하이퍼리얼리즘",
      nikname: "#동물",
      nikname: "#공감성수치",
    },
    Comment:
      "뭘 해도 안되는 얼간이 신인류가 떴다!낙천적 우유부단 거북이 가스파드와 말초적 친구들의 좌충우돌 라이프.이미 화제의 중심! 'Natural Born Idiots'의 새로운 이름, '선천적 얼간이들'",
  },
  {
    title: "마님이네 미국 시골집 이야기",
    writing: "마님",
    painting: "마님",
    day: "수요웹툰",
    genre: {
      nikname: "#일상",
      nikname: "#러블리",
      nikname: "#힐링",
      nikname: "#동물",
    },
    Comment:
      "마님♡올리버쌤♡체리 가족이 찾아왔습니다!미국 남자 올리버와 토종 한1국인 마님, 그리고 사랑스러운 딸 체리와 다섯 마리 반려 동물까지.하루종일 육아하고 털 청소하느라 바쁘지만, 그래도 하하 호호 행복한 미국 시골집 이야기.",
  },
];

//검색
const findPost = posts.find((post) => post.day === "수요웹툰");
console.log(findPost);
console.log("===================================================");
const deletePost = posts.filter((post) => post.day !== "수요웹툰");
console.log(deletePost);

const addKey = {
  title: "대학원 탈출일지",
  writing: "요다",
  painting: "요다",
  day: "화요웹툰",
  genre: {
    nikname: "#일상",
    nikname: "#하이퍼리얼리즘",
  },
  Comment: `연구에 꿈을 가지고 대학원을 선택한 병아리 요다.
  예상과는 다르게 연구에 관심 없는 교수님과똥군기의 연구실 분위기에 당황한다.
  요다는 과연 무사히 대학원을 탈출할 수 있을 것인가?!
  `,
};

posts.push({ ...addKey });
//posts.push({ addKey });  ...없을 시터미널 이 나오기는 하나 내용이깨짐
// posts.splice(1,0,{...addKey})
console.log(posts);

// addKey = Object.assign({
//   title: "대학원 탈출일지",
//   writing: "요다",
//   painting: "요다",
//   day: "화요웹툰",
//   genre: {
//     nikname: "#일상",
//     nikname: "#하이퍼리얼리즘",
//   },
//   Comment: `연구에 꿈을 가지고 대학원을 선택한 병아리 요다.
//     예상과는 다르게 연구에 관심 없는 교수님과똥군기의 연구실 분위기에 당황한다.
//     요다는 과연 무사히 대학원을 탈출할 수 있을 것인가?!
//     `,
// });

// console.log(addKey);
