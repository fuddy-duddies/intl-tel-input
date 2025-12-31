module.exports = function (grunt) {
  return {
    copyUtilsToGoogle: {
      expand: true,
      src: 'src/js/utils.js',
      dest: 'google/libphonenumber/javascript/i18n/phonenumbers/',
      flatten: true,
      rename: function (dest, src) {
        return dest + src.replace('utils.js', 'demo.js');
      }
    },
    copyUtilsBackFromGoogle: {
      expand: true,
      src: 'google/libphonenumber/javascript/i18n/phonenumbers/demo-compiled.js',
      dest: 'build/js/',
      flatten: true,
      rename: function (dest, src) {
        return dest + src.replace('demo-compiled.js', 'utils.js');
      }
    },
  };
};