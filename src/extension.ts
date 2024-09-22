import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('extension "vscodex-tottiwashere" is now active!');

	const disposable = vscode.commands.registerCommand('vscodex-tottiwashere.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
