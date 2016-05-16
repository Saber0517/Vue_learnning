'use strict'

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("require index.html testing", function () {
    var formPage = require('../../client/index.html');

    expect(formPage).not.toBe(null);
    expect(formPage).not.toBe(1);

    //browser.get('http://localhost:3001/articles');
    //expect(element.all(by.repeater('article in articles')).count()).toEqual(0);
  });

});