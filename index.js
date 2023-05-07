const returnFirstTwoDrivers = drivers => {
    return (drivers.slice(0,2));
}
const returnLastTwoDrivers = drivers => {
    return (drivers.slice(2,5));
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (x) => {
    return (fare) => x*x
}
function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2
}
function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}
function fareTripler(y) {
    return y*3
}