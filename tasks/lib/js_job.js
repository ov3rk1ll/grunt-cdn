var Job = require('./job'),
    util = require('util'),
    ParserConfig = require('./parser_config');

var JSJob = function() {
  Job.apply(this, arguments);
};
util.inherits(JSJob, Job);

JSJob.prototype.run = function () {
    var self = this;
    this.buffer = this.buffer.replace(/templateUrl:\s*['"]([^"']+)['"]/g, function(match, url) {
        return match.replace(url, self._replace(url));
    });
    this.buffer = this.buffer.replace(/['"]src['"]:\s*['"]([^"']+)['"]/g, function(match, url) {
        return match.replace(url, self._replace(url));
    });
    return this.buffer;
};


module.exports = JSJob;