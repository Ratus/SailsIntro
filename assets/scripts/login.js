define(['jquery'], function($) {
  var $loginForm = $('#login-form')
    , $username = $('#login-form-username')
    , $password = $('#login-form-password');

  // We need focus!
  $username.focus();

  // Handle login.
  $loginForm.on('submit', function(event) {
    var credentials = {
      username: $username.val(),
      password: $password.val()
    };

    event.preventDefault();

    if (credentials.username === '' || credentials.password === '') {
      $loginForm.toggleClass('has-error', true);

      return alert('Password and username are required fields.');
    }

    $.post('/user/login', credentials, function(response) {

      $loginForm.toggleClass('has-error', !response.success);

      if (!response.success) {
        return alert(response.message);
      }

      // Redirect to messages here:
      window.top.location.href = '/';
    });
  });
});
