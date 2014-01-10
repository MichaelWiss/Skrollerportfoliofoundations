module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({
  	 pkg: grunt.file.readJSON('package.json'),

        concat: {
          dist: {
        		src: [
        		'js/libs/*', //All JS in the libs folder
        		'js/global.js'  //This specific file
        		],
        		dest: 'js/build/production.js',
        	}
    },

       uglify: {
    build: {
        src: ['js/libs/*.js','js/global.js','js/vendor/*.js',], //input
        dest: 'js/build/global.min.js' //output
    }
},

     imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/'
        }]
    }
},

    watch: {
       options: {
        livereload: true,
       },
    scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
         }
        },
       css: {
    files: ['css/*.scss'],
    tasks: ['sass'],
    options: {
        spawn: false,
    }
    } 
},

    sass: {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
           'css/build/global.css': 'css/global.scss'

        }
    } 
},
     


  });

  

  // Load plugins here
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-sass');
   
  // Define your tasks here
  
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass',]);
  


};