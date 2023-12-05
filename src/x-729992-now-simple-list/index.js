import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = () => {
	return (
		<div>
			<h1>Hello World!</h1>
		</div>
	);
};

createCustomElement("x-729992-now-simple-list", {
	renderer: { type: snabbdom },
	view,
	styles,
});
