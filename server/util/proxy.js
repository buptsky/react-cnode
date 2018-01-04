const axios = require('axios');
const querystring = require('query-string');
const baseUrl = "http://cnodejs.org/api/v1";

module.exports = function (req, res, next) {
  console.log(req.path);
  const path = req.path;
  const user = req.session.user || {};
  const needAccessToken = req.query.needAccessToken;

  if (needAccessToken && !user.accessToken) {
    res.status(401).send({
      success: false,
      msg: 'need login'
    });
  }

  const query = Object.assign({}, req.query, {
    accesstoken: (needAccessToken && req.method === 'GET') ? user.accessToken : ''
  });
  if (query.needAccessToken) delete query.needAccessToken;

  console.log(req.body);

  axios(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    data: querystring.stringify(Object.assign({}, req.body, {
      accesstoken: (needAccessToken && req.method === 'POST') ? user.accessToken : ''
    })),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(ret => {
    if (ret.status === 200) {
      res.send(ret.data);
    } else {
      res.status(ret.status).send(ret.data);
    }
  }).catch(err => {
    if (err.response) {
      res.status(500).send(err.response.data);
    } else {
      res.status(500).send({
        success: false,
        msg: '未知错误'
      });
    }
  });
}
