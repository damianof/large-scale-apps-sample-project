const modelsBasePath = '../../src/models';
const apiClientBasePath = '../../src/api-client';

module.exports = (plop) => {
    plop.addHelper('toLowerCase', (text) => (text || '').toLowerCase());

	// create your generators here
	plop.setGenerator('basics', {
        description: 'this is a skeleton plopfile',
        prompts: [{
			type: 'input',
			name: 'entityName',
			message: 'Entity name name please'
		}, {
			type: 'input',
			name: 'entityPlural',
			message: 'Entity plural name please'
		}],
		actions: [{
            type: 'add',
            path: `${ modelsBasePath }/{{ toLowerCase entityPlural }}/I{{ entityName }}.ts`,
            templateFile: 'templates/entity-model.ts',
            force: true
        }, {
            type: 'add',
            path: `${ modelsBasePath }/api-client/{{ toLowerCase entityPlural }}/I{{ entityPlural }}ApiClient.ts`,
            templateFile: 'templates/api-client-model.ts',
            force: true
        }, {
            type: 'add',
            path: `${ apiClientBasePath }/mock/{{ toLowerCase entityPlural }}/index.ts`,
            templateFile: 'templates/mock-client.ts',
            force: true
        }, {
            type: 'modify',
            path: `${ modelsBasePath }/api-client/IApiClient.ts`,
            pattern: /(\/\/\sGEN-IMPORTS)/g,
            //template: '$1\nimport Model from "./{{ camelCase entityName }}";'
            template: `$1\nimport { I{{ entityPlural }}ApiClient } from '@/models/api-client/{{ toLowerCase entityPlural }}/I{{ entityPlural }}ApiClient'`
        }, {
            type: 'modify',
            path: `${ modelsBasePath }/api-client/IApiClient.ts`,
            pattern: /(\/\/\sGEN-PROPERTIES)/g,
            //template: '$1\nimport Model from "./{{ camelCase entityName }}";'
            template: `$1\n\t{{ toLowerCase entityPlural }}: I{{ entityPlural }}ApiClient`
        }]
	});
};

// module.exports = plop => {
//   plop.addHelper('lowerCase', (text) => (text || '').toLowerCase());

//   plop.setGenerator('model', {
//     // …

//     actions: [
//       // Add a new model + tests boilerplate.
//       {
//         type: 'add',
//         path: 'app/models/{{camelCase name}}.model.ts',
//         templateFile: 'plop-templates/model.js',
//       },
//     //   {
//     //     type: 'add',
//     //     path: 'app/tests/{{camelCase name}}.model.tests.js',
//     //     templateFile: 'plop-templates/model.tests.js',
//     //   },

//     //   // Modify the module file to inject created model.
//     //   // This is basically RegExp replacement.
//     //   {
//     //     type: 'modify',
//     //     path: modulePath,
//     //     pattern: /(\/\/ IMPORT MODULE FILES)/g,
//     //     template: '$1\nimport Model from "./{{camelCase name}}.model";',
//     //   },
//     //   {
//     //     type: 'modify',
//     //     path: modulePath,
//     //     pattern: /(const namespace = "\w+";)/g,
//     //     template: '$1\n\nModel = Model.extend( { namespace: namespace } );',
//     //   },
//     ],
//   })
// }
