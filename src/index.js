// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    matrix = matrix.map((item, index) => {
        if (index % 2 != 0) {
            item.reverse();
        }
        return item;
    });
    return matrix.flat();
};
