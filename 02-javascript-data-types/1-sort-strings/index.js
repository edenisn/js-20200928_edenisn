/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    switch(param) {
        case 'asc':
            return sortingArr(arr, 1);
        case 'desc':
            return sortingArr(arr, -1);
        default:
            return sortingArr(arr, 1);
    }

    function sortingArr(array, order) {
        return [...array].sort((str1, str2) => {
            return order * str1.localeCompare(str2, ['ru', 'en'], {sensitivity: 'variant', caseFirst: 'upper'});
        });
    }
}
