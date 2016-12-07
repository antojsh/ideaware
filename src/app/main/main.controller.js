(function() {
    'use strict';

    angular
        .module('ideaware')
        .controller('MainController', MainController)
        .filter('trusted', ['$sce', function($sce) {
            return function(url) {
                return $sce.trustAsResourceUrl(url);
            };
        }]);

    /** @ngInject */
    function MainController($scope, youtubeFactory, $sce) {
        $sce.trustAsResourceUrl
        $scope.URLYOUTUBE = 'http://www.youtube.com/embed/'
        $scope.videos = []
        $scope.searchYoutube = function(busqueda) {
            youtubeFactory.getVideosFromChannelById({
                q: busqueda,
                videoEmbeddable: 'true',
                key: "AIzaSyAl6z5Bn6KhT-6t64diMyCl_6fJhXY9geY",
                maxResults: 9
            }).then(function(_data) {
                getIframeSrc(_data.data.items)
            }).catch(function(_data) {
                //on error 
            });
        }

        function getIframeSrc(videos) {
            for (var i = 0; i < videos.length; i++) {
                videos[i].iframeSrc = 'https://www.youtube.com/embed/' + videos[i].id.videoId
            }
            $scope.videos = videos
        }
        $scope.searchYoutube('angularjs')
    }

})();
