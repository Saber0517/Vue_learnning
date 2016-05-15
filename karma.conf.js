// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    files: [
      './module/test/**/*.js'
    ]
  })
}