/**
 * Created by zhouyu on 2016/7/31.
 */

var httpHelper = require('./httpHelper');

httpHelper.get('https://openapi.youku.com/v2/searches/video/by_keyword.json?client_id=3a2c6e512d0fd485&keyword=eminem',
    1000,
    function (err, data) {
        console.log(data);
    }
)