// Square code
function perimeterSquare(sideSquare) {
    return sideSquare * 4
};

function areaSquare(sideSquare) {
    return sideSquare ** 2
 };

// Triangle code
function perimeterTriangle(sideTriangle1, sideTriangle2, baseTriangle) {
    return sideTriangle1 + sideTriangle2 + baseTriangle
};

function areaTriangle(heightTriangle, baseTriangle) {
    return (heightTriangle + baseTriangle)/2;
};


// Circle code
var PI = Math.PI;

function perimeterCircle(radiusCircle) {
    return 2 * radiusCircle * PI
};

function areaCircle(radiusCircle) {
    return PI * radiusCircle ** 2
};

// Here we are interacting with the HTML
function calculateperimeterSquare() {
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const perimeter = perimeterSquare(value);
    alert(perimeter);
};

function calculateareaSquare() {
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const area = areaSquare(value);
    alert(area);
};