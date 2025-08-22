function bestFriend(array) {

    // Initialize with the first friend's name and its length
    let maxLength = array[0].length;
    let maxName = array[0];

    // Loop through the remaining friends
    for (let i = 1; i < array.length; i++) {

        // If current name is longer than maxLength, update maxLength and maxName
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
            maxName = array[i];
        }
    }

    // Return the name with the longest length
    return maxName;
}

const friends = ['rabbi', 'shahadat', 'nazim', 'ahsanhabib', 'hasib', 'rifat', 'shakib'];

const longestFriendName = bestFriend(friends);

console.log(longestFriendName);