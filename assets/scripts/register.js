define(['jquery'], function ($) {
  var $registerForm = $('#register-form')
    , $username = $('#register-form-username')
    , $password = $('#register-form-password');

  // We need focus!
  $username.focus();

  // Handle register.
  $registerForm.on('submit', function (event) {
    var credentials = {
      username: $username.val(),
      password: $password.val()
    };

    event.preventDefault();

    if (credentials.username === '' || credentials.password === '') {
      $registerForm.toggleClass('has-error', true);

      return alert('Password and username are required fields.');
    }

    $.post('/user', credentials, function (response) {
      $registerForm.toggleClass('has-error', false);
      alert('Registered!');

      // Redirect to messages here (will be empty, is a new account):
      // window.top.location.href = '/messages';
    }).fail(function (response) {
      $registerForm.toggleClass('has-error', true);

      return alert('Username in use.');
    });
  });
});
