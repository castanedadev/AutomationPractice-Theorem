# AutomationPractice-Theorem
This is the automation framework generated as a result of the: _“up to” 8 hour exercise_ that Thorem proposes for new engineers.

### Tooling & Stack
- Node.js
- Testcafe
- Prettier & ESLint
- [Winston](https://github.com/winstonjs/winston) (for logging)
- [Faker.js](https://github.com/winstonjs/winston) (for auto-generated data)

### Scenarios that aren't request but I feel they should (Ordered by priority)
- Verify end to end scenario that covers the complete flow from Summary to Payment
- Verify that user sessions don't share items in the cart
- Verify that "Forgot your password" flow works fine
- Verify Whishlist functionality

### What would I do different if I had more time?
- Switch to typescript FTW!
- Enhance reporting & logging
- Add methods to abstract common actions such as: ```SelectGivenOptionFromDropdown()``` 
- Introduce githooks pre-commit, pre-push for certain tasks
- Expand [filtering capabilities](https://testcafe.io/documentation/402657/reference/testcafe-api/runner/filter) to run tests by [metatags](https://testcafe.io/documentation/402734/reference/test-api/test/meta)
- Introduce pull request template so that any team member follows that
- Introduce [RequestLogger](https://testcafe.io/documentation/402668/reference/test-api/requestlogger) to check for API calls in certain points of the website

**NOTE**: This was developed in Windows using ```WSL 1.0``` / ```Ubuntu 20.0.4``` 
