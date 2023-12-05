import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import view from "./view.js";

createCustomElement("x-729992-now-simple-list", {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: {
		table: {
			default: "tasl",
		},
		fields: {
			default: ["number", "assigned_to", "sys_created_on"],
			schema: {
				type: "array",
				items: "string",
			},
		},
	},
});
