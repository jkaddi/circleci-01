'use strict'; // necessary for es6 output in node

import { browser, element, by, protractor } from 'protractor';

describe('User Input Tests', function () {

  beforeAll(function () {
    browser.get('');
  });

  it('should support the click event', function () {
    let mainEle = element(by.css('app-click-me'));
    let buttonEle = element(by.css('app-click-me button'));
    expect(mainEle.getText()).not.toContain('Button clicked');
    buttonEle.click().then(function() {
      expect(mainEle.getText()).toContain('Button clicked');
    });
  });
});

