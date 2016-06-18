var Promise = require('promise');
var request = require('request');

module.exports = function(proto) {

  proto.createToken = function(tokenObj) {

    if (tokenObj && tokenObj.create) {
      return tokenObj;
    }

    return this.getUserInfo(this.oauth2_token.accessToken.create(tokenObj));
  };

  proto.getUserInfo = function(token) {
    var options = {
      url: 'https://jawbone.com/nudge/api/v.1.1/users/@me',
      headers: {
        Authorization: 'Bearer ' + token.token.access_token,
        Accept: 'application/json'
      }
    };

    return new Promise(function(resolve, reject) {
      request(options, function(error, response, body) {
        token.data = JSON.parse(body).data;
        return error ? reject(error) : resolve(token);
      })
    });
  }

  proto.getAuthorizationUrl = function(redirect_uri, scope, state) {

    var options = {
      redirect_uri: redirect_uri || this.redirect_uri,
      scope: scope || this.scope
    };

    if (state) {
      options.state = state;
    }

    return this.oauth2.authCode.authorizeURL(options);
  };

  proto.getToken = function(code, redirect_uri) {

    var authCode = this.oauth2_token.authCode;
    var _this = this;
    return new Promise(function(resolve, reject) {

      authCode.getToken({
        code: code,
        redirect_uri: redirect_uri
      }, function(err, token) {
        return err ? reject(err) : resolve(_this.createToken(token));
      });

    });
  };

  proto.refreshAccessToken = function(token, options) {
    options = options || {};
    token = this.createToken(token);

    if( !token.expired() && !options.forceRefresh) {
      return Promise.resolve(token);
    }

    return new Promise(function(resolve, reject) {

      token.refresh(function(err, token) {
        return err ? reject(err) : resolve(token);
      });

    });
  };

};
