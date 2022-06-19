// Your code here
function createEmployeeRecord(array){
    const records ={
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return records
}

function createEmployeeRecords(array){
    let newArr = []
    array.forEach(arr=>{
        newArr.push(createEmployeeRecord(arr))
    })
    return newArr
}

function createTimeInEvent(hrs, dates){

  time =[

    {
      type: "TimeIn",
      hour: "hrs",
      date: "dates"
    }

  ]
  return time

}


function createTimeInEvent(){
 
}

function hoursWorkedOnDate() {

}

function wagesEarnedOnDate(){

}

function allWagesFor(){

}
function calculatePayroll(){

}