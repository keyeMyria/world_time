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

BaseModel.addClassAction('setCityHome', function(attributes = {}) {
  return API.request({
    method: 'put',
    data: attributes,
    endpoint: `${this.urlRoot}/set_city_home`,
    onSuccess: (response) => {
      console.log(response)
      response.body.forEach(modelJson => {
      	this.set({ modelJson })
      });
   }
 });
});

export default City;
