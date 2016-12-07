(function() {
  'use strict';

  angular
    .module('ideaware')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
