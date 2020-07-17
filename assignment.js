// ----------------Convert Feet To Miles :-----------------

function feetToMile(feet) {
    if (feet <= 0) {
        return "Value cannot be Zero or less than Zero."
    } else {
        var mile = (feet / 5280);
        return mile;
    }
}

var miles = feetToMile(500);
console.log("Total Miles: ", miles);
// ---------------End converterFeetToMile----------------------


//---------------Total Wood Calculator :-------------------

function woodCalculator(chairNum, tableNum, bedNum) {
    if (chairNum < 0 || tableNum < 0 || bedNum < 0) {
        return "Furniture Number cannot be less than Zero."
    } else {
        var totalNum = ((chairNum * 1) + (tableNum * 3) + (bedNum * 5));
        return totalNum;
    }

}

var totalWoods = woodCalculator(50, 50, 50);
console.log("Total Woods: ", totalWoods);

//--------------End woodCalculator------------------


//---------Total Bricks Calculator: ----------------

function brickCalculator(buildingNum) {
    if (buildingNum == 0) {
        return 0;
    } else if (buildingNum < 0) {
        return "Building Number cannot be less than Zero";
    } else if (buildingNum <= 10 && buildingNum >= 1) {
        let brickNum = buildingNum * 15000;
        return brickNum;
    } else if (buildingNum > 10 && buildingNum <= 20) {
        let brickNum = ((buildingNum - 10) * 12000) + 150000;
        return brickNum;
    } else if (buildingNum > 20) {
        let brickNum = ((buildingNum - 20) * 10000) + 270000;
        return brickNum;
    }
}

var totalBrickNum = brickCalculator(45)
console.log("Total Bricks: ", totalBrickNum)
    //-----------End of brickCalculator-----------


//----------Find out My Tiny Friend: -------------
function tinyFriend(friendName) {
    let minLength = friendName[0].length;
    let tinyValue = "";

    if (friendName.length <= 0) {
        return "Name storage cannot be empty";

    } else {
        for (let i = 0; i < friendName.length; i++) {
            if (friendName[i].length < minLength) {
                tinyValue = friendName[i];
                minLength = friendName[i].length;
            }
        }
    }
    return tinyValue;
}

var allFriendName = ["Alucard", "Barry", "Allen", "Eve", "Mirai", "Earl", "Jane", "Patric"];
var tinyFriendName = tinyFriend(allFriendName);
console.log("My Tiny Friend's Name is: ", tinyFriendName);

//----------- End of the Line -------------------