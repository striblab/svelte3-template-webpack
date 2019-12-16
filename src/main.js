import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		'title': 'Star Tribune Svelte 3 app'
	}
});

window.app = app;

export default app;
