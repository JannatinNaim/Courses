// ! GLOBAL SIZE
const size = 8;

// Square Star Pattern
function squareStar(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let column = 0; column < size; column++) {
            string += "*";
        }
        string += "\n";
    }

    return string;
}

console.log(squareStar(size));

// Hollow Square Pattern
function hollowStar(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let column = 0; column < size; column++) {
            if (row === 0 || row === size - 1 || column === 0 || column === size - 1) {
                string += "*";
            } else {
                string += " ";
            }
        }
        string += "\n";
    }

    return string;
}

console.log(hollowStar(size));

// Right Triangle Pattern
function rightTriangle(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let space = 0; space < size - row - 1; space++) {
            string += " ";
        }

        for (let column = 0; column <= row; column++) {
            string += "*";
        }
        string += "\n";
    }

    return string;
}

console.log(rightTriangle(size));

// Left Triangle Pattern
function leftTriangle(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let column = 0; column <= row; column++) {
            string += "*";
        }
        string += "\n";
    }

    return string;
}

console.log(leftTriangle(size));

// Downward Triangle Pattern
function downwardTriangle(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        // for (let column = size; column > row; column--) {
        //     string += "*";
        // }
        for (let column = 0; column < size - row; column++) {
            string += "*";
        }
        string += "\n";
    }

    return string;
}

console.log(downwardTriangle(size));

// Hollow Triangle Pattern
function leftTriangle(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let column = 0; column <= row; column++) {
            if (row > 1 && column > 0 && column < row && row !== size - 1) {
                string += " ";
            } else {
                string += "*";
            }
        }
        string += "\n";
    }

    return string;
}

console.log(leftTriangle(size));

// Pyramid Pattern
function pyramid(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let space = 0; space < size - row - 1; space++) {
            string += " ";
        }

        for (let column = 0; column <= row * 2; column++) {
            string += "*";
        }

        string += "\n";
    }

    return string;
}

console.log(pyramid(size));

// Reversed Pyramid Pattern
function reversedPyramid(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let space = 0; space < row; space++) {
            string += " ";
        }

        for (let column = 0; column <= (size - row) * 2 - 2; column++) {
            string += "*";
        }

        string += "\n";
    }

    return string;
}

console.log(reversedPyramid(size));

// Hollow Pyramid Pattern
function hollowPyramid(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let space = 0; space < size - row - 1; space++) {
            string += " ";
        }

        for (let column = 0; column <= row * 2; column++) {
            if (column > 0 && column < row * 2 && row !== size - 1) {
                string += " ";
            } else {
                string += "*";
            }
        }

        string += "\n";
    }

    return string;
}

console.log(hollowPyramid(size));

// Diamond Pyramid Pattern
function diamond(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let space = 0; space < size - row - 1; space++) {
            string += " ";
        }

        for (let column = 0; column <= row * 2; column++) {
            string += "*";
        }

        string += "\n";
    }

    for (let row = 0; row < size; row++) {
        if (row === 0) continue;

        for (let space = 0; space < row; space++) {
            string += " ";
        }

        for (let column = 0; column <= (size - row) * 2 - 2; column++) {
            string += "*";
        }

        string += "\n";
    }

    return string;
}

console.log(diamond(size));

// Hollow Diamond Pattern
function hollowDiamond(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let space = 0; space < size - row - 1; space++) {
            string += " ";
        }

        for (let column = 0; column <= row * 2; column++) {
            if (column > 0 && column < row * 2) {
                string += " ";
            } else {
                string += "*";
            }
        }

        string += "\n";
    }

    for (let row = 0; row < size; row++) {
        if (row === 0) continue;

        for (let space = 0; space < row; space++) {
            string += " ";
        }

        for (let column = 0; column <= (size - row) * 2 - 2; column++) {
            if (column === 0 || column === (size - row) * 2 - 2) {
                string += "*";
            } else {
                string += " ";
            }
        }

        string += "\n";
    }

    return string;
}

console.log(hollowDiamond(size));

// Hourglass Pattern
function hourglass(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let space = 0; space < row; space++) {
            string += " ";
        }

        for (let column = 0; column < (size - row) * 2 - 1; column++) {
            string += "*";
        }

        string += "\n";
    }

    for (let row = 0; row < size; row++) {
        if (row === 0) continue;
        for (let space = 0; space < size - row - 1; space++) {
            string += " ";
        }

        for (let column = 0; column <= row * 2; column++) {
            string += "*";
        }

        string += "\n";
    }

    return string;
}

console.log(hourglass(size));

// Right Pascal Pattern
function rightPascal(size) {
    let string = "";

    for (let row = 0; row < size; row++) {
        for (let column = 0; column < size; column++) {
            if (column <= row) string += "*";
        }
        string += "\n";
    }

    for (let row = 0; row < size; row++) {
        if (row === 0) continue;

        for (let column = 0; column < size; column++) {
            if (column < size - row) string += "*";
        }
        string += "\n";
    }

    return string;
}

console.log(rightPascal(size));
