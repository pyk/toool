// wrapper function
// fungsi ini akan jadi selimut semua konfigurasi gruntjs
module.exports = function (grunt) {

  /** 
   * load plugin
   */
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /** 
   * konfigurasi task
   */
  grunt.initConfig({
    
    connect: {
      server: {
        options: {
          base: ".",
          port: 8000,
          host: 'localhost',
          livereload: true
        }
      }
    },
    recess: {
      dist: {
        options: {
          compile: true,
          compress: false,
        },
        files: {
          'assets/styles/main.css':['less/main.less'],
        }
      }
    },
    watch: {
      options: {livereload: true},
      html: {
        files: ['*.html'],
      },
      less: {
        files: ['less/*.less'],
        tasks: ['recess']
      }
    }
  });

  /** 
   * register custom task
   */
  grunt.registerTask('server', ['connect', 'watch']);
}