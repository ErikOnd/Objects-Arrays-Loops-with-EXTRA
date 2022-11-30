let newArray = [34, 12, 2, 13, 6, 8]

for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] % 2 === 1) {
            newArray.splice(j, 1)
        }
    }
}

console.log(newArray)
