import {List} from 'immutable'
// TODO: fix there is problem with extremes when needle has more then
// half of hayshack values, eg:
// h: new List([1, 2, 3, 4, 5, 6, 7, 8, 9])
// n: new List([9, 1, 2, 3, 4, 5])
// slicing moves number 5 to the begging of array
// and indexOf gets the first indexIt finds - but thats wrong index
export default function find(hayshack, needle) {
  console.log('h', hayshack.toArray());
  console.log('n', needle.toArray());
  return simpleFind(hayshack, needle)
  || simpleFind(hayshack.reverse(), needle)
  || extremesFind(hayshack, needle)
}

function simpleFind(hayshack, needle) {
  let match = 0
  let lastIndex = -1
  console.log('----NEW RUN----');
  needle.map((value) => {
    // TODO: implement here i need to find all indexes of given value
    // and then filter them all in helper functions?
    // wouldnt this cause mistake positives? it might... test it
    const matches = hayshack.filterIndexes(hayValue => hayValue === value)
    console.log('m', matches);
    /*
    if(isFirstMatch(myIndex, lastIndex) || isIndexAfter(myIndex, lastIndex)) {
      lastIndex = myIndex
      match++
      console.log('match', value, match);
    } else {
      match = 0
      console.log('wrong', value);
    }
    */
  })

  return (match >= needle.size)
}

function isFirstMatch(myIndex, lastIndex) {
  return myIndex !== -1 && lastIndex === -1
}

function isIndexAfter(myIndex, lastIndex) {
  return myIndex - 1 === lastIndex
}

function extremesFind(hayshack, needle) {
  const pre = hayshack.slice((needle.size - 1) * -1)
  const tail = hayshack.slice(0, needle.size - 1)
  const extremesHayshack = new List([...pre, ...hayshack, ...tail])

  return simpleFind(extremesHayshack, needle)
    || simpleFind(extremesHayshack.reverse(), needle)
}
