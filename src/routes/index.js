// We only need to import the modules necessary for initial render
const createRoutes = {
	routes: {
		'/': require("./Home"),
		'/counter': require("./Counter"),
		'/user': require("./User")
	},

	alias: {
		// '/login/:username': '/login'
	}
}


export default createRoutes