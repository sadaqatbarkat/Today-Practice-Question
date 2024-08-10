let anagramWords = ["bat","tap","cat","tab","pat"]


function findAnagrams(words) {
    let anagramGroups = {};

    function getSortedKey(word) {
        return word.split('').sort().join('');
    }

    words.forEach(word => {
        const key = getSortedKey(word);

        if (!anagramGroups[key]) {
            anagramGroups[key] = [];
        }

        anagramGroups[key].push(word);
    });

    return Object.values(anagramGroups).filter(group => group.length > 1);
}

let words = ["bat", "tap", "cat", "tab", "pat"];
console.log(findAnagrams(words));






















