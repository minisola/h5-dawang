module.exports = {
    "plugins": {
      "postcss-pxtorem-plus":{
        rootValue:200,
        unitPrecision: 5,
        propList: ['*'],
        selectorBlackList: ["ignore-vw"],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
    },
      "cssnano": {
        "postcss-zindex": false,
        autoprefixer: false
      }
    }
  }