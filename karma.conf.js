// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    exclude: ['karma.conf.js'],
    port: 9876,
    colors: true,
    files: [
      'module/test/**/*.js'
    ]
  })
}