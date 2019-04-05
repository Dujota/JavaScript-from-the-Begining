const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());

    this.change = function(state) {
      currentState = state;
    };
  };
};

// Home State

const homeState = function(page) {
  document.getElementById('heading').textContent = null;
  document.getElementById('content').innerHTML = `
  <div class="jumbotron">
    <h1>Hello, world!</h1>
    <p>Text Inside my jumbotron</p>
    <p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
};
