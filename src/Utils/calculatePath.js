import defineUrlObject from './defineUrlObject';

export default (status) => {
  const object = defineUrlObject(status);
  const keys = Object.keys(object);
  const values = Object.values(object);

  const urlPath = values.reduce((acc, item, index) => {
    if (item === ' ') {
      return acc;
    }
    return `${acc}&${keys[index]}=${item}`;
  }, 'status?');
  const cutUrl = urlPath.replace('&', '');

  return cutUrl;
};
