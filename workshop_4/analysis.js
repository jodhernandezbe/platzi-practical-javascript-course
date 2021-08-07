function salariesMedian(sortedSalaries) {

    const half = parseInt(sortedSalaries.length / 2);

    if (sortedSalaries.length % 2 === 0) {
        return (sortedSalaries[half -  1] + sortedSalaries[half])/2;
    } else {
        return sortedSalaries[half];
    };

};


function topXMedian(sortedSalaries, pecentage) {
    const spliceStart = (sortedSalaries.length * (100 - pecentage))/100;
    const spliceCount = sortedSalaries.length - spliceStart;
    const topXSortedSalaries = sortedSalaries.splice(spliceStart, spliceCount);

    const topXMedianSalary = salariesMedian(topXSortedSalaries);

    return topXMedianSalary;
};


function main() {

    const colSalaries = colombia.map(
        function (person) {
            return person.salary;
        }
    );

    const colSortedSalaries = colSalaries.sort(
        function(salaryA, salaryB) {
            return salaryA - salaryB;
        }
    );

    const generalColMedianSalary = salariesMedian(colSortedSalaries);


    const top10MedianSalary = topXMedian(colSortedSalaries, 10);

    return {"generalColMedianSalary": generalColMedianSalary,
            "top10MedianSalary": top10MedianSalary};

};
