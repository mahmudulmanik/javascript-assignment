function tinyFriend(friend) {
    let singleFriend = friend[0];
    for (let i = 0; i < friends.length; i++) {
        let element = friends[i];
        if (element < singleFriend) {
            singleFriend = element;
        }
    }
    return singleFriend;
};
let friends = ["Johir", "Shaki", "Abid", "Rashel", "Soriful", "Manik"];
let results = tinyFriend(friends);
console.log(results);