// Code your solution in this file!
const returnFirstTwoDrivers = function (driversArray) {
    return driversArray.slice(0,2)
};

const returnLastTwoDrivers = function (driversArray) {
     return driversArray.slice(2)
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    };
 };

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (arrayOfDrivers,driverFunction) {
    return driverFunction(arrayOfDrivers)
};