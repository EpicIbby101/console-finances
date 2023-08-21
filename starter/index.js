var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

// TOTAL NUMBER OF MONTHS INCLUDED IN DATASET:
// We want to create a variable that calculates how many entries in the array.
const totalMonths = finances.length;
// We then simply console log the results
console.log("Total months: ", totalMonths)


// THE NET TOTAL AMOUNT OF PROFIT/ LOSSES OVER THE ENTIRE PERIOD:
// Here we create a variable with a starting value of 0
let netTotal = 0;

// We initialize a for loop that iterates over the array, 
for (let i = 0; i < finances.length; i++) {
  netTotal += finances[i][1]
}
console.log("Total PnL: $", netTotal)


// THE AVERAGE OF THE CHANGES IN PROFIT/ LOSSES OVER THE ENTIRE PERIOD:
// Here we create a variable with a starting value of 0
let totalChange = 0;

// We initialize a for loop that iterates over the array. Inside the loop we calculate the change between the current period value and the previous value.
// We subtract the previous value from the current value to calculate the change.
for (var i = 1; i < finances.length; i++) {
  let change = finances[i][1] - finances[i - 1][1];
  // The change is added to the 'totalChange' variable. This closes the loop.
  totalChange += change;
}

// Now we calculate the average change by using the (Total/(Number of months - 1)) equation. Then finally we console log the result
let averageChange = totalChange / (finances.length - 1)
console.log("Average change: ", averageChange)

// Side note: From my research, starting from the second element and skipping the first when looping through data is a common practice when we want to calculate changes between consecutive elements ina dataset. When skipping the first element we're effectively calculating the change between the second element and the first element, the third with the second and so on. This allows us to calculate changes that correspond to the actual time periods represented.


// THE GREATEST INCREASE IN PROFIT/ LOSSES (DATE AND AMOUNT) OVER THE ENTIRE PERIOD:
// We've initialized a variable 'greatestIncrease' to keep track of the largest increase. The date and amount starts at null and 0.
let greatestIncrease = { date: null, amount: 0};

// We loop through the data starting from the second element.
// Then for each month, we calculate the change in profit compared to the previous month by subtracting the previous profit from the current profit.
for (let i = 1; i < finances.length; i++) {
  let change = finances[i][1] - finances[i - 1][1]

  // Then if the calculated change is larger than the current 'greatestIncrease.amount', update the 'greatestIncrease' with the current date and amount.
  if (change > greatestIncrease.amount) {
    greatestIncrease.date = finances[i][0];
    greatestIncrease.amount = change;
  }
}
// Finally we console log the result.
console.log("Greatest increase in Profits/ Losses: ", greatestIncrease)

// Essentially the code scans through the data, figures out how much profit changed from one month to the nect and keeps track of the larges positive change it finds along with the corresponding date.

// THE GREATEST DECREASE IN PROFIT/ LOSSES (DATE AND AMOUNT) OVER THE ENTIRE PERIOD:
let greatestDecrease = {date: null, amount: 0};

for (let i = 1; i < finances.length; i++) {
  let change = finances[i][1] - finances[i - 1][1]

  if (change < greatestDecrease.amount) {
    greatestDecrease.date = finances[i][0];
    greatestDecrease.amount = change;
  }
}
console.log("Greatest decrease in Profits/ Losses: ", greatestDecrease)

// Explanation:
// The code above is very similar to the code in the previous answer, but with some slight alterations:
// It calculates the change between a consecutive financial values and updates the 'greatestDecrease' object if a more negative change is found.
// We then console log the result.