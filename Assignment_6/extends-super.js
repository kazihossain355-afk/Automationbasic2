class BasePage {
  constructor(pageName) {
    this.pageName = pageName;
  }

  open() {
    return `Opening the ${this.pageName} page`;
  }
}

class LoginPage extends BasePage {
  constructor(pageName, loginButtonText) {
    super(pageName);
    this.loginButtonText = loginButtonText;
  }

  clickLoginButton() {
    return `Clicking the ${this.loginButtonText} button`;
  }
}

class CartPage extends BasePage {
  constructor(pageName, loginButtonText) {
    super(pageName);
    this.loginButtonText = loginButtonText;
  }

  clickLoginButton() {
    return `Clicking the ${this.loginButtonText} button`;
  }
}

const loginPage = new LoginPage('Login', 'Sign in');
const cartPage = new CartPage('Cart', 'Sign in for cart');

console.log(loginPage.open());
console.log(loginPage.clickLoginButton());