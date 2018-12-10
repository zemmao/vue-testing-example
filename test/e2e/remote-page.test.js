import { Selector } from 'testcafe';

fixture `Getting started`
  .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
  const expectedOutput = 'Thank you, John Smith!';

  await t
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText).eql(expectedOutput);
});
