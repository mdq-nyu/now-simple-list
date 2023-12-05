import { actionTypes } from "@servicenow/ui-core";
import {
	FETCH_DATA,
	FETCH_DATA_FAILED,
	FETCH_DATA_SUCCEEDED,
} from "../constants";

const { COMPONENT_BOOTSTRAPPED } = actionTypes;

const actions = {
	[COMPONENT_BOOTSTRAPPED]: ({ properties, dispatch }) => {
		console.log(`COMPONENT_BOOTSTRAPPED`);
		const { table, fields } = properties;

		dispatch(FETCH_DATA, {
			table: table,
			fields: fields,
		});
	},
	[FETCH_DATA]: ({ action }) => {
		console.log(`FETCH_DATA: ${JSON.stringify(action)}`);
	},
	[FETCH_DATA_SUCCEEDED]: ({ action }) => {},
	[FETCH_DATA_FAILED]: ({ action }) => {},
};
export default actions;
