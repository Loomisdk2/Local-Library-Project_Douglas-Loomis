function findAnyById(array, targetId) {
    //use .find()
    return array.find((arrayIndex) => arrayIndex.id === targetId);
}

module.exports = findAnyById