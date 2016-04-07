import { BaseModel } from 'mobx-model';

export default class City extends BaseModel {
  static attributes = {
    text: '',
    hours: null
  }

  // toJson() {
  //   return {
  //     id: this.id,
  //     text: this.text
  //   }
  // }
}



