function tinyFriend(friendName) {

    let tinyValue = "";

    if (friendName.length < 0) {
        return "Name space cannot be empty";

    } else {
        for (let i = 0; i < friendName.length; i++) {
            if (friendName.length < tinyValue) {
                tinyValue = friendName[i];

            }
        }
    }
    return tinyValue;
}

var allFriendName = ["rahim", "karim", "jabbar", "eve"];
var tinyFriendName = tinyFriend(allFriendName);
console.log("My Tiny Friend's Name is: ", tinyFriendName);