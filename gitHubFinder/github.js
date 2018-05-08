class GitHub {
  constructor () {
    this.client_id = '097c615328c32c12a0d1';
    this.client_secret = '7f6586f6d34006ba8eceadcae1b5535e3fba9c8b';
    this.repos_count = 5; // limit the # of repos displayed
    this.repos_sort = 'created: asc'
  }

  // we need to pass the client id and secret into the header of the url, we do it using template literals and use the attributes of the class we just created.
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos
    }
  }
}