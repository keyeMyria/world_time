import { BaseModel } from 'mobx-model';

export default class City extends BaseModel {

  static attributes = {
    text: '',
    hours: null
  };

  static relations = [
    {
      type: 'hasMany',
      relatedModel: 'Dashboard',
      reverseRelation: true
    }
  ]

}



