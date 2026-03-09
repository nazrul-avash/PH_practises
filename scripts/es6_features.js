function simpleArraySum(ar) {
    // Write your code here
    let counter = 0;
    ar.forEach(element => {
        counter += element; 
    });
    return counter;
}

function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    for (let index=0; index<a.length;index++){
        if (a[index]>b[index]){
            aliceScore++;
        }
        else if(a[index]>b[index]){
            bobScore++;
        }
    
    }
    return [aliceScore,bobScore];

}

function diagonalDifference(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let row =0; row<arr.length;row++){
        for (let column = 0; column<arr[0].length;column++){
            if (row === column){
                primaryDiagonal += arr[row][column];
            }
            if(row+column === arr.length-1){
                secondaryDiagonal += arr[row][column];

            }
        }
    }
    return Math.abs(primaryDiagonal-secondaryDiagonal);

}
function plusMinus(arr) {
    // Write your code here
    let positive=0, negative=0, zero = 0;
    arr.forEach((el) => {
        el>0?positive++:el<0?negative++:zero++;
    });
    console.log((positive/arr.length).toFixed(6));
    console.log((negative/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));

}


function staircase(n) {
    // Write your code here
    let line = "";
    for (let i = 0; i < n; i++){
         line = " ".repeat(n-i) + "*".repeat(i+1);
         console.log(line);
        
    }
   

}

function miniMaxSum(arr) {
    // Write your code here
    let min = 0, max = 0;
    const sortedArr = arr.sort((a,b) => a-b);
    sortedArr.slice(0,arr.length-1).forEach((el) => min= min+el);
    sortedArr.slice(1,arr.length).forEach((el) => max =max +el);
    console.log(min +" "+max);
   

}

function birthdayCakeCandles(candles) {
    // Write your code here

}

function timeConversion(s) {
    // Write your code here
    const hour = parseInt(s.slice(0,2));
    const mode = s.endsWith("AM")?"AM":"PM";
    if (mode === "AM"){
        if (hour === 12){
            return "00"+s.slice(2,8);
        }
        else{
            return s.slice(0,8);
        }

}
else if (mode === "PM"){
    if (hour === 12){
        return s.slice(0,8);
    }
    else{
        return (hour + 12).toString() + s.slice(2,8);
    }
}
}

function gradingStudents(grades) {
    // Write your code here
    for (const grade in grades){
        if (grade < 38){
            continue;
        }
        else if 
    }

timeConversion("07:05:45PM");