var CSSJob = require('./css_job'),
    HTMLJob = require('./html_job');
    JSJob = require('./js_job');
    TextJob = require('./text_job');

exports.css = function(options) {
  return new CSSJob(options);
};

exports.html = function(options) {
  return new HTMLJob(options);
};

exports.js = function(options) {
  return new JSJob(options);
};

exports.txt = function(options) {
  return new TextJob(options);
};