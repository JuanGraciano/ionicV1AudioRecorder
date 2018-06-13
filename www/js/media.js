angular.module("recorder", []).controller("ctrlRecorder", ctrlRecorder);

ctrlRecorder.$inject = [
    '$scope'
];

function ctrlRecorder(
    $scope
){
    var my_media;
    var audioPath;

    $scope.graba = function(){
        audioPath = File.externalDataDirectory.replace(/file:\/\//g, '') + "testAudio.wav";
        my_media = new Media(audioPath);  
        my_media.startRecord();
        $scope.path = File.externalDataDirectory;
    }

    $scope.play = function(){
        my_media.play();
        my_media.setVolume(0.8);
    }

    $scope.stopRecord = function () {        
        my_media.stopRecord();
    };
}
