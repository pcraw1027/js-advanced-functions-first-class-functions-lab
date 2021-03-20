// Code your solution in this file!

/* function returnFirstTwoDrivers(passedInArr) {
    let newArr = [passedInArr[0], passedInArr[1]]
    return newArr
} */

const returnFirstTwoDrivers = function (passedInArr) {
    let newArr = [passedInArr[0], passedInArr[1]]
    return newArr
}

const returnLastTwoDrivers = function (passedInArr) {
    let i = passedInArr.length
    let newArr = [passedInArr[i-2], passedInArr[i-1]]
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(inInt) {
    return function(fare) {let num = parseInt(inInt) * parseInt(fare);
    return num}
}

const multiMultiplier = createFareMultiplier();

function fareDoubler(multiMultiplier) {
    return multiMultiplier * 2
}

function fareTripler(multiMultiplier) {
    return multiMultiplier * 3
}

function selectDifferentDrivers(driversArr, twoDrivers) {
    return twoDrivers(driversArr)
}