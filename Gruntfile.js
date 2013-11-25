// wrapper function
// fungsi ini akan jadi selimut semua konfigurasi gruntjs
module.exports = function (grunt) {

  /** 
   * load plugin
   */
  grunt.loadNpmTasks('grunt-contrib-connect');

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

  });

  /** 
   * register custom task
   */
  // tulis kode untuk register custom task disini
}