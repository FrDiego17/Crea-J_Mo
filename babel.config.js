module.exports = function(api){
    api.cache(true);
    return{
        presets: ['babel-preset-expo'],
        plugins: [
            ["module:react-native-dotenv",{
                "moduleName": "@env",  //de esta forma podemos importarlo en el archivo que lo vayamos a usar
                "path" : ".env", 
                "blacklist": null,
                "whitelist": null,
                "safe" : false,
                "allowUndefined": true 
            }]
        ]
    };
}