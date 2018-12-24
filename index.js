var app = new Vue({
	el: '#app',
	data: {
		rightOperandArray: [],
		leftOperandArray: [],
		rightOperand: 2,
		leftOperand: 2
	},

	computed: {
		result: function () {
			this.leftOperand = this.leftOperandArray[Math.floor(Math.random() * this.leftOperandArray.length)];
			this.rightOperand = this.rightOperandArray[Math.floor(Math.random() * this.rightOperandArray.length)];
			return this.leftOperand * this.rightOperand;
		}
	}
});