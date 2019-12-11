module.exports = {
  plugins: [
    require('autoprefixer')({
       overrideBrowserslist: ['last 40 versions'],
       cascade: false
    })
  ]
};