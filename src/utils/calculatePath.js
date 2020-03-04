import defineUrlObject from './defineUrlObject';

export default (status) => {
  const object = defineUrlObject(status);
  const keys = Object.keys(object);
  const values = Object.values(object);

  const urlPath = values.reduce((acc, item, index) => {
    if (item === ' ') {
      return acc;
    }
    if (index === 0) {
      return `${acc}${keys[index]}=${item}`;
    }
    return `${acc}&${keys[index]}=${item}`;
  }, '/status?');

  console.log('urlPath:', urlPath);
  return urlPath;
};
