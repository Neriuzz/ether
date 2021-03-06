import { Route, Method } from "../../server/router"
import { setPower, getPower } from "../../hardware"

const route : Array<Route> = [{
	method: Method.GET,
	url: "/api/power",
	handler: (_, response) => {
		response.send({ok: true, result: { power: getPower() }});
	}
}, {
	method: Method.PUT,
	url: "/api/power",
	handler: (_, response) => {
		setPower(true);
		response.send({ok: true});
	}
}, {
	method: Method.DELETE,
	url: "/api/power",
	handler: (_, response) => {
		setPower(false);
		response.send({ok: true});
	}
}];

export default route;