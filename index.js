var app = new Vue({
	el: '#app',
	data: {
		leftOperandArray: [2],
		rightOperandArray: [2,3,4,5,6,7,8,9],
		rightOperand: 1,
		leftOperand: 2,
		result: '?',
		leftAnswer: 2 * 1,
		upAnswer: Math.floor(Math.random() * 99),
		downAnswer: Math.floor(Math.random() * 99),
		rightAnswer: Math.floor(Math.random() * 99),
		randomAnswer: ['leftAnswer','upAnswer','downAnswer','rightAnswer'],
		colorFlag: '',
		erorColorFlag: ''
	},

	methods: {
		colorControl: function (bgc, fontColor, direction) {
			var left = document.getElementById(direction);
			left.style.backgroundColor = bgc;
			left.style.color = fontColor;
		},

		left: function () {
			if (this.leftOperandArray.length < 1) {
				this.leftOperand = 0;
				this.rightOperand = 0;
				alert('Вы должны выбрать хотябы один число!');
			} else {
				var res = this.rightOperand * this.leftOperand;

				if (this.leftAnswer == res) {
					this.result = res;
					this.colorControl('green', 'white' ,'left');
					this.colorFlag = 'left';
					this.erorColorFlag = '';
				} else {
					this.colorControl('red', 'white' ,'left');
					this.erorColorFlag = 'left';

					switch (res) {
						case this.upAnswer:
							this.result = this.upAnswer;
							this.colorControl('green', 'white' ,'up');
							this.colorFlag = 'up';
							break;
						case this.downAnswer:
							this.result = this.downAnswer;
							this.colorControl('green', 'white' ,'down');
							this.colorFlag = 'down';
							break;
						case this.rightAnswer:
							this.result = this.rightAnswer;
							this.colorControl('green', 'white' ,'right');
							this.colorFlag = 'right';
							break;
					}
				}
				var that = this;
				setTimeout(function () {
					if (that.erorColorFlag == '') {
						that.colorControl('white', 'black' ,that.colorFlag);
					} else {
						that.colorControl('white', 'black' ,that.erorColorFlag);
						switch (that.colorFlag) {
							case 'up':
								that.colorControl('white', 'black' ,'up');
								break;
							case 'down':
								that.colorControl('white', 'black' ,'down');
								break;
							case 'right':
								that.colorControl('white', 'black' ,'right');
								break;
						}
					}
					var leftRand = Math.floor(Math.random() * that.leftOperandArray.length);
					var rightRand = Math.floor(Math.random() * that.rightOperandArray.length);
					that.leftOperand = that.leftOperandArray[leftRand];
					that.rightOperand = that.rightOperandArray[rightRand];

					var rand = Math.floor(Math.random() * that.randomAnswer.length);
					var answer = that.randomAnswer[rand];
					switch (answer) {
						case 'leftAnswer':
							that.leftAnswer = that.rightOperand * that.leftOperand;
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'upAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = that.rightOperand * that.leftOperand;
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'downAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = that.rightOperand * that.leftOperand;
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'rightAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = that.rightOperand * that.leftOperand;
							break;
					}
					
					that.result = '?';
				}, 2000);
			}
		},
		up: function () {
			if (this.leftOperandArray.length < 1) {
				this.leftOperand = 0;
				this.rightOperand = 0;
				alert('Вы должны выбрать хотябы один число!');
			} else {
				var res = this.rightOperand * this.leftOperand;

				if (this.upAnswer == res) {
					this.result = res;
					this.colorControl('green', 'white' ,'up');
					this.colorFlag = 'up';
					this.erorColorFlag = '';
				} else {
					this.colorControl('red', 'white' ,'up');
					this.erorColorFlag = 'up';

					switch (res) {
						case this.leftAnswer:
							this.result = this.leftAnswer;
							this.colorControl('green', 'white' ,'left');
							this.colorFlag = 'left';
							break;
						case this.downAnswer:
							this.result = this.downAnswer;
							this.colorControl('green', 'white' ,'down');
							this.colorFlag = 'down';
							break;
						case this.rightAnswer:
							this.result = this.rightAnswer;
							this.colorControl('green', 'white' ,'right');
							this.colorFlag = 'right';
							break;
					}
				}
				var that = this;
				setTimeout(function () {
					if (that.erorColorFlag == '') {
						that.colorControl('white', 'black' ,that.colorFlag);
					} else {
						that.colorControl('white', 'black' ,that.erorColorFlag);
						switch (that.colorFlag) {
							case 'left':
								that.colorControl('white', 'black' ,'left');
								break;
							case 'down':
								that.colorControl('white', 'black' ,'down');
								break;
							case 'right':
								that.colorControl('white', 'black' ,'right');
								break;
						}
					}
					var leftRand = Math.floor(Math.random() * that.leftOperandArray.length);
					var rightRand = Math.floor(Math.random() * that.rightOperandArray.length);
					that.leftOperand = that.leftOperandArray[leftRand];
					that.rightOperand = that.rightOperandArray[rightRand];

					var rand = Math.floor(Math.random() * that.randomAnswer.length);
					var answer = that.randomAnswer[rand];
					switch (answer) {
						case 'leftAnswer':
							that.leftAnswer = that.rightOperand * that.leftOperand;
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'upAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = that.rightOperand * that.leftOperand;
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'downAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = that.rightOperand * that.leftOperand;
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'rightAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = that.rightOperand * that.leftOperand;
							break;
					}
					
					that.result = '?';
				}, 2000);
			}
		},
		down: function () {
			if (this.leftOperandArray.length < 1) {
				this.leftOperand = 0;
				this.rightOperand = 0;
				alert('Вы должны выбрать хотябы один число!');
			} else {
				var res = this.rightOperand * this.leftOperand;

				if (this.downAnswer == res) {
					this.result = res;
					this.colorControl('green', 'white' ,'down');
					this.colorFlag = 'down';
					this.erorColorFlag = '';
				} else {
					this.colorControl('red', 'white' ,'down');
					this.erorColorFlag = 'down';

					switch (res) {
						case this.upAnswer:
							this.result = this.upAnswer;
							this.colorControl('green', 'white' ,'up');
							this.colorFlag = 'up';
							break;
						case this.leftAnswer:
							this.result = this.leftAnswer;
							this.colorControl('green', 'white' ,'left');
							this.colorFlag = 'left';
							break;
						case this.rightAnswer:
							this.result = this.rightAnswer;
							this.colorControl('green', 'white' ,'right');
							this.colorFlag = 'right';
							break;
					}
				}
				var that = this;
				setTimeout(function () {
					if (that.erorColorFlag == '') {
						that.colorControl('white', 'black' ,that.colorFlag);
					} else {
						that.colorControl('white', 'black' ,that.erorColorFlag);
						switch (that.colorFlag) {
							case 'up':
								that.colorControl('white', 'black' ,'up');
								break;
							case 'left':
								that.colorControl('white', 'black' ,'left');
								break;
							case 'right':
								that.colorControl('white', 'black' ,'right');
								break;
						}
					}
					var leftRand = Math.floor(Math.random() * that.leftOperandArray.length);
					var rightRand = Math.floor(Math.random() * that.rightOperandArray.length);
					that.leftOperand = that.leftOperandArray[leftRand];
					that.rightOperand = that.rightOperandArray[rightRand];

					var rand = Math.floor(Math.random() * that.randomAnswer.length);
					var answer = that.randomAnswer[rand];
					switch (answer) {
						case 'leftAnswer':
							that.leftAnswer = that.rightOperand * that.leftOperand;
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'upAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = that.rightOperand * that.leftOperand;
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'downAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = that.rightOperand * that.leftOperand;
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'rightAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = that.rightOperand * that.leftOperand;
							break;
					}
					
					that.result = '?';
				}, 2000);
			}
		},
		right: function () {
			if (this.leftOperandArray.length < 1) {
				this.leftOperand = 0;
				this.rightOperand = 0;
				alert('Вы должны выбрать хотябы один число!');
			} else {
				var res = this.rightOperand * this.leftOperand;

				if (this.rightAnswer == res) {
					this.result = res;
					this.colorControl('green', 'white' ,'right');
					this.colorFlag = 'right';
					this.erorColorFlag = '';
				} else {
					this.colorControl('red', 'white' ,'right');
					this.erorColorFlag = 'right';

					switch (res) {
						case this.upAnswer:
							this.result = this.upAnswer;
							this.colorControl('green', 'white' ,'up');
							this.colorFlag = 'up';
							break;
						case this.downAnswer:
							this.result = this.downAnswer;
							this.colorControl('green', 'white' ,'down');
							this.colorFlag = 'down';
							break;
						case this.leftAnswer:
							this.result = this.leftAnswer;
							this.colorControl('green', 'white' ,'left');
							this.colorFlag = 'left';
							break;
					}
				}
				var that = this;
				setTimeout(function () {
					if (that.erorColorFlag == '') {
						that.colorControl('white', 'black' ,that.colorFlag);
					} else {
						that.colorControl('white', 'black' ,that.erorColorFlag);
						switch (that.colorFlag) {
							case 'up':
								that.colorControl('white', 'black' ,'up');
								break;
							case 'down':
								that.colorControl('white', 'black' ,'down');
								break;
							case 'left':
								that.colorControl('white', 'black' ,'left');
								break;
						}
					}
					var leftRand = Math.floor(Math.random() * that.leftOperandArray.length);
					var rightRand = Math.floor(Math.random() * that.rightOperandArray.length);
					that.leftOperand = that.leftOperandArray[leftRand];
					that.rightOperand = that.rightOperandArray[rightRand];

					var rand = Math.floor(Math.random() * that.randomAnswer.length);
					var answer = that.randomAnswer[rand];
					switch (answer) {
						case 'leftAnswer':
							that.leftAnswer = that.rightOperand * that.leftOperand;
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'upAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = that.rightOperand * that.leftOperand;
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'downAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = that.rightOperand * that.leftOperand;
							that.rightAnswer = Math.floor(Math.random() * 99);
							break;
						case 'rightAnswer':
							that.leftAnswer = Math.floor(Math.random() * 99);
							that.upAnswer = Math.floor(Math.random() * 99);
							that.downAnswer = Math.floor(Math.random() * 99);
							that.rightAnswer = that.rightOperand * that.leftOperand;
							break;
					}
					
					that.result = '?';
				}, 2000);
			}
		}
	}
});

window.addEventListener('keydown', function(event) {
	switch (event.keyCode) {
		case 37:
			app.left();
		break;
		case 38:
			app.up();
		break;
		case 39:
			app.right();
		break;
		case 40:
			app.down();
		break;
	}
}, false);


