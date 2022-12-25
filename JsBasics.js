// 1. Count no of chars in a string.

    let charCount = (string) => {return string.length}
    console.log(charCount("gsnop"));

// 2. Find largest of Two Numbers

    let findLargeNum = (a,b) =>a>b?a:b;
    console.log(findLargeNum(10,20));

// 3.fn that returns boolean if a number is between 5000-9999

    let checkNumber = (num) =>{
        if(num > 5000 && num <= 9999)
            return true;
        else
            return false;
    }

//4.funtcion that returns cube root of the number

    let findCubeRoot = (num) => num**(1/3)
    console.log(findCubeRoot(27));

//5.function that converts inches into feet

    function toFeet(inches){
        return inches/12
    }
    console.log(toFeet(120));

// 6.function to convert degrees to fahrenheit

    function d2F(deg){
        return (deg*1.8)+32;
    }
    console.log(d2F(40));

// 7.function to convert lbs to kg

    let toKilos = (lbs) => lbs / 2.20462;
    let toPounds = (kg) => kg * 2.20462;
    console.log(toKilos(100));
    console.log(toPounds(60));

// 10.function that returns longest string

    function findLongest(str1,str2){
        if(str1.length > str2.length)
            return str1
        else
            return str2
    }
    console.log(findLongest("gsn","gsnop"));

// 11.function to find shortest string in array

    var x = ["gsn","s","gsnop","swaminathan"];
    function findShortest(arr){
        var word = arr[0];
        for(let i=0;i<arr.length;i++){
            if(arr[i].length < word.length){
                word = arr[i];
            }
        }
        return word;
    }

