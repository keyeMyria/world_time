import { extendObservable, asFlat } from 'mobx';

let TimeLineStore = {
  selectedHour: null
}

extendObservable(TimeLineStore, {
	selectedHour: ""
	// selectedTimeline: true
})

export default TimeLineStore;

// // import { extendObservable, asFlat } from 'mobx';
// import { extendObservable, asFlat } from 'mobx';
// class TimeLineStore {
//   // setHour = (index) => {
// 		// console.log(index)
// 		// console.log(this)
// 	// }
// }

// extendObservable(TimeLineStore, { selectedTimeline: false } )
// export default new TimeLineStore;
// 'use strict';

