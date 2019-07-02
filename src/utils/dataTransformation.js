
export const reshapePrice = (price) => {
  let fixedPrice = "" + price;
  let len = fixedPrice.length;
  if(price >= 1000) {
    fixedPrice = fixedPrice.slice(0, len-3) + "," + fixedPrice.slice(len-3) + "원";
  } else {
    fixedPrice = fixedPrice + "원";
  }

  return fixedPrice;
}

export const makingRankingList = (data) => {
  var rankingList = data.concat();
  var fixedRankingList = rankingList.sort((a,b)=> (a.ranking - b.ranking));

  return fixedRankingList;
}

export const makingTagsString = (arr) => {
  let tags = "";

  if(Array.isArray(arr)) {
    arr.forEach(cur => {
      tags += " #" + cur
    })
  } else {
    tags = arr;
  }

  return tags
}

export const makingArr = (malls) => {
  var newArr = [];
  var a = 0;
  var b = a + 2;
  while( b < malls.length + 2 ) {
    newArr = [...newArr, malls.slice(a,b)];
    a = b;
    b = a+2;
  }

  return newArr;
}
