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
	let b;

	return {
		c() {
			b = element("b");
			b.innerHTML = `${get_answer()}`;
		},
		m(target, anchor) {
			insert(target, b, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(b);
		}
	};
}

const ANSWER = 42;

function get_answer() {
	return ANSWER;
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Component;