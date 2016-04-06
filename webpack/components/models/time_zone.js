import { BaseModel } from 'mobservable-model';

export default class TimeZone extends BaseModel {
  static attributes = {
    text: '',
    hours: null
  }

  toJson() {
    return {
      id: this.id,
      text: this.text
    }
  }
}