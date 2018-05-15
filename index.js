mnojimoe();
mnojitel();
result();

//Далее идет функции

function mnojimoe() {
	/*
	Выводить первый значение, пример: 2 * 3 = ( первый второй * второй значение)
	Выводить те числа которые выбраны в настройках. по умолчании выводить 
	таблица умножение для 2.
	*/
	document.getElementById("mnojimoe").innerHTML = randomMnojimoe( activeChboxNumber( checkChbox() ) );
}

function mnojitel() {
	//Выводить рандомное число от 1 до 8 для умножения
	document.getElementById("mnojitel").innerHTML = Math.floor(Math.random() * 10);
}

function checkChbox() {
	/*Проверка раздел settings, 
	проверяет каждый чекбокс и вернеть массив активных
	checkbox, элементы внутри массива типа строка.
	*/
	var allChbox = ['two','three','four','five','six','seven','eight','nine'];
	var activeChbox = [];
	var chbox;

	for ( i = 0; i < allChbox.length; i++) {
		
		chbox = document.getElementById(allChbox[i]);
		
		if (chbox.checked) {
			activeChbox.push(allChbox[i]);
		} else {
			continue;
		}	
	}

	return activeChbox;
}

function activeChboxNumber(checkedArray) {
	/*
	Принимает на вход, массив активных чекбоксов, элементы которого типа строка.
	Вернет массив активных чекбоксов, элементы которого имеет тип число.
	*/
	var result = [];

	for (i = 0; i < checkedArray.length; i++) {
		
		switch(checkedArray[i]) {
			case 'two':
				result.push(2);
				break;

			case 'three':
				result.push(3);
				break;

			case 'four':
				result.push(4);
				break;

			case 'five':
				result.push(5);
				break;

			case 'six':
				result.push(6);
				break;

			case 'seven':
				result.push(7);
				break;

			case 'eight':
				result.push(8);
				break;

			case 'nine':
				result.push(9);
				break;
		}
	}

	return result;
}

function randomMnojimoe(activeChboxNumber) {
	/*
	Вернет рандомный число из списка активных чекбоксов activeChboxNumber
	*/
	if (activeChboxNumber.length < 2) {
		return activeChboxNumber[0];
	} else {
		return document.getElementById("mnojimoe").innerHTML = activeChboxNumber[Math.floor(Math.random() * (activeChboxNumber.length))];
	}
}

function result() {
	//Выводить результать умножения функции mnojimoe() and mnojitel()
	document.getElementById("result").innerHTML = sum();
}

function sum() {
	//Умножает два число вернувший функции mnojimoe() and mnojitel()
	var mnojimoe = document.getElementById('mnojimoe').innerHTML;
	var mnojitel = document.getElementById('mnojitel').innerHTML;

	return Number(mnojimoe) * Number(mnojitel);
}