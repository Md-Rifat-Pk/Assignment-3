function gonoVote(array) {
    if (!Array.isArray(array)) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for (const vote of array) {
        if (vote === "ha") {
            haCount++;
        } 
        else if (vote === "na") {
            naCount++;
        }
    }

    if (haCount > naCount) {
        return true;
    } 
    else if (haCount === naCount) {
        return "equal";
    } 
    else {
        return false;
    }
}