// code your solution here
function saturdayFun(str="roller-skate"){
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = 'go to the office'){
    return `This Monday, I will ${str}.`
}

function wrapAdjective(result="*"){
    let emphatic = function(str){
        return `You are ${result}${str}${result}!`
    }
    return emphatic;
}          

