if (typeof global.App === 'undefined') {
	App = {};
} 

App.namespace = (ns, object, prototype) => {

	let ns_parts = ns.split(".");
	let ns_main = App;

	ns_parts = ns_parts.filter(function(ns_part) { return ns_part !== ''; });

	if (ns_parts[0] === 'App') {
		ns_parts = ns_parts.slice(1);
	}

	for (let i = 0, ns_length = ns_parts.length, ns_last = ns_length - 1; i < ns_length; i++) {

		if (typeof ns_main[ns_parts[i]] === 'undefined') {

			if(i < ns_last) {
				ns_main[ns_parts[i]] = {};
			} else {

				if(typeof object === 'undefined') {
					ns_main[ns_parts[i]] = {};
				} else {
					let instance = typeof object === "function" ? new object() : object;
					ns_main[ns_parts[i]] = Object.assign({}, instance);
					ns_main[ns_parts[i]].__proto__ = instance.__proto__;
				}

				if (prototype !== 'undefined') {
					ns_main[ns_parts[i]].__proto__ = prototype;
				}
			}

		}

		ns_main = ns_main[ns_parts[i]];
		
	}
	
	return ns_main;
}

