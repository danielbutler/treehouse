var calculator = {
		sum: 0,
		//add the value to the running total of sum,
		add: function(value) {
			this.sum += value;
    },
		//reset the sum to zero
    clear: function() {
			this.sum = 0;
    },
		//return the sum
    equals: function() {
			return this.sum;
    }
}
