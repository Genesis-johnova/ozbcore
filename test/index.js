'use strict';

var should = require('chai').should();
var ozbcore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(ozbcore.crypto);
    should.exist(ozbcore.encoding);
    should.exist(ozbcore.util);
    should.exist(ozbcore.errors);
    should.exist(ozbcore.Address);
    should.exist(ozbcore.Block);
    should.exist(ozbcore.MerkleBlock);
    should.exist(ozbcore.BlockHeader);
    should.exist(ozbcore.HDPrivateKey);
    should.exist(ozbcore.HDPublicKey);
    should.exist(ozbcore.Networks);
    should.exist(ozbcore.Opcode);
    should.exist(ozbcore.PrivateKey);
    should.exist(ozbcore.PublicKey);
    should.exist(ozbcore.Script);
    should.exist(ozbcore.Transaction);
    should.exist(ozbcore.URI);
    should.exist(ozbcore.Unit);
  });
});
