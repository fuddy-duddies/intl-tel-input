module.exports = function (grunt) {
  return {
    publish: {
      command: 'npm publish'
    },
    pullLastestGoogleSubmodules: {
      // Update the submodule to the latest commit on its master branch.
      command: 'git submodule update --remote --merge'
    },
    buildUtilsUnderGoogle: {
      command: 'cd google/libphonenumber/javascript && sudo ant -f ./build.xml compile-demo'
    },
    cleanGoogleUtilsBuild: {
      command: 'cd google/libphonenumber && git reset --hard HEAD~1 && cd ../../ && git submodule update -- google/libphonenumber'
    }
  };
};