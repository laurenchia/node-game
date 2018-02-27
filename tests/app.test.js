const { spawn } = require('child_process');

const app = spawn('node', ['app.js']);

describe('End2end tests for app', () => {
	it('takes stdin and processes giving correct stdout', (done) => {
		const inputs = {
			'101': 'PASS',
			'987': 'FAIL',
			'lol': 'FAIL',			
		};
		const checked = [];

		app.stdout.on('data', (data) => {
  		  const rawStr = data.toString();
  		  const array = rawStr.split('\n');
  		  const str = array.pop();
  		  console.log(array);

  		  // @TODO: Fix the array of strings from the stdout buffer
  		  // We need to make sure we are getting the meaningful ones.

			if (str.indexOf('Your guess,') >= 0) {
				const matches = str.match(/Your guess, (.+) =/);

					console.log(matches);
				if (matches) {
					const guess = matches[1];
					const expected = inputs[guess]; // handle undefined?
					  expect(str).toEqual(
					  	expect.stringContaining(expected)
					  );
					checked.push(guess);					
				}		
			}
			if (checked.length >= Object.keys(inputs).length) {
				app.kill();
				done();
			}				
		});
		
		Object.keys(inputs).forEach((input) => {
		  app.stdin.write(input + '\n');		  
		})
	});
});
