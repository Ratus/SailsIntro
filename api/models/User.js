module.exports = {
  attributes: {
    username: {
      type: 'string',
      unique: true
    },
    password: 'string'
  },

  /**
   * Method which removes the password from the entity on-fetch.
   * We never want to send out this sensitive information.
   *
   * @returns {Object}
   */
  toJSON: function () {
    var userInstance = this.toObject();

    delete userInstance.password;

    return userInstance;
  }
};
