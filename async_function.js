/*
 * This quickly demonstrates how to do a simple very small async anonymous function with functional
 * programming.
 * @author: me
 */
const number_range = 400;

class MyRandomnessClass {  
	static getValue() {
		return Math.round(
			Math.random() * number_range
		);
	}
}

function add(a,b,callback) {
	setTimeout(_=>{
		if(callback === 'function') {
			callback(a+b);
		} else {
			throw 'ops, object is not of type <function>.';
		}
	},50);
}

add(	MyRandomnessClass.getValue(number_Range),
    	MyRandomnessClass.getValue(number_Range),
			data => {
				console.log('resultado da soma: ' + data);
			}
);

console.info('> and it continues to flow ... YEAAAAAH :O');
