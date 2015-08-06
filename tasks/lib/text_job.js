var Job = require('./job'),
    util = require('util'),
    ParserConfig = require('./parser_config');

var TextJob = function() {
  Job.apply(this, arguments);
};
util.inherits(TextJob, Job);

TextJob.prototype.run = function () {
    var self = this;
    this.buffer = this.buffer.replace(/(.+\.(?:png|json|html|js|css|svg|jpg|gif))/g, function(match, url) {
        return match.replace(url, self._replace(url));
    });
    return this.buffer;
};


module.exports = TextJob;