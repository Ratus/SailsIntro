/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		api: {

			// API files to watch:
			files: ['api/**/*']
		},
    views : {
      files: ['views/**/*'],

      options: {
        livereload: true
      }
    },
		assets: {

			// Assets to watch:
			files: ['assets/**/*', 'tasks/pipeline.js', '!assets/vendor', '!assets/vendor/**/*'],

			// When assets are changed:
			tasks: ['syncAssets'],
      options: {
        livereload: true
      }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
