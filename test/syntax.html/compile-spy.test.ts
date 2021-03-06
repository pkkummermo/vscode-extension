import { assert } from 'chai';
import { getTokenOnCharRange, hasScope, tokenizeLine } from './test.utils';

describe('The Aurelia HTML syntax compile-spy attribute', () => {

  it('must tokenize compile-spy attribute with scope "compile-spy.attribute.html.au"', async () => {

    // arrange
    const scope = 'compile-spy.attribute.html.au';

    // act
    const lineToken = await tokenizeLine('<p compile-spy foo="boo">');

    // assert
    const token = getTokenOnCharRange(lineToken, 3, 14);
    assert.isOk(hasScope(token.scopes, scope));

  });

  it('must not tokenize compile-spy="" attribute', async () => {

    // arrange
    const scope = 'compile-spy.attribute.html.au';

    // act
    const lineToken = await tokenizeLine('<p compile-spy="">');

    // assert
    const token = getTokenOnCharRange(lineToken, 3, 14);
    assert.isDefined(token);
    assert.isNotOk(hasScope(token.scopes, scope));

  });

  it('must not tokenize compile-spy-foo="" attribute', async () => {

    // arrange
    const scope = 'compile-spy.attribute.html.au';

    // act
    const lineToken = await tokenizeLine('<p compile-spy-foo="">');

    // assert
    const token = getTokenOnCharRange(lineToken, 3, 18);
    assert.isDefined(token);
    assert.isNotOk(hasScope(token.scopes, scope));

  });

  it('must not tokenize foo-compile-spy="" attribute', async () => {

    // arrange
    const scope = 'compile-spy.attribute.html.au';

    // act
    const lineToken = await tokenizeLine('<p foo-compile-spy="">');

    // assert
    const token = getTokenOnCharRange(lineToken, 3, 18);
    assert.isDefined(token);
    assert.isNotOk(hasScope(token.scopes, scope));

  });

  it('must not tokenize foo-compile-spy="boo" attribute', async () => {

    // arrange
    const scope = 'compile-spy.attribute.html.au';

    // act
    const lineToken = await tokenizeLine('<p foo-compile-spy="boo">');

    // assert
    const token = getTokenOnCharRange(lineToken, 3, 18);
    assert.isDefined(token);
    assert.isNotOk(hasScope(token.scopes, scope));

  });

  it('must not tokenize compile-spyfoo="boo" attribute', async () => {

    // arrange
    const scope = 'compile-spy.attribute.html.au';

    // act
    const lineToken = await tokenizeLine('<p compile-spyfoo="boo">');

    // assert
    const token = getTokenOnCharRange(lineToken, 3, 17);
    assert.isDefined(token);
    assert.isNotOk(hasScope(token.scopes, scope));

  });

  it('must tokenize compile-spy attribute', async () => {

    // arrange
    const scope = 'compile-spy.attribute.html.au';

    // act
    const template = '<template compile-spy></template>';
    const lineToken = await tokenizeLine(template);

    // assert
    const token = getTokenOnCharRange(lineToken, 10, 21);
    assert.isDefined(token);
    assert.isOk(hasScope(token.scopes, scope));

  });
});
