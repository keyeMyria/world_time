'use strict';

import { BaseModel } from 'mobx-model';

export default class City extends BaseModel {

  static attributes = {
    text: '',
    hour: null,
  };

  static relations = [
    {
      type: 'hasMany',
      relatedModel: 'Dashboard',
      reverseRelation: true
    }
  ]

}



