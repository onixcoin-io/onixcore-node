'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export onixcore-lib', function() {
    var onixcore = require('../');
    should.exist(onixcore.lib);
    should.exist(onixcore.lib.Transaction);
    should.exist(onixcore.lib.Block);
  });
});
