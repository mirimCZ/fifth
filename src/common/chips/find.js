import {List} from 'immutable'
// TODO: fix there is problem with extremes when needle has more then
// half of hayshack values, eg:
// h: new List([1, 2, 3, 4, 5, 6, 7, 8, 9])
// n: new List([9, 1, 2, 3, 4, 5])
// slicing moves number 5 to the begging of array
// and indexOf gets the first indexIt finds - but thats wrong index
export default function find(hayshack, needle) {
  return simpleFind(hayshack, needle)
  || simpleFind(hayshack.reverse(), needle)
  || extremesFind(hayshack, needle)
}

function simpleFind(hayshack, needle) {
  console.log('---------------------------');
  console.log('  in', hayshack.toArray());
  console.log('find', needle.toArray());
  let match = 0
  let lastIndex = -1

  needle.map((value) => {
    const myIndex = hayshack.indexOf(value)
    if(isFirstMatch(myIndex, lastIndex) || isIndexAfter(myIndex, lastIndex)) {
      lastIndex = myIndex
      match++
    }
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
