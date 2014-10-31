$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features.register\\registerNewUserNegative.feature");
formatter.feature({
  "id": "register-functionality",
  "description": "",
  "name": "Register functionality",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;2",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data:  and password, password, +342343242342, user@gmail.com, selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Login is required",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2124608937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    },
    {
      "val": "password",
      "offset": 28
    },
    {
      "val": "password",
      "offset": 38
    },
    {
      "val": "+342343242342",
      "offset": 48
    },
    {
      "val": "user@gmail.com",
      "offset": 63
    },
    {
      "val": "selected",
      "offset": 79
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2407109262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login is required",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 214431304,
  "status": "passed"
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;3",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data: login and , password, +342343242342, user@gmail.com, selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Password is required",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2141554102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 23
    },
    {
      "val": "",
      "offset": 33
    },
    {
      "val": "password",
      "offset": 35
    },
    {
      "val": "+342343242342",
      "offset": 45
    },
    {
      "val": "user@gmail.com",
      "offset": 60
    },
    {
      "val": "selected",
      "offset": 76
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2357975393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 196000014,
  "status": "passed"
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;4",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data: login and password, , +342343242342, user@gmail.com, selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Password and confirmation are different",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2549412572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 23
    },
    {
      "val": "password",
      "offset": 33
    },
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "+342343242342",
      "offset": 45
    },
    {
      "val": "user@gmail.com",
      "offset": 60
    },
    {
      "val": "selected",
      "offset": 76
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2262370918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password and confirmation are different",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 216549450,
  "status": "passed"
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;5",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data: login and password, password, , user@gmail.com, selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Phone is required",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2283851707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 23
    },
    {
      "val": "password",
      "offset": 33
    },
    {
      "val": "password",
      "offset": 43
    },
    {
      "val": "",
      "offset": 53
    },
    {
      "val": "user@gmail.com",
      "offset": 55
    },
    {
      "val": "selected",
      "offset": 71
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2440097647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone is required",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 194941819,
  "status": "passed"
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;6",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data: login and password, password, +342343242342, , selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Email is required",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2325772645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 23
    },
    {
      "val": "password",
      "offset": 33
    },
    {
      "val": "password",
      "offset": 43
    },
    {
      "val": "+342343242342",
      "offset": 53
    },
    {
      "val": "",
      "offset": 68
    },
    {
      "val": "selected",
      "offset": 70
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 4007392003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 2309268577,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoAlertPresentException: No alert is present (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.18 seconds\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027Tim-ПК\u0027, ip: \u002710.6.25.164\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_45\u0027\nSession ID: 9c98449a-8ee0-4ae9-a5f6-629765362d3e\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, databaseEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, javascriptEnabled\u003dtrue, acceptSslCerts\u003dtrue, handlesAlerts\u003dtrue, browserName\u003dfirefox, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d33.0.2}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:899)\r\n\tat com.epam.pdrzh.pages.RegisterPage.checkErrorPresent(RegisterPage.java:64)\r\n\tat com.epam.pdrzh.behavior.register.RegisterNegativeCases.userShouldSeeErrorMessage(RegisterNegativeCases.java:34)\r\n\tat ✽.Then user should see error messages on register page: Email is required(features.register\\registerNewUserNegative.feature:7)\r\n"
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;7",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data: login and password, password, +342343242342, user@gmail.com, selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Sorry, but client with this login is already in use",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2480623313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 23
    },
    {
      "val": "password",
      "offset": 33
    },
    {
      "val": "password",
      "offset": 43
    },
    {
      "val": "+342343242342",
      "offset": 53
    },
    {
      "val": "user@gmail.com",
      "offset": 68
    },
    {
      "val": "selected",
      "offset": 84
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2280820204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, but client with this login is already in use",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 261127507,
  "status": "failed",
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.epam.pdrzh.behavior.register.RegisterNegativeCases.userShouldSeeErrorMessage(RegisterNegativeCases.java:34)\r\n\tat ✽.Then user should see error messages on register page: Sorry, but client with this login is already in use(features.register\\registerNewUserNegative.feature:7)\r\n"
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;8",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data: login and password, password, +342343242342, user@gmail.com, not_selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Modal dialog window",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2544621069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 23
    },
    {
      "val": "password",
      "offset": 33
    },
    {
      "val": "password",
      "offset": 43
    },
    {
      "val": "+342343242342",
      "offset": 53
    },
    {
      "val": "user@gmail.com",
      "offset": 68
    },
    {
      "val": "not_selected",
      "offset": 84
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2522909857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Modal dialog window",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 220734829,
  "status": "failed",
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: Please confirm license agreement\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027Tim-ПК\u0027, ip: \u002710.6.25.164\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_45\u0027\nSession ID: 9c98449a-8ee0-4ae9-a5f6-629765362d3e\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, databaseEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, javascriptEnabled\u003dtrue, acceptSslCerts\u003dtrue, handlesAlerts\u003dtrue, browserName\u003dfirefox, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d33.0.2}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:185)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:152)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:425)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:299)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\r\n\tat com.sun.proxy.$Proxy19.isSelected(Unknown Source)\r\n\tat com.epam.pdrzh.pages.RegisterPage.checkErrorPresent(RegisterPage.java:60)\r\n\tat com.epam.pdrzh.behavior.register.RegisterNegativeCases.userShouldSeeErrorMessage(RegisterNegativeCases.java:34)\r\n\tat ✽.Then user should see error messages on register page: Modal dialog window(features.register\\registerNewUserNegative.feature:7)\r\n"
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;9",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data: login and 12, 12, +342343242342, user@gmail.com, selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Please enter at least 3 symbols",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2200630001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 23
    },
    {
      "val": "12",
      "offset": 33
    },
    {
      "val": "12",
      "offset": 37
    },
    {
      "val": "+342343242342",
      "offset": 41
    },
    {
      "val": "user@gmail.com",
      "offset": 56
    },
    {
      "val": "selected",
      "offset": 72
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2420512481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter at least 3 symbols",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 216304104,
  "status": "passed"
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;10",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data: login and 12, 12, 342343242342, user@gmail.com, selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Please enter at least 3 symbols",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2162870302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 23
    },
    {
      "val": "12",
      "offset": 33
    },
    {
      "val": "12",
      "offset": 37
    },
    {
      "val": "342343242342",
      "offset": 41
    },
    {
      "val": "user@gmail.com",
      "offset": 55
    },
    {
      "val": "selected",
      "offset": 71
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2425784144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter at least 3 symbols",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 253757448,
  "status": "passed"
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;11",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data: login l and password, password, 342343242342, user@gmail.com, selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Invalid login",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2229613836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login l",
      "offset": 23
    },
    {
      "val": "password",
      "offset": 35
    },
    {
      "val": "password",
      "offset": 45
    },
    {
      "val": "342343242342",
      "offset": 55
    },
    {
      "val": "user@gmail.com",
      "offset": 69
    },
    {
      "val": "selected",
      "offset": 85
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2400250087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 252383243,
  "status": "failed",
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.epam.pdrzh.behavior.register.RegisterNegativeCases.userShouldSeeErrorMessage(RegisterNegativeCases.java:34)\r\n\tat ✽.Then user should see error messages on register page: Invalid login(features.register\\registerNewUserNegative.feature:7)\r\n"
});
formatter.scenario({
  "id": "register-functionality;as-a-new-user-i-want-to-create-a-new--account;;12",
  "tags": [
    {
      "name": "@TryToRegister",
      "line": 3
    }
  ],
  "description": "",
  "name": "As a new user I want to create a new  account",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "user stay on the register page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "user input wrong data: login and password, password, 342343242342, user@gmail.com, selected",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ]
});
formatter.step({
  "name": "user should see error messages on register page: Invalid login",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    6
  ]
});
formatter.match({
  "location": "RegisterNegativeCases.userStayOnRegisterPage()"
});
formatter.result({
  "duration": 2504347334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 23
    },
    {
      "val": "password",
      "offset": 33
    },
    {
      "val": "password",
      "offset": 43
    },
    {
      "val": "342343242342",
      "offset": 53
    },
    {
      "val": "user@gmail.com",
      "offset": 67
    },
    {
      "val": "selected",
      "offset": 83
    }
  ],
  "location": "RegisterNegativeCases.userInputNegativeData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2304410799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login",
      "offset": 49
    }
  ],
  "location": "RegisterNegativeCases.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 208075551,
  "status": "failed",
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.epam.pdrzh.behavior.register.RegisterNegativeCases.userShouldSeeErrorMessage(RegisterNegativeCases.java:34)\r\n\tat ✽.Then user should see error messages on register page: Invalid login(features.register\\registerNewUserNegative.feature:7)\r\n"
});
formatter.uri("features.register\\userPassToRegisterPage.feature");
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
  "duration": 2437376888,
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
  "duration": 266476856,
  "status": "passed"
});
formatter.match({
  "location": "PassToRegisterPageBehavior.heGetsTheRegisterPage()"
});
formatter.result({
  "duration": 3780505511,
  "status": "passed"
});
});