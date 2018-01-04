const router = require('express').Router();
const axios = require('axios');

const baseUrl = "http://cnodejs.org/api/v1";

router.post('/login', function (req, res, next) {
  axios.post(`${baseUrl}/accesstoken`, {
    accesstoken: req.body.accessToken
  }).then(ret => {
    if (ret.status === 200 && ret.data.success) {
      req.session.user = {
        accessToken: req.body.accessToken,
        loginName: ret.data.loginname,
        id: ret.data.id,
        avatarUrl: ret.data.avatar_url
      };
      res.json({
        success: true,
        data: ret.data
      });
    }
  }).catch(err => {
    if (err.response) {
      res.json({
        success:false,
        data: err.response.data
      });
    } else {
      next(err);
    }
  });
});

module.exports = router;
