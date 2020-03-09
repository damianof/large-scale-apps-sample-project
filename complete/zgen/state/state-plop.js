const path = require('path');
const addImportsAndProps = require('../custom-actions/addImportsAndProps.js');

const modelsBasePath = path.join(__dirname, '../../src/models');
const storeModelsBasePath = path.join(__dirname, '../../src/models/store');
const storeInstanceBasePath = path.join(__dirname, '../../src/store');

module.exports = (plop) => {
	// import our custom action type:
	plop.setActionType('addImportsAndProps', addImportsAndProps);

    // create your generators here
	plop.setGenerator('basics', {
        description: 'Generate store and state module',
        prompts: [{
			type: 'input',
			name: 'entityName',
			message: 'Entity name?'
		}, {
			type: 'input',
			name: 'entityPlural',
			message: 'Entity plural name?'
		}],
		actions: [
            // create state models
            {
                type: 'add',
                path: `${ storeModelsBasePath }/{{ kebabCase entityPlural }}/I{{ entityPlural }}State.ts`,
                templateFile: 'templates/state-entity-model.ts',
                force: true
            },
            // create store instance code
            {
                type: 'add',
                path: `${ storeInstanceBasePath }/{{ kebabCase entityPlural }}/{{ camelCase entityPlural }}-module.ts`,
                templateFile: 'templates/store-model.ts',
                force: true
            },
            // IRootStore/IRootState models updates
            {
                type: 'addImportsAndProps',
                fullFilePath: `${ storeModelsBasePath }/IRootState.ts`,
                placeHolder: 'GEN-IMPORTS',
                addCommaPrefix: true,
                tabs: '\t',
                codeTemplate: `I{{ entityPlural }}State, initial{{ entityPlural }}State`
            }, 
            {
                type: 'addImportsAndProps',
                fullFilePath: `${ storeModelsBasePath }/IRootState.ts`,
                placeHolder: 'GEN-INTERFACE-PROPS',
                addCommaPrefix: false,
                tabs: '\t',
                codeTemplate: `{{ camelCase entityPlural }}State: I{{ entityPlural }}State`
            }, {
                type: 'addImportsAndProps',
                fullFilePath: `${ storeModelsBasePath }/IRootState.ts`,
                placeHolder: 'GEN-STORE-PROPS',
                addCommaPrefix: false,
                tabs: '\t',
                codeTemplate: `{{ camelCase entityPlural }}State: I{{ entityPlural }}State = initial{{ entityPlural }}State`
            },
            // models/store/index.ts export statements updates
            {
                type: 'addImportsAndProps',
                fullFilePath: `${ storeModelsBasePath }/index.ts`,
                placeHolder: 'GEN-EXPORTS',
                addCommaPrefix: false,
                tabs: '',
                codeTemplate: `export * from '@/models/store/{{ kebabCase entityPlural }}/I{{ entityPlural }}State'`
            },
            // store instance store/index.ts imports and modules section
            {
                type: 'addImportsAndProps',
                fullFilePath: `${ storeInstanceBasePath }/index.ts`,
                placeHolder: 'GEN-IMPORTS',
                addCommaPrefix: false,
                tabs: '',
                codeTemplate: `import { {{ camelCase entityPlural }}State } from '@/store/{{ kebabCase entityPlural }}/{{ camelCase entityPlural }}-module'`
            }, {
                type: 'addImportsAndProps',
                fullFilePath: `${ storeInstanceBasePath }/index.ts`,
                placeHolder: 'GEN-MODULES',
                addCommaPrefix: true,
                tabs: '\t\t',
                codeTemplate: `{{ camelCase entityPlural }}State`
            }
        ]
	});
};
