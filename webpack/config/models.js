import { API, BaseModel } from 'mobx-model';
import models from 'models';

BaseModel.getModel = (modelName) => {
  return models[modelName]
}

BaseModel.addClassAction('loadAll', function() {
  return API.request({
    endpoint: `${this.urlRoot}`,
    onSuccess: (json) => {
      json.forEach(modelJson => {
      	this.set({ modelJson })
      });
    }
  });
});

/* BaseModel.addClassAction('create', function(attributes) { */

/*   if (isString(attributes)) { */
/*     attributes = { name: attributes } */
/*   } */

/*   return API.request({ */
/*     method: 'post', */
/*     data: attributes, */
/*     endpoint: this.urlRoot, */
/*     onSuccess: (json) => { */

/*       let model = this.set({ */
/*         modelJson: json[this.jsonKey], */
/*         topLevelJson: json */
/*       }); */

/*       if (isFunction(model.afterCreate)) model.afterCreate(options); */
/*     } */
/*   }); */
/* }); */

/* BaseModel.addClassAction('load', function(id) { */
/*   return API.request({ */
/*     endpoint: `${this.urlRoot}/${id}`, */
/*     onSuccess: (json) => { */
/*       this.set({ */
/*         modelJson: json[this.jsonKey], */
/*         topLevelJson: json */
/*       }); */
/*     } */
/*   }) */
/* }); */

/* BaseModel.addClassAction("searchNames", function(searchTerm, searchId) { */
/*   return API.request({ */
/*     data: { q: searchTerm }, */
/*     endpoint: `${this.urlRoot}/search_names`, */
/*     onSuccess: (json) => { */
/*       return SearchStore.set(searchId, json); */
/*     } */
/*   }); */
/* }); */

/* BaseModel.addAction('update', function(attributes = {}) { */
/*   return API.request({ */
/*     method: 'put', */
/*     data: attributes, */
/*     endpoint: `${this.urlRoot}/${this.id}`, */
/*     onSuccess: (json) => { */
/*       this.set({ */
/*         modelJson: json[this.jsonKey], */
/*         topLevelJson: json */
/*       }); */

/*       if (isFunction(this.afterUpdate)) this.afterUpdate(options); */
/*     } */
/*   }); */
/* }); */


/* BaseModel.addAction('destroy', function() { */
/*   return API.request({ */
/*     method: 'del', */
/*     endpoint: `${this.urlRoot}/${this.id}`, */
/*     onSuccess: (json) => { */
/*       this.onDestroy(); */

/*       if (isFunction(this.afterDestroy)) this.afterDestroy(options); */
/*     } */
/*   }); */
/* }); */

/* BaseModel.addClassAction('loadAll', function() { */
/*   return API.request({ */
/*     endpoint: `${this.urlRoot}`, */
/*     onSuccess: (json) => { */
/*       json.forEach(modelJson => { */
/*         this.set({ modelJson }) */
/*       }); */
/*     } */
/*   }); */
/* }); */
