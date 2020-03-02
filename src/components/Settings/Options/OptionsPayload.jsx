import React from 'react';

import { options, sections } from '../../../constants/app';

import OptionController from './OptionController';
import Buttons from '../Buttons';

export default function OptionsPayload() {
  return (
    <div>
      <OptionController label="Main page card limit:" target={sections.main} />
      <OptionController label="Popular page card limit:" target={sections.popular} />
      <OptionController label="Favorite page card limit:" target={sections.favorite} />
      <Buttons elementName={options} />
    </div>
  );
}
