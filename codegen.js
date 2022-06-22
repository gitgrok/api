// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('swagger-axios-codegen');

codegen({
    methodNameMode: 'operationId',
    source: require('./api.json'),
    // remoteUrl: 'http://localhost:44307/swagger/v1/swagger.json',
    outputDir: './api',
    fileName: 'indexv3.ts',
    strictNullChecks: false,
    modelMode: 'interface',
});
