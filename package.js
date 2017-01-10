Package.describe({
	name: 'rkhaslarov:namespace',
	version: '1.1.3',
	summary: 'This package provides a simple javascript app namespacing utility.',
	git: 'https://github.com/rkhaslarov/namespace',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use(['ecmascript']);
	api.addFiles(['app.js']);
	api.export('App');
});
