# AutomationPractice-Theorem
This is the automation framework generated as a result of the: _“up to” 8 hour exercise_ that Thorem proposes for new engineers.

### Tooling & Stack
- Node.js
- Testcafe
- Prettier & ESLint
- [Winston](https://github.com/winstonjs/winston) (for logging)
- [Faker.js](https://github.com/winstonjs/winston) (for auto-generated data)

### How to run?!
- ```Node.js``` and ```npm``` must be installed prior
- Run ```npm i```
- From the console: ```testcafe chrome tests/*.js```
- If using *Windows/WSL* ```testcafe --ports 63305,63305 --live remote tests/*.js```

### Final Results
- Have a look at the ```FinalResults_Sample.png``` file
- Have a look at the file that contains the logging
- Commited to 7 urgent tickets, completed 4 [See board](https://sharing.clickup.com/b/h/4-16853087-2/6608f0c1f5a4dae)
### Scenarios that aren't request but I feel they should (Ordered by priority)
- Verify end to end scenario that covers the complete flow from Summary to Payment
- Verify that user sessions don't share items in the cart
- Verify that "Forgot your password" flow works fine
- Verify Whishlist functionality

### What would I do different if I had more time?
- Switch to typescript FTW!
- Enhance reporting & logging
- Add methods to abstract common actions such as: ```SelectGivenOptionFromDropdown()``` 
- Expand [filtering capabilities](https://testcafe.io/documentation/402657/reference/testcafe-api/runner/filter) to run tests by [metatags](https://testcafe.io/documentation/402734/reference/test-api/test/meta)
- Introduce pull request template so that any team member follows that
- Introduce [RequestLogger](https://testcafe.io/documentation/402668/reference/test-api/requestlogger) to check for API calls in certain points of the website
- Introduce githooks pre-commit, pre-push for certain tasks

**NOTE**: This was developed in Windows using ```WSL 1.0``` / ```Ubuntu 20.0.4``` 
