function is_even(number) {
    if (number % 2 === 0) {
        return true
    } 
    else {
        return false
    }
}

function median(List) {

    List.sort();

    const listHalf = parseInt(List.length / 2);

    if (is_even(List.length)) {
        return (List[listHalf - 1] + List[listHalf]) / 2
    } else {
        return List[listHalf]
    };
};