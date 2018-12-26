var app = new Vue({
	el: '#app',
	data: {
		rightOperandArray: [],
		leftOperandArray: [],
		rightOperand: 2,
		leftOperand: 2,
		result: '?'
	},

	methods: {
		left: function () {
			this.result = this.rightOperand * this.leftOperand;
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


