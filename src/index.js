// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length < 1 || matrix.length === 0) return [];
    return matrix.reduce(
        (acc, rec, index) =>
            index % 2 === 0
                ? [...acc, ...rec]
                : [...acc, ...rec.sort((a, b) => b - a)],
        []
    );
};
