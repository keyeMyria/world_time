'use strict';
import { API, BaseModel } from 'mobx-model';

class City extends BaseModel {

  static attributes = ({
    name: '',
    hour: null,
    home: false,
  });

  static relations = [
    {
      type: 'hasMany',
      relatedModel: 'Dashboard',
      reverseRelation: true
    }
  ]

  toJsonForSelect() {
     return {
       value: this.id,
       label: this.name
     }
   }

}

BaseModel.addAction('setHome', function(attributes = {}) {
  return API.request({
    method: 'put',
    data: attributes,
    endpoint: `${this.urlRoot}/${this.id}/set_home`,
    onSuccess: (response) => {
      let json = response.body
      json.forEach(modelJson => {
      	this.set({ modelJson })
      });
   }
 });
});

export default City;
