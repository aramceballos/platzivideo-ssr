import gravatar from '../../utils/gravatar';

test('Gravatar function test', () => {
  const email = 'aramgonzalez12@hotmail.com';
  const gravatarUrl =
    'https://gravatar.com/avatar/b8d52ebc633edeaf1f5bd89c0607c881';

  expect(gravatarUrl).toEqual(gravatar(email));
});
