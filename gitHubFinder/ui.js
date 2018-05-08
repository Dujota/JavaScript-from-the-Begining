class UI {
  constructor() {
    this.profile = document.getElementById('profile'); // placeholder we append to
  }

  // Dusplay profile and the UI
  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class = "btn btn-primary btn-block mb-4">View Profile</a>
          </div>

          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Public Followers: ${user.followers}</span>
            <span class="badge badge-info">Public Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3>Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Clear the UI when the input is emplty
  clearProfile (){
    this.profile.innerHTML = '';
  }

  // Show alert Message
  showAlert(message, className) {
    //clear any remaining alerts
    this.clearAlert();
    // Create a Div for the alert
    const div = document.createElement('div');
    // Add class to div
    div.className = className
    // Add text inside the di with a text node by appending to child
    div.appendChild(document.createTextNode(message))

    // Get Parent, we need this because of append child
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert Alert
    container.insertBefore(div, search); // div is what we instert and search is the element we insert before
  }

  // Clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    } else {
      
    }
  }
}