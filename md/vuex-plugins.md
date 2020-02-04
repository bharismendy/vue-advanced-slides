# Vuex plugins

## How to add one ?

```js
import Vuex from 'vuex'
import { createSocketPlugin, socket } from '../core/socket'

const socketPlugin = createSocketPlugin(socket)

const store = new Vuex.Store({
	plugins: [ socketPlugin ]
})

export default store
```

## How to listen to store mutation

```js
export default function createSocketPlugin(socket) {
	/* do what you need here */

	return VuexSocketPlugin = store => {
		/**
		 * mutations: { type, payload }
		 * state: Object,
		 */
		store.subscribe((mutation, state) => {
			console.log(mutation.type)
			console.log(mutation.payload)
			socket.emit('store/mutation', mutation)
		})

		socket.on('store/commit', (data) => {
			const { type, payload } = data
			store.commit(type, payload)
		})

		socket.on('store/dispatch', (data) => {
			const { type, payload } = data
			store.dispatch(type, payload)
		})

	}
}
