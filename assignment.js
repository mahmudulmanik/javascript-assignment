// ----------------Convert Feet To Miles :-----------------

function feetToMile(feet) {
    if (feet <= 0) {
        return "Value cannot be Zero or less than Zero."
    }
    const mile = (feet / 5280);
    return mile;
}

const miles = feetToMile(5000).toFixed(3);
console.log("Total Mile: ", miles);
// ---------------End converter----------------------


//--------------Total Wood Calculator :-------------------

function woodCalculator(chairNum, tableNum, bedNum) {
    if (chairNum < 0 || tableNum < 0 || bedNum < 0) {
        return "Value cannot be less than Zero."
    } else {
        const totalNum = ((chairNum * 1) + (tableNum * 3) + (bedNum * 5));
        return totalNum;
    }

}

const totalWoods = woodCalculator(14, 5, 12);
console.log("Total Wood: ", totalWoods);

//--------------End woordCalculator------------------




/**function brickCalculator(buildingNum) {
    // var brickNum = 0;
    if (buildingNum <= 10) {
        var brickNum01 = (buildingNum * 15 * 1000);
    } 
    else if (buildingNum > 10 && buildingNum < 20) {
        var brickNum02 = (buildingNum * 12 * 1000);
    }
    else if (buildingNum > 20) {
        var brickNum03 = (buildingNum * 10 * 1000);
    }

    const totalbrick = (brickNum01 + brickNum02 + brickNum03);
    return totalbrick;

}

var totalBrickNum = brickCalculator(10)
console.log("Total Bricks: ", totalBrickNum)*/



//------Find out My Tiny Friend: --------- 
function tinyFriend(friendName) {
    let shortLength = Infinity;
    let tinyValue = "";

    if (friendName.length < 0) {
        return "Name space cannot be empty";

    } else {
        for (let i = 0; i < friendName.length; i++) {
            if (friendName.length < shortLength) {
                tinyValue = friendName[i];
            }
        }
    }
    return tinyValue;
}

var allFriendName = ["rahim", "karim", "jabbar", "eve", "yo"];
var tinyFriendName = tinyFriend(allFriendName);
console.log("My Tiny Friend's Name is: ", tinyFriendName);

//----------- End of the story ------