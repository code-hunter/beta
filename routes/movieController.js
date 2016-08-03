/**
 * Created by admin on 2016/8/2.
 */

var express = require('express');
var utils = require('utility');
var uuid = require('node-uuid');
var router = express.Router();
var dbService = require('../services/dbservice');
var Json = require('../lib/result')

var dbConfig = require('../config/db');
var movieService = new dbService(dbConfig.movie);
var httpHelper = require('../lib/cloud/httpHelper');

router.get('/getPage', function (req, res, next) {
    httpHelper.get('https://openapi.youku.com/v2/searches/video/by_keyword.json?client_id=3a2c6e512d0fd485&keyword=eminem',
        1000,
        function (err, data) {
            console.log(data);
            res.send(data);
        }
    )
})

router.get('/getInfo', function (req, res, next) {
    var videoId = req.query.id

    httpHelper.get('https://openapi.youku.com/v2/videos/show_basic.json?client_id=3a2c6e512d0fd485&video_id=' + videoId,
        1000,
        function (err, data) {
            console.log(data);
            res.send(data);
        }
    )
})

router.get('/getComments', function (req, res, next) {
    var videoId = req.query.id

    httpHelper.get('https://openapi.youku.com/v2/comments/by_video.json?client_id=3a2c6e512d0fd485&video_id=' + videoId,
        1000,
        function (err, data) {
            console.log(data);
            res.send(data);
        }
    )
})

module.exports = router;