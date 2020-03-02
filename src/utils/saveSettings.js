
export default (stateName, settings, value, option) => {
  try {
    const allSettings = JSON.parse(localStorage.getItem('Cinema'));
    const newSettings = {
      ...allSettings,
      [stateName]: {
        ...settings,
        [option]: value,
      },
    };
    localStorage.setItem('cinema', JSON.stringify(newSettings));

    return true;
  } catch (e) {
    return false;
  }
};
