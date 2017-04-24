var path = require('path');
var fileUtil = require('../lib').fileUtil;

test('writeUnExistsFile', function(done) {
    fileUtil.writeUnExistsFile(path.resolve(__dirname, 'fixtures/foo/bar.txt'),'Foo Bar').then(function (info) {
        expect(!!~info.indexOf('Foo Bar')).toBe(true);
        done();
    }, function (err) {
        done(err);
    });
});

test('getDirInfo', function(done) {
    fileUtil.getDirInfo(path.resolve(__dirname, 'fixtures/foo')).then(function (info) {
        expect(info.length).toBe(1);
        done();
    }, function (err) {
        done(err);
    });
});

test('getFileStat', function(done) {
  fileUtil.getFileStat(path.resolve(__dirname, 'fixtures/foo/bar.txt')).then(function (info) {
    expect(info.nlink).toBe(1);
    done();
  }, function (err) {
    done(err);
  });
});

test('readFile', function(done) {
  fileUtil.readFile(path.resolve(__dirname, 'fixtures/foo/bar.txt')).then(function (info) {
    expect(!!~info.indexOf('Foo Bar')).toBe(true);
    done();
  }, function (err) {
    done(err);
  });
});

test('delDir', function() {
  expect(fileUtil.delDir(path.resolve(__dirname, 'fixtures/foo/bar.txt'))).toBe(undefined);
});