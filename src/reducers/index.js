import { rosely, storyNine, styleNanda, littleBlack, minsShop } from '../DummyData/ProductData';


let initialState = {
  myInfo: {
   myItems: [],
   myMalls: [],
   myFolders: [
     {name: "기본템_쇼핑몰", date: "2019.04.20", malls: []},
     {name: "배송빠른", date: "2019.02.27", malls:[]}
   ],
   myDatas: {
     isBeginners: true
   }
  },
  shoppingData: {
    malls: [
  		{
  			logo: require('../../imgs/Corra1.jpg'),
  			newArrivals: 3,
  			shoppingMall: "로즐리",
  			items: rosely,
  			ranking: 1,
  			tags: ["기본"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/alekon-pictures-1519887-unsplash.jpg'),
  			newArrivals: 4,
  			shoppingMall: "스토리나인",
  			items: storyNine,
  			ranking: 12,
  			tags: ["러블리"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/artem-maltsev-1372856-unsplash.jpg'),
  			newArrivals: 2,
  			shoppingMall: "스타일난다",
  			items: styleNanda,
  			ranking: 32,
  			tags: ["데이트"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/debby-hudson-537200-unsplash.jpg'),
  			newArrivals: 11,
  			shoppingMall: "리틀블랙",
  			items: littleBlack,
  			ranking: 424,
  			tags: ["심플베이직"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/ezequiel-garrido-1491360-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "민스샵",
  			items: minsShop,
  			ranking: 255,
  			tags: ["로맨틱"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/frantisek-duris-400493-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "렘키니",
  			items: [],
  			ranking: 61,
  			tags: ["모던시크"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/henry-co-573432-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "도브라",
  			items: [],
  			ranking: 237,
  			tags: ["유니크"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/jakob-dalbjorn-583525-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "글램",
  			items: [],
  			ranking: 1238,
  			tags: ["럭셔리", "세련미", "20대30대"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/john-tuesday-1212606-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "에프에프엠13",
  			items: [],
  			ranking: 915,
  			tags: ["페미닌"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/joshua-rawson-harris-781001-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "체크캉캉 끈나시 원피스",
  			items: [],
  			ranking: 101,
  			tags: ["오피스룩"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/joyce-romero-622633-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "빅투",
  			items: [],
  			ranking: 11234,
  			tags: ["미시스타일"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/matt-seymour-313060-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "앙투",
  			items: [],
  			ranking: 1215,
  			tags: ["스쿨룩", "레트로"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/mel-poole-639612-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "난닝구",
  			items: [],
  			ranking: 1153,
  			tags: ["피트니스"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/naomi-koelemans-634004-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "사뿐",
  			items: [],
  			ranking: 1412,
  			tags: ["캠퍼스룩"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/parker-burchfield-224850-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "모코블링",
  			items: [],
  			ranking: 15123,
  			tags: ["섹시글램"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/raul-varzar-604390-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "베레비니",
  			items: [],
  			ranking: 1346,
  			tags: ["비치웨어"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/reinaldo-kevin-623146-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "차가디자인",
  			items: [],
  			ranking: 177,
  			tags: ["헐리웃스타일"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/riccardo-trimeloni-609369-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "플라티코",
  			items: [],
  			ranking: 1898,
  			tags: ["빈티지"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/roland-denes-1524498-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "송앤코",
  			items: [],
  			ranking: 190,
  			tags: ["스위트"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/tammy-gann-776902-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "더블랑하트",
  			items: [],
  			ranking: 208,
  			tags: ["유니크", "빈티지"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/tbel-abuseridze-625824-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "그녀의블루밍데이",
  			items: [],
  			ranking: 201,
  			tags: ["심플베이직"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/tony-ross-390652-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "플루에뜨주얼리",
  			items: [],
  			ranking: 202,
  			tags: ["오피스룩"],
  			favorites: false
  		},
  		{
  			logo: require('../../imgs/volha-flaxeco-546923-unsplash.jpg'),
  			newArrivals: 0,
  			shoppingMall: "미아실버",
  			items: [],
  			ranking: 283,
  			tags: ["러블리"],
  			favorites: false
  		}
  	],
    mallNameString: `로즐리,스토리나인,스타일난다,리틀블랙,민스샵,
                    렘키니,도브라,글램,에프에프엠13,체크캉캉 끈나시 원피스,
                    빅투,앙투,난닝구,사뿐,모코블링,베레비니,차가디자인,
                    플라티코,송앤코,더블랑하트,그녀의블루밍데이,플루에뜨주얼리,미아실버`
  },
  curatingData: [
   {
     words: {
       leftStr: "최근 검색 키워드", rightStr: "연관 상품", keyStr: "레드"
     },
     name: "red",
     data: [{
       img: require("../../imgs/tammy-gann-776902-unsplash.jpg"),
       price: 9900,
       name: "코라",
       like: false,
       isFlipped: false,
       count: 1,
       tags: ["기본"],
       shoppingMall: "로즐리"
     },
     {
       img: require("../../imgs/henry-co-573432-unsplash.jpg"),
       price: 19000,
       name: "아크네 스프링 가디건",
       like: false,
       isFlipped: false,
       count: 1,
       tags: ["러블리"],
       shoppingMall: "로즐리"
     },
     {
       img: require("../../imgs/naomi-koelemans-634004-unsplash.jpg"),
       price: 13860,
       name: "도트 숏 블라우스",
       like: false,
       isFlipped: false,
       count: 1,
       tags: ["유니크", "러블리"],
       shoppingMall: "로즐리"
     },
     {
       img: require("../../imgs/joyce-romero-622633-unsplash.jpg"),
       price: 20500,
       name: "체크 블라우스",
       like: false,
       isFlipped: false,
       count: 1,
       tags: ["미시스타일"],
       shoppingMall: "로즐리"
     }]
   },
   {
     words: {
       leftStr: "같은 연령대의 사람들이 선택한 상품"
     },
     name: 'similar',
     data: [{
       img: require('../../imgs/artem-maltsev-1372856-unsplash.jpg'),
       price: 32000,
       name: "데일리 리본 플랫",
       like: false,
       isFlipped: false,
       count: 1,
       tags: ["데이트"],
       shoppingMall: "스타일난다"
     },
     {
       img: require('../../imgs/debby-hudson-537200-unsplash.jpg'),
       price: 15960,
       name: "랩골지 반팔티",
       like: false,
       isFlipped: false,
       count: 1,
       tags: ["심플베이직"],
       shoppingMall: "스타일난다"
     },
     {
       img: require('../../imgs/mel-poole-639612-unsplash.jpg'),
       price: 16000,
       name: "옆트임 스커트",
       like: false,
       isFlipped: false,
       count: 1,
       tags: ["피트니스"],
       shoppingMall: "스타일난다"
     },
     {
       img: require('../../imgs/naomi-koelemans-634004-unsplash.jpg'),
       price: 12000,
       name: "스트라이프 셔츠 원피스",
       like: false,
       isFlipped: false,
       count: 1,
       tags: ["캠퍼스룩"],
       shoppingMall: "스타일난다"
     },
     {
       img: require('../../imgs/parker-burchfield-224850-unsplash.jpg'),
       price: 29000,
       name: "시스루 도트 모노키니",
       like: false,
       isFlipped: false,
       count: 1,
       tags: ["섹시글램"],
       shoppingMall: "스타일난다"
     }]
   },
   {
     words: {
       leftStr: "최근 구매한", rightStr: "와 코디된 상품", keyStr: "린넨"
     },
     name: "linen",
     data: [
       {
         img: require('../../imgs/ezequiel-garrido-1491360-unsplash.jpg'),
         price: 27000,
         name: "린넨 롱원피스",
         like: false,
         isFlipped: false,
         count: 1,
         tags: ["로맨틱"],
         shoppingMall: "스토리나인"
       },
       {
         img: require('../../imgs/frantisek-duris-400493-unsplash.jpg'),
         price: 29500,
         name: "글램셔링 모노키니",
         like: false,
         isFlipped: false,
         count: 1,
         tags: ["모던시크"],
         shoppingMall: "스토리나인"
       },
       {
         img: require('../../imgs/tammy-gann-776902-unsplash.jpg'),
         price: 16000,
         name: "플라워 반팔티",
         like: false,
         isFlipped: false,
         count: 1,
         tags: ["유니크", "빈티지"],
         shoppingMall: "스토리나인"
       },
       {
         img: require('../../imgs/tony-ross-390652-unsplash.jpg'),
         price: 22000,
         name: "랩 반팔니트",
         like: false,
         isFlipped: false,
         count: 1,
         tags: ["오피스룩"],
         shoppingMall: "스토리나인"
       },
       {
         img: require('../../imgs/john-tuesday-1212606-unsplash.jpg'),
         price: 31160,
         name: "와이드밴딩슬랙스",
         like: false,
         isFlipped: false,
         count: 1,
         tags: ["페미닌"],
         shoppingMall: "리틀블랙"
       }
     ]
   }
 ]
}


const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_LIKES': {

      const curatingData = state.curatingData;
      const beforeLikeItems = state.myInfo.myItems;

      const targetIndex = curatingData.findIndex(cur => cur.name === action.name);

      const target = curatingData[targetIndex];

      let newlikeItems = [];

      const newArr = target.data.map(cur => {
        if(cur.name === action.item) {

          let newtargetObj = {...cur, like: !cur.like}

          if(newtargetObj.like) {
            newlikeItems = [...beforeLikeItems, newtargetObj]
          } else {
            newlikeItems = beforeLikeItems.filter(current => current.name !== action.item);
          }
          return newtargetObj
        }

        return cur

      })

      const newObj = {...target, data: newArr };

      const changedCuratingData = [
        ...curatingData.slice(0, targetIndex),
        newObj,
        ...curatingData.slice(targetIndex + 1)
      ]

      const changedmyInfo = {...state.myInfo , myItems: newlikeItems }


      return {...state, curatingData: changedCuratingData, myInfo: changedmyInfo }
    }

    case 'TOGGLE_FAVORITES': {
      const mallData = state.shoppingData.malls;
      const beforeFavoriteMalls = state.myInfo.myMalls;

      let newfavoriteMalls = [];

      const newMalls = mallData.map(cur => {
        if(cur.shoppingMall === action.shoppingMall) {

          let newObj = {...cur, favorites: !cur.favorites}

          if(newObj.favorites) {
            newfavoriteMalls = [...beforeFavoriteMalls, newObj]
          } else {
            newfavoriteMalls = beforeFavoriteMalls.filter(current => current.shoppingMall !== action.shoppingMall);
          }
          return newObj
        }

        return cur
      });


      const changedmyInfo = {...state.myInfo , myMalls: newfavoriteMalls }

      const changedShoppingData = {...state.shoppingData , malls: newMalls }

      return {...state, myInfo: changedmyInfo, shoppingData: changedShoppingData }
    }

    case 'CREATE_FOLDER': {
      const currentFolder = state.myInfo.myFolders;
      const newObj = {};
      newObj.name = action.name;
      newObj.date = action.date;
      newObj.malls = action.malls;

      const newFolder = [...currentFolder, newObj];

      const changedmyInfo = {...state.myInfo , myFolders: newFolder }

      return {...state, myInfo: changedmyInfo }
    }

    case 'REMOVE_FOLDER': {
      const myFolders = state.myInfo.myFolders

      const newFolder = myFolders.filter(cur => cur.name !== action.name);

      const changedmyInfo = {...state.myInfo , myFolders: newFolder }

      return {...state, myInfo: changedmyInfo }

    }

    case 'TOGGLE_FLIP': {
      const myItems = state.myInfo.myItems
      const newCart = myItems.map(cur => {
        if(cur.name === action.name) {
          return {...cur, isFlipped: !cur.isFlipped}
        } else {
          return cur
        }
      })

      const changedmyInfo = {...state.myInfo , myItems: newCart }

      return {...state, myInfo: changedmyInfo }
    }

    case 'REMOVE_MY_ITEM': {
      const myItems = state.myInfo.myItems

      const newCart = myItems.filter(cur => (cur.name !== action.name))

      const changedmyInfo = {...state.myInfo , myItems: newCart }

      const curatingData = state.curatingData;
      const newCuratingData = curatingData.map(cur => {
        const insideData = cur.data.map(el => {
          if(el.name === action.name) {
            return {...el, like: !el.like}
          }
          return el
        });

        return {...cur, data: insideData}
      })


      return {...state, myInfo: changedmyInfo, curatingData: newCuratingData }
    }

    case 'REMOVE_ALL_MY_ITEM': {
      const myItems = state.myInfo.myItems

      const newCart = []

      const changedmyInfo = {...state.myInfo , myItems: newCart }

      const curatingData = state.curatingData;
      const newCuratingData = curatingData.map(cur => {
        const insideData = cur.data.map(el => {
          return {...el, like: false}
        });

        return {...cur, data: insideData}
      })

      return {...state, myInfo: changedmyInfo, curatingData: newCuratingData }
    }

    default:
      return state
  }

}


export default rootReducer
