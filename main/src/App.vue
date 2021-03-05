<template>
  <div id="app">
    <Header />
    <Content />
  </div>
</template>

<script>

import Content from './components/template/Content'
import Header from './components/template/Header'


export default {
  name: 'App',
  components: {Content, Header}
}
</script>

<style>
* {
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		font-size: 1.1rem;
	}

	body {
		margin: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr;
		grid-template-columns: 1fr;
		grid-template-areas:
			"header header"
			"content content";
	}

</style>
