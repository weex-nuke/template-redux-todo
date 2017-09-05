module.exports = {
  // 当前项目使用的fie套件
  toolkit: 'fie-toolkit-nuke',
  toolkitConfig: {
    port: 8080,
    open: true,
    openTarget: 'demos/index.html',
    liveload: true,
    path: { simple: '' },
    devType: 'common',
    webpack: {
      entry: {},
      sourcemap: 'cheap-module-inline-source-map',
      uglify: true,
      hotreload: false,
      'optimize-size': {
        nuke: true,
        webpack: false,
      },
      externals: {},
      alias: {
        $page: './src/pages',
      },
      report: true,
    },
    keepOld: true,
  },
};
