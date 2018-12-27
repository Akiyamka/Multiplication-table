var app = new Vue({
	el: '#app',
	data: {
		leftOperandArray: [2],
		rightOperandArray: [2,3,4,5,6,7,8,9],
		rightOperand: 1,
		leftOperand: 2,
		result: '?',
		leftAnswer:2,
		upAnswer:4,
		downAnswer:1,
		rightAnswer:99
	},

	methods: {
		left: function () {
			if (this.leftOperandArray.length < 1) {
				this.leftOperand = 0;
				alert('Вы должны выбрать хотябы один число!');
			} else {
				this.result = this.rightOperand * this.leftOperand;
				var that = this;
				setTimeout(function () {
					var leftRand = Math.floor(Math.random() * that.leftOperandArray.length);
					var rightRand = Math.floor(Math.random() * that.rightOperandArray.length);
					that.leftOperand = that.leftOperandArray[leftRand];
					that.rightOperand = that.rightOperandArray[rightRand];
					that.result = '?';
				}, 1000);
			}
		},
		up: function () {
			this.result = this.rightOperand * this.leftOperand;
		},
		down: function () {
			this.result = this.rightOperand * this.leftOperand;
		},
		right: function () {
			this.result = this.rightOperand * this.leftOperand;
		}
	}
});

window.addEventListener('keydown', function(event) {
	switch (event.keyCode) {
		case 37:
			app.left();
			var left = document.getElementById('left');
			left.style.backgroundColor = 'green';
			left.style.color = 'white';
		break;
		case 38:
			app.up();
		break;
		case 39:
			app.down();
		break;
		case 40:
			app.right();
		break;
	}
}, false);


