const { max } = require("rxjs");

function mode(arr){
    const frequencyTable = {}

    arr.forEach(element => frequencyTable[element] = frequencyTable[element] + 1 || 1);

    console.log(frequencyTable);

    let mode = [];
    let maxFrequency = 0;

    for(const key in frequencyTable){
        if(frequencyTable[key] > maxFrequency){
            modes = [Number(key)];            
            maxFrequency = frequencyTable[key]
        }
        else if(frequencyTable[key] === maxFrequency){
            modes.push(Number(key));
        }
    }
    if(modes.length === Object.keys(frequencyTable).length) modes = []

    return [...modes,maxFrequency]


}



function mode2(arr){

    let mode=[];
    let freq = {};
    let max = 0;

    for(let num of arr){
        
        freq[num] = freq[num] + 1 ||  1;

        if(freq[num]===max){
            mode.push(num);
        }
        if(freq[num]>max){
            max = freq[num]
            mode =[]
            mode.push(num)
        }


    }
    console.log(freq)
    console.log(mode)


}

const data = [25,17,40,63,25,54,70,54,25]

console.log(mode2(data))