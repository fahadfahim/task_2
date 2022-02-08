
function MatchingCharacters(str) {
    var characters = 0
    for (var i = 0; i < str.length; i++) {
        var charObj = {}
        var lastIdx = str.lastIndexOf(str[i])
        if (i == lastIdx) continue
        for (var j = i + 1; j < lastIdx; j++) {
            if (charObj[str[j]] == undefined) charObj[str[j]] = str[j]
        }
        if (characters < Object.keys(charObj).length) characters = Object.keys(charObj).length
    }
    return characters
}

console.log(MatchingCharacters('ghececgkaem'))
console.log(MatchingCharacters('ahyjakh'))
console.log(MatchingCharacters('abccdefghi'))