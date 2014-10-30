$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features.register\\userPassToRegisterPage.feature");
formatter.feature({
  "id": "register-functionality",
  "description": "",
  "name": "Register functionality",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "register-functionality;user-wants-to-be-on-the-register-page.",
  "tags": [
    {
      "name": "@PassToRegisterPage",
      "line": 2
    }
  ],
  "description": "",
  "name": "User wants to be on the register page.",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "As a user I stay on the login page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "User click on the link \"Register a new user\"",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "He gets a register page",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "PassToRegisterPageBehavior.userStayOnLoginPage()"
});
formatter.result({
  "duration": 2014703875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register a new user",
      "offset": 24
    }
  ],
  "location": "PassToRegisterPageBehavior.userClickOnTheRegisterNewUserLink(String)"
});
formatter.result({
  "duration": 251035903,
  "status": "passed"
});
formatter.match({
  "location": "PassToRegisterPageBehavior.heGetsTheRegisterPage()"
});
formatter.result({
  "duration": 3843672905,
  "status": "passed"
});
});