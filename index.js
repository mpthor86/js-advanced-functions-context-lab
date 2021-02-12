/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    return arr.map(function(emp) {
        return createEmployeeRecord(emp)
    })
}

function createTimeInEvent(timeStamp) {
    let [date, time] = timeStamp.split(' ')
        this.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(time, 10),
            date  
        })
        return this
}

function createTimeOutEvent(timeStamp) {
    let [date, time] = timeStamp.split(' ')
        this.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(time, 10),
            date  
        })
        return this
}

function hoursWorkedOnDate(search) {
    let timeIn = this.timeInEvents.find(function(e){
        return e.date === search
    })
    let timeOut = this.timeOutEvents.find(function(e){
        return e.date === search
    })
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(search) {
    //debugger
    let wages = hoursWorkedOnDate.call(this, search) * this.payPerHour
    return parseFloat(wages.toString())
}

function findEmployeeByFirstName(arr, name) {
    return arr.find(function(records){
        return records.firstName === name
    })
}

function calculatePayroll(arr) {
    return arr.reduce(function(memo, records){
        return memo + allWagesFor.call(records)
    }, 0)
}