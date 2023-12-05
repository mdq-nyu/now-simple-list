import { actionTypes } from "@servicenow/ui-core";
import {
	FETCH_DATA,
	FETCH_DATA_FAILED,
	FETCH_DATA_SUCCEEDED,
} from "../constants";
import { createHttpEffect } from "@servicenow/ui-effect-http";

const { COMPONENT_BOOTSTRAPPED } = actionTypes;

const actions = {
	[COMPONENT_BOOTSTRAPPED]: ({ properties, dispatch }) => {
		console.log(`COMPONENT_BOOTSTRAPPED`);
		const { table, fields } = properties;

		dispatch(FETCH_DATA, {
			table: table,
			fields: fields.join(","),
		});
	},
	[FETCH_DATA]: createHttpEffect("/api/now/table/:table", {
		method: "GET",
		pathParams: ["table"],
		successActionType: FETCH_DATA_SUCCEEDED,
		// errorActionType: FETCH_DATA_FAILED,
	}),
	[FETCH_DATA_SUCCEEDED]: ({ action }) => {
		console.log(`FETCH_DATA_SUCCEEDED: ${JSON.stringify(action)}`);
	},
	[FETCH_DATA_FAILED]: ({ action }) => {
		console.log(`FETCH_DATA_FAILED: ${JSON.stringify(action)}`);
	},
};
export default actions;
