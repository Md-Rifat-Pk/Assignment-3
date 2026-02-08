function finalScore(omr) {
    if (typeof omr !== 'object' || omr === null || Array.isArray(omr)) {
        return "Invalid";
    }

    const { right, wrong, skip } = omr;

    if (right + wrong + skip !== 100) {
        return "Invalid";
    }

    const finalScore = (right * 1) - (wrong * 0.5);

    return Math.round(finalScore);
}