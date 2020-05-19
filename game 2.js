function playGame1() {
	var answer = parseInt(Math.random() * 100);
	
	while(true) {
		var userAnswer = prompt("Введите число от 0 до 100. Или нажмите q для выхода")
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
			alert("Вы угадали");
			break;
		} else {
			alert("Необходимо ввести число");
		}
	}
}