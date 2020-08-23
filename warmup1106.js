const square01 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

];


const turnSquare = (square) => {
    let newSquare = [];

    for (let i = 0; i < square.length; i++) {
        let squareRow = [];
        for (let j = 0; j < square[0].length; j++) {
            squareRow.push(square[j][square[0].length - i -1] );
        }
        newSquare.push(squareRow);
    }
    return newSquare; 

}

console.table(turnSquare(square01));