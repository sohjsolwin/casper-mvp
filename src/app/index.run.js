(function() {
  'use strict';

  angular
    .module('casperMvp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
