import React from 'react';

import ApiContainer from '../../../common/components/ApiContainer';
import KeyValue from '../../../common/components/KeyValue';
import Utils from '../../../common/Utils';

const PersonalHolding = ({personalHolding}) => {

  let element,
    data = personalHolding.data;

  if (personalHolding.data) {

    element =
      <div className="key-value-container">
        <KeyValue {...{name: '', value: data.asset}}/>
        <KeyValue {...{name: 'UNITS HELD', value: data.unitsHeld}}/>
        <KeyValue {...{name: 'TOTAL ASSET VALUE', value: '$' + Utils.formatPrice(data.shareValue)}}/>
        <KeyValue {...{name: 'PURCHASE DATE', value: Utils.formatDate(data.purchaseDate)}}/>
      </div>
  }

  return <ApiContainer {...{
    isFetching: personalHolding.isFetching,
    isFailed: personalHolding.isFailed,
    element: element
  }}></ApiContainer>
};

export default PersonalHolding;