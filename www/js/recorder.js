angular.module("recorder", []).controller("ctrlRecorder", ctrlRecorder);

ctrlRecorder.$inject = [
  '$scope'
];

function ctrlRecorder(
  $scope
) {
  $scope.recorder = new Object;
  $scope.recorder.stop = function () {
    // window.plugins.audioRecorderAPI.stop(function (msg) {
        window.plugins.audioRecorderAPI.stop(function (msg) {
      // success
      alert('ok: ' + msg);
    }, function (msg) {
      // failed
      alert('ko: ' + msg);
    });
  }
  $scope.recorder.record = function () {
    // window.plugins.audioRecorderAPI.record(function (msg) {
    //   // complete
    //   alert('ok: ' + msg);
    // }, function (msg) {
    //   // failed
    //   alert('ko: ' + msg);
    // }, 10); // record 30 seconds


    window.plugins.audioRecorderAPI.record(function(savedFilePath) {
        var fileName = savedFilePath.split('/')[savedFilePath.split('/').length - 1];
        var directory;
        if (cordova.file.documentsDirectory) {
          directory = cordova.file.documentsDirectory; // for iOS
        } else {
          directory = cordova.file.externalRootDirectory; // for Android
        }

        File.copyFile(
          cordova.file.dataDirectory, fileName,
          directory, "new_file.m4a"
        )
          .then(function (success) {
            alert(JSON.stringify(success));
          }, function (error) {
            alert(JSON.stringify(error));
          });
      }, function(msg) {
        alert('ko: ' + msg);
      }, 1);


  }
  $scope.recorder.playback = function () {
    window.plugins.audioRecorderAPI.playback(function (msg) {
      // complete
      alert('ok: ' + msg);
    }, function (msg) {
      // failed
      alert('ko: ' + msg);
    });
  }



}
