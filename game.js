function playGame2() {
	var answer = parseInt(Math.random() * 100);
	var playerNum = 1
	while(true) {
		var userAnswer = prompt("Игрок " + playerNum +" Введите число от 0 до 100. Или нажмите q для выхода")
		if (userAnswer == "q") {
			alert("Спасибо за игру");
			break;
		}
		userAnswer = parseInt(userAnswer);

		if (userAnswer > answer) {
			alert("Ваш ответ слишком большой");
		} else if (userAnswer < answer) {
			alert("ваш ответ слишком маленький");
		} else if (userAnswer == answer) {
			alert("Вы угадали, выиграл игрок " + playerNum);
			break;
		} else {
			alert("Необходимо ввести число");
		}

		if (playerNum == 1) {
			playerNum = 2;
		} else {
			playerNum = 1;
		}
	}
}