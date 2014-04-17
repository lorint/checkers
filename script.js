function ChessController($scope){

	$scope.board =
		[["","R","","R","","R","","R"],
		["R","","R","","R","","R",""],
		["","R","","R","","R","","R"],
		["","","","","","","",""],
		["","","","","","","",""],
		["B","","B","","B","","B",""],
		["","B","","B","","B","","B"],
		["B","","B","","B","","B",""]];

	// When a cell is clicked, we want this array to be
	// cranked up with a list of all the valid moves
	$scope.allValidMoves=[];

	$scope.makeMove = function(x,y){
		$scope.allValidMoves = validMoves(x,y);
	}

}

// Here's the function where your pseudocode work can
// be materialized into actual javascript!
function validMoves(x,y)
{
	// If it's the start of the game and black's turn,
	// calling this function with x and y of 2,5 would
	// return this:
	return [[1,4],[3,4]];

	// If a blank cell is clicked -- one without a piece present,
	// it should return a blank array -- []
}

