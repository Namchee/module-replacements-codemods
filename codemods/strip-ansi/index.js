import jscodeshift from 'jscodeshift';

/**
 * @typedef {import('../../types.js').Codemod} Codemod
 * @typedef {import('../../types.js').CodemodOptions} CodemodOptions
 */

/**
 * @param {CodemodOptions} [options]
 * @returns {Codemod}
 */
export default function (options) {
	return {
		name: 'strip-ansi',
		transform: ({ file }) => {
			const j = jscodeshift;
			const root = j(file.source);

		},
	};
}
