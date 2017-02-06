/**
 * Solving Experience E27: ziplist
 * http://courses.ics.hawaii.edu/ics314s17/morea/coding-standards/experience-five-problems-2.html
 * Created by shaziney on 2/5/17.
 * Attempt 2
 */

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
  const zippedList = [];
  if (list1.length === list2.length) {
    for (let i = 0; i < list1.length; i += 1) {
      zippedList.push(list1[i], list2[i]);
    }
    return zippedList;
  }
  return 'The length of each list must be the same for this function to work properly.';
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testList1, testList2));