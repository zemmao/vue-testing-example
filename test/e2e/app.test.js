import { Selector } from 'testcafe';

fixture `Index page`
  .page `http://localhost:8081`;

test('Message toggle', async t => {
  const messageElement = Selector('#message');

  await t
    .click('#toggleMessage')
    .expect(messageElement.innerText).eql('message')
    .click('#toggleMessage')
    .expect(messageElement.innerText).eql('toggled message');
});
