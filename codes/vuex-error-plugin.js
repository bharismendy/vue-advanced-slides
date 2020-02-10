/**
 * createErrorPlugin
 * @param {Object}		options
 * @param {Function}	options.errorHandler
 * @param {Function}	options.notify
 */
export default function createErrorPlugin(options) {
	/* do what you need here */
	/* We can imagine an error handler function in the options */
	/* a create notification create function */

	return VuexErrorPlugin = (store) => {
		/**
		 * mutations: { type, payload }
		 * state: Object,
		 */
		store.subscribe((mutation, state) => {
			if (mutation.type == 'error/last') {
				// error/last
			}
		})
	}
}

export default createErrorPlugin
