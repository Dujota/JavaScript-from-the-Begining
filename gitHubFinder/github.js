class GitHub {
  constructor () {
    this.client_id = '097c615328c32c12a0d1';
    this.client_secret = '7f6586f6d34006ba8eceadcae1b5535e3fba9c8b';
  }

  // we need to pass the client id and secret into the header of the url, we do it using template literals and use the attributes of the class we just created.
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}