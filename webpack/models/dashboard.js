import { BaseModel } from 'mobx-model';

export default class Dashboard extends BaseModel {

  static relations = [
    {
      type: 'hasMany',
      relatedModel: 'TimeZone',
      reverseRelation: true
    },
    {
      type: 'hasOne',
      relatedModel: 'User',
      reverseRelation: true
    }
  ];

}
