const fs = require('fs');
const Handlebars = require('handlebars');

const addImportsAndProps = (data, config, plop) => {
	const {
		fullFilePath,
		placeHolder,
		codeTemplate,
		addCommaPrefix,
		tabs
	} = config;

	// console.log('data', data);
	// console.log('config', config);

	/*
	data { 
		entityName: 'Person', 
		entityPlural: 'People'
	}
	config { 
		type: 'addImportsAndProps',
		fullFilePath: '../../../src/api-client/mock/index.ts',
		placeHolder: 'GEN-IMPORTS',
		codeTemplate:
		'import {{ camelCase entityPlural }}ApiClient from \'@/api-client/mock/{{ lowerCase entityPlural }}\'',
		force: false
	}
	*/

	// transform templat with handlebars
	const handlebarsTempl = Handlebars.compile(codeTemplate);
	const codeStatement = handlebarsTempl(data);
	//console.log('codeStatement', codeStatement);
	if (codeStatement.length > 0) {
		//console.log('fullFilePath', fullFilePath);

		const fileContent = fs.readFileSync(fullFilePath, 'utf8');
		//console.log('fileContent', fileContent);

		//const rx = eval('/(' + codeStatement + '+/gi');
		//const exists = rx.match(fileContent);
		const exists = fileContent.toLowerCase().indexOf(codeStatement.toLowerCase()) > -1;
		//console.log('exists', exists);

		if (!exists) {
			//console.log('----- replace and write file');
			const searchPattern = eval('/(' + placeHolder + '){1}/gi');
			//const searchPattern = /(GEN-IMPORTS)\n{1}/gi;
			//console.log('searchPattern', searchPattern);
			let replacement = '';
			if (addCommaPrefix) {
				replacement = `${ tabs }, ${ codeStatement }`;
			} else {
				replacement = `${ tabs }${ codeStatement }`;
			}
			const updatedFileContent = fileContent.replace(searchPattern, `${ placeHolder }\n${ replacement }`);
			console.log('updatedFileContent', updatedFileContent);
			fs.writeFileSync(fullFilePath, updatedFileContent);
		}
	}

	// return
	return true;
};

module.exports = addImportsAndProps;