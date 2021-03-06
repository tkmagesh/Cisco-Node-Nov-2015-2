var path = require('path'),
    fs = require('fs');

var staticExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.json', '.xml'];
function isStatic(resPath){
    return staticExtns.indexOf(path.extname(resPath)) != -1;
}

module.exports = function(resourcePath){
        return function(req, res, next){
            if (isStatic(req.url.pathname)){
                var filename = path.join(resourcePath, req.url.pathname);
                if (!fs.existsSync(filename)){
                    res.statusCode = 404;
                    res.end();
                    return;
                }
                fs.createReadStream(filename).pipe(res);
        /*
                var stream = fs.createReadStream(filename);

                stream.on('data', function(chunk){
                    //console.log('writing data');
                    res.write(chunk);
                });
                stream.on('end', function(){
                    res.end();
                });
        */
            } else {
                next();
            }
        }
};
