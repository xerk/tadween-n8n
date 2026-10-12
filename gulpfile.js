const path = require('path');
const { task, src, dest } = require('gulp');
const {copyFile} = require('fs/promises');

task('build:icons', copyIcons);

async function copyIcons() {
	await copyFile('nodes/Tadween/tadween.svg', 'dist/nodes/Tadween/tadween.svg');
	return copyFile('pnpm-lock.yaml', 'dist/pnpm-lock.yaml');
}
