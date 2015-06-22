var publicAssets  = "./public/assets";
var sourceFiles   = "./gulp/assets";
var viewFolder = "./app/views";
module.exports = {
  publicAssets: publicAssets,
  browserSync: {
    proxy: 'localhost:3000',
    files: ['./app/views/**']
  },
  sass: {
    src: sourceFiles + "/stylesheets/**/*.scss",
    dest: publicAssets + "/stylesheets",
    settings: {
      indentedSyntax: true,
      imagePath: '/assets/images'
    }
  },
  images: {
    src: sourceFiles + "/images/**",
    dest: publicAssets + "/images"
  }
}
