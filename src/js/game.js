/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-syntax */
const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
}; // заданный объект
const arr = ['name', 'level']; // массив с порядком сортирвки
// eslint-disable-next-line no-shadow
export default function orderByProps(obj, arr) { // объявление функции
  const arr1 = []; // новый массив для соблюдения иммутабельности передаваемых аргументов
  const arr2 = []; // новый массив для соблюдения иммутабельности передаваемых аргументов
  for (const key in obj) { // перебор объекта
    if (arr.includes(key)) { // проверяем есть ли св-во в массиве с порядком сортировки
      arr1.push({ key, value: obj[key] }); // создаём массив с отсортированными св-вами
    } else {
      arr2.push({ key, value: obj[key] }); // все остальные св-ва
    }
  }
  arr2.sort((a, b) => { // сортируем остальные св-ва по алфавиту
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });
  return [...arr1, ...arr2]; // возвращаем отсортированный по заданию массив
}

orderByProps(obj, arr); // вызов функции
