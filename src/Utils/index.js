export function checkVertical(x, y, player, board) {
	if (x <= 2 && x >= 0) {
		let count = 0;
		for (var i = 0; i < 4; i++) {
			if (board[x+i][y] !== player) break;
			if (board[x+i][y] === player) count++;
			if (count === 4) return true
		}
	}
	return false
}


export function checkHorizontal(x, player, board) {
	let count = 0;
	for (var i = 0; i < 7; i++) {
		if (board[x][i+1] === player) count++;
		if (count === 4) return true
	}
}

export function checkDiagonal(player, board) {
	function rightDiagonal() {
		for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c] === player) {
					const check = board[r][c]
          if (check === board[r - 1][c + 1] &&
							check === board[r - 2][c + 2] &&
							check === board[r - 3][c + 3]) {
            return true
          }
        }
      }
		}
	}
	function leftDiagonal() {
		for (let r = 3; r < 6; r++) {
			for (let c = 3; c < 7; c++) {
				if (board[r][c] === player) {
					const check = board[r][c]
					if (check === board[r - 1][c - 1] &&
							check === board[r - 2][c - 2] &&
							check === board[r - 3][c - 3]) {
							return true
						}
				}
			}
		}
	}
	if (rightDiagonal() || leftDiagonal()) {
		return true
	}
}		