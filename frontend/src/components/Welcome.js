import React from 'react';

const Welcome = () => (
  <div class="jumbotron">
    <h1 class="display-4">Images Gallery</h1>
    <p class="lead">
      This is a simple application that retrieves photos using Unsplash API. In
      order to start enter any search term in the input field.
    </p>
    <p class="lead">
      <a
        class="btn btn-primary btn-lg"
        href="https://unsplash.com"
        role="button"
      >
        Learn more
      </a>
    </p>
  </div>
);

export default Welcome;
