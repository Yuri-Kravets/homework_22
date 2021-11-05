
let a = 39;
function getReverseNum(a) {
  let str = String(a);
  let arr = str.split('').reverse().join('');
  let b = Number(arr);
  return b;
}
function isPolindrom(b) {
  if (b === getReverseNum(b)) {
    return true;
  } else {
      return false;
  } 
}

function makePolindrom (c) {
  let countIter = 0;
  console.log(c)
  if (isPolindrom(c) === true) {
      console.log('полиндром = ',c ,'steps =',countIter);
      return;
  } else {
    let resultNum = c;
    while(true) {
        countIter++;
        resultNum = resultNum + getReverseNum(resultNum);
        if (isPolindrom(resultNum)) {
          console.log('полиндром = ',resultNum ,'steps =',countIter);
          return;
        }
    }
  }
}
makePolindrom (a);