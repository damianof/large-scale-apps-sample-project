const fs = require('fs');
const Handlebars = require('handlebars');

const escapeRegexSpecialChars = (text) => {
	// $& means the whole matched string
	return (text || '')
		.replace(/[.*+?^${}()|[\]\\']/g, '\\$&')
		.replace(/\s+/gi, '\\s');
	//return (text || '').replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

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

	// transform templat with handlebars
	const handlebarsTempl = Handlebars.compile(codeTemplate);
	const codeStatement = handlebarsTempl(data);
	//console.log('codeStatement', codeStatement);
	if (codeStatement.length > 0) {
		//console.log('fullFilePath', fullFilePath);

		const fileContent = fs.readFileSync(fullFilePath, 'utf8');
		//console.log('fileContent', fileContent);
		//console.log('_______________');
		//console.log('codeStatement', codeStatement);

		const rxExpression = '(' + escapeRegexSpecialChars(codeStatement) + ')$';
		//console.log('rxExpression', rxExpression);
		const rx = new RegExp(rxExpression, 'gim');
		//console.log('rx.toString()', rx.toString());
		const matches = fileContent.match(rx);
		//const exists = fileContent.toLowerCase().indexOf(codeStatement.toLowerCase()) > -1;
		const exists = (matches || []).length > 0;
		// console.log('matches', matches);
		// console.log('exists', exists);

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
			//console.log('updatedFileContent', updatedFileContent);
			fs.writeFileSync(fullFilePath, updatedFileContent);
		}
	}

	// return
	return true;
};

module.exports = addImportsAndProps;
