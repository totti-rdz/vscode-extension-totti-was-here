import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('extension "vscodex-tottiwashere" is now active!');

	const disposable = vscode.commands.registerCommand('vscodex-tottiwashere.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	const disposable2 = vscode.commands.registerCommand('vscodex-tottiwashere.helloAgain', () => {
		vscode.window.showInformationMessage('Hello Again!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

export function deactivate() {}
