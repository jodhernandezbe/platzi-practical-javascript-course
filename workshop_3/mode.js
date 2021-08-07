function mode(List) {

    const listCount = {};

    List.map(
        function (element) {
            if (listCount[element]) {
                listCount[element] += 1;
            } else {
                listCount[element] = 1;
            };
        }
    );

    const listArray = Object.entries(listCount).sort(
        function (elementA, elementB) {
            return elementA[1] - elementB[1];
        }
    );


    return listArray[listArray.length - 1][0]

};