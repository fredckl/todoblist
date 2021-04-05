module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/todoblist/'
    : '/',
  chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "TODOBLIST";
                return args;
            })
    }
}