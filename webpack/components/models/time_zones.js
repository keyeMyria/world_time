import { BaseModel } from 'mabx-model';

class TimeZones extends BaseModel {
  static attributes = {
    name: null,
  }
}


BaseModel.addAction('destroy', function() {
  return API.request({
    method: 'delete',
    endpoint: `${this.urlRoot}/${this.id}`,
    onSuccess: (options = {}) => {
      let { json, requestId } = options;
      this.onDestroy();
    }
  });
});

BaseModel.addAction('create', function() {
  return API.request({
    method: 'delete',
    endpoint: `${this.urlRoot}/${this.id}`,
    onSuccess: (options = {}) => {
      let { json, requestId } = options;
      this.onDestroy();
    }
  });
});

/* console.log(TimeZones) */
/* console.log(TimeZones.create) */
