if (_.isUndefined(global.App)) {
	App = {};
} 

App.define = (ns, object) => {

	let ns_parts = ns.split(".");
	let ns_main = App;

	ns_parts = _.filter(ns_parts, function(ns_part) { return !_.isEmpty(ns_part); });

	if (_.isEqual(ns_parts[0], 'App')) {
		ns_parts = ns_parts.slice(1);
	}

	for (let i = 0; i < ns_parts.length; i++) {

		if (_.isUndefined(ns_main[ns_parts[i]])) {

			if(_.isUndefined(object)) {
				ns_main[ns_parts[i]] = {};
			} else {
				ns_main[ns_parts[i]] = _.isFunction(object) ? new object() : object;
			}
		}

		ns_main = ns_main[ns_parts[i]];
	}
	
	return ns_main;
}