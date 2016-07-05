// We only need to import the modules necessary for initial render
const createRoutes = {
	routes: {
		'/': require("./Home"),
		'/counter': require("./Counter")
	},

	alias: {
		// '/login/:username': '/login'
	}
}


export default createRoutes