import {
	SvelteComponent,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
	let h1;

	return {
		c() {
			h1 = element("h1");
			h1.innerHTML = `Hello ${name}!`;
		},
		m(target, anchor) {
			insert(target, h1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
		}
	};
}

let name = "world";

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Component;