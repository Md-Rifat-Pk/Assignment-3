function analyzeText(str) {
    if (typeof str !== 'string' || str.trim().length === 0) {
        return "Invalid";
    }

    const tokenCount = str.split(" ").join("").length;

    const words = str.split(" ");
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return {
        longwords: longestWord,
        token: tokenCount
    };
}
