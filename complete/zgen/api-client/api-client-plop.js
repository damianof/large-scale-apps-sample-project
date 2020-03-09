const path = require('path');
const addImportsAndProps = require('./custom-actions/addImportsAndProps.js');

const modelsBasePath = path.join(__dirname, '../../src/models');
const apiClientBasePath = path.join(__dirname, '../../src/api-client');

/*
Case Modifiers
camelCase: changeFormatToThis
snakeCase: change_format_to_this
dashCase/kebabCase: change-format-to-this
dotCase: change.format.to.this
pathCase: change/format/to/this
properCase/pascalCase: ChangeFormatToThis
lowerCase: change format to this
sentenceCase: Change format to this,
constantCase: CHANGE_FORMAT_TO_THIS
titleCase: Change Format To This
*/

module.exports = (plop) => {
    //plop.addHelper('lowerCase', (text) => (text || '').lowerCase());

	plop.setActionType('addImportsAndProps', addImportsAndProps);

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
		actions: [
		// create entity models
		{
            type: 'add',
            path: `${ modelsBasePath }/{{ kebabCase entityPlural }}/I{{ entityName }}.ts`,
            templateFile: 'templates/entity-model.ts',
            force: true
        }, {
            type: 'add',
            path: `${ modelsBasePath }/api-client/{{ kebabCase entityPlural }}/I{{ entityPlural }}ApiClient.ts`,
            templateFile: 'templates/api-client-model.ts',
            force: true
        },
		// IApiClient model updates
		{
			type: 'addImportsAndProps',
            fullFilePath: `${ modelsBasePath }/api-client/IApiClient.ts`,
            placeHolder: 'GEN-IMPORTS',
			addCommaPrefix: false,
			tabs: '',
		    codeTemplate: `import { I{{ entityPlural }}ApiClient } from '@/models/api-client/{{ kebabCase entityPlural }}/I{{ entityPlural }}ApiClient'`
        }, {
			type: 'addImportsAndProps',
            fullFilePath: `${ modelsBasePath }/api-client/IApiClient.ts`,
            placeHolder: 'GEN-PROPERTIES',
			addCommaPrefix: true,
			tabs: '\t',
		    codeTemplate: `{{ camelCase entityPlural }}: I{{ entityPlural }}ApiClient`
        }, 
		// mock instance
		{
            type: 'add',
            path: `${ apiClientBasePath }/mock/{{ kebabCase entityPlural }}/index.ts`,
            templateFile: 'templates/mock-client.ts',
            force: true
        }, {
			type: 'addImportsAndProps',
            fullFilePath: `${ apiClientBasePath }/mock/index.ts`,
            placeHolder: 'GEN-IMPORTS',
			addCommaPrefix: false,
			tabs: '',
		    codeTemplate: `import {{ camelCase entityPlural }}ApiClient from '@/api-client/mock/{{ kebabCase entityPlural }}'`
        }, {
			type: 'addImportsAndProps',
            fullFilePath: `${ apiClientBasePath }/mock/index.ts`,
            placeHolder: 'GEN-PROPERTIES',
			addCommaPrefix: true,
			tabs: '\t',
		    codeTemplate: `{{ camelCase entityPlural }}: {{ camelCase entityPlural }}ApiClient`
        }, 
		// live instance
		{
            type: 'add',
            path: `${ apiClientBasePath }/live/{{ kebabCase entityPlural }}/index.ts`,
            templateFile: 'templates/live-client.ts',
            force: true
        }, {
			type: 'addImportsAndProps',
            fullFilePath: `${ apiClientBasePath }/live/index.ts`,
            placeHolder: 'GEN-IMPORTS',
			addCommaPrefix: false,
			tabs: '',
		    codeTemplate: `import {{ camelCase entityPlural }}ApiClient from '@/api-client/live/{{ kebabCase entityPlural }}'`
        }, {
			type: 'addImportsAndProps',
            fullFilePath: `${ apiClientBasePath }/live/index.ts`,
            placeHolder: 'GEN-PROPERTIES',
			addCommaPrefix: true,
			tabs: '\t',
		    codeTemplate: `{{ camelCase entityPlural }}: {{ camelCase entityPlural }}ApiClient`
        }]
	});
};
