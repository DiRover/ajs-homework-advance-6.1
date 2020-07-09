import orderByProps from '../game';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
}; // заданный объект
const arr = ['name', 'level']; // массив с порядком сортирвки

test('test order', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps(obj, arr);
  expect(received).toEqual(expected);
});
