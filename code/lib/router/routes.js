Router.configure({
	layoutTemplate: 'mainLayout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	yieldTemplates: {
		nav: {to: 'nav'},
		footer: {to: 'footer'}
	}
});

Router.map(function() {
	this.route('home', {
		path: '/',
	});

	this.route('private');
});

Router.plugin('ensureSignedIn', {
	only: ['private']
});

// Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');