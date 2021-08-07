function average(List){

    const listSum = List.reduce(
        function (addedValue=0, newElement) {
            return addedValue + newElement;
        }
    );
    
    const listAverage = listSum / List.length;

    return listAverage
}