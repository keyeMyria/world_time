import { extendObservable, asFlat } from 'mobx';

let TimeLineStore = {}

extendObservable(TimeLineStore, {
	selectedHour: null
})

export default TimeLineStore

