const saturdayFun = function (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(take = "#") {
    const emphatic = function(adjective = "special") {
        return `You are ${take}${adjective}${take}!`
    }
    return emphatic
}
   


