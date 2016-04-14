import { API, BaseModel } from 'mobx-model';
import { pluralize } from 'inflection';
import Notification from 'lib/notification';

class Dashboard extends BaseModel {

	static attributes = {
		city_ids: null,
		hours:    null
	}

	static relations = [
		{
			type: 'hasMany',
			relatedModel: 'City',
      reverseRelation: true
		}
	];

	actionAddCity = (newCityId) => {
		let currentCityIds = this.cities.map(city => city.id)
    currentCityIds.push(newCityId)
		return this.updateCity({ city_ids: currentCityIds })
	}

	actionRemoveCity = (City) => {
		let currentCityIds = this.cities.map(city => city.id)
		_.remove(currentCityIds, function(n) { return n === City.id; })
		return this.update({ city_ids: currentCityIds })
	}

}

BaseModel.addAction('updateCity', function(attributes = {}) {
  return API.request({
    method: 'put',
    data: attributes,
    endpoint: `${this.urlRoot}/${this.id}`,
		onError: (response) => {
				if (response.status == 304) {
						Notification.warning('City already exists')
				}
		},
    onSuccess: (json) => {
      this.set({
        modelJson: json.body[this.jsonKey],
        topLevelJson: json
    });
   }
 });
});


Dashboard.addClassAction('loadAll', function() {
	return API.request({
	 endpoint: this.urlRoot,
	  onSuccess: (response) => {
	  	let json = response.body;
	    json[pluralize(this.jsonKey)].forEach(modelJson => {
	    	this.set({ modelJson, topLevelJson: json })
	    });
	   }
	});
});

export default Dashboard;
