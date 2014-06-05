/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * Login action.
   *
   * @param req
   * @param res
   */
  login: function (req, res) {
    var credentials = {
      username: req.body.username,
      password: req.body.password
    };

    sails.models.user.findOne(credentials).exec(function (error, result) {

      if (error) {
        console.error('Error fetching user.', error);

        return res.json({
          success: false,
          message: 'Error'
        });
      }

      if (typeof result === 'undefined') {
        return res.json({
          success: false,
          message: 'Invalid credentials'
        });
      }

      // Let there be session!
      req.session.user = result;

      res.json({
        success: true,
        message: 'Logged in successfully!',
        data: result
      });
    });
  },

  /**
   * Logout action.
   *
   * @param req
   * @param res
   */
  logout: function(req, res) {
    delete req.session.user;

    res.redirect('/');
  }
};
