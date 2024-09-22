import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('extension "tottiwashere" is now active!');

  const disposables: vscode.Disposable[] = [];

  disposables.push(
    vscode.commands.registerCommand("tottiwashere.helloWorld", () => {
      vscode.window.showInformationMessage("Hello World!");
    })
  );

  disposables.push(
    vscode.commands.registerCommand("tottiwashere.helloAgain", () => {
      vscode.window.showInformationMessage("Hello Again!");
    })
  );

  disposables.push(
    vscode.commands.registerCommand("tottiwashere.newPanel", () => {
      const panel = vscode.window.createWebviewPanel(
        "tottiwashere",
        "Totti was here",
        vscode.ViewColumn.One,
        {}
      );

      panel.webview.html = "<h1>Totti was here</h1>";
    })
  );

  disposables.forEach((disposable) => context.subscriptions.push(disposable));
}

export function deactivate() {}
