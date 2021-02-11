"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/* GET users listing. */


router.get('/', (req, res) => {
  res.send('respond with a resource');
});
module.exports = router;