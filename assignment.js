//feetToMile funtion
function feetToMile(feet){
    var mile = feet * 0.00018939;
    return mile;
}


//woodCalculator funtion
function woodCalculator(chair, bad, table){
    var chairWoodCount = chair * 1;
    var badWoodCount = bad * 3;
    var tableWoodCount = table * 5;
    var totalWood = chairWoodCount + badWoodCount + tableWoodCount;
    return totalWood;
}

//tinyFriend function
function tinyFriend(friends){
    var shortName = friends[0];
    for(var i = 0; i < friends.length; i++){
        var currentName = friends[i];
        if(currentName.length = friends.length){
            shortName = currentName;
        }
    }
    return shortName;
}

