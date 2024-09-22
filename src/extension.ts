import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('extension "tottiwashere" is now active!');

  const disposable = vscode.commands.registerCommand(
    "tottiwashere.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World!");
    }
  );

  const disposable2 = vscode.commands.registerCommand(
    "tottiwashere.helloAgain",
    () => {
      vscode.window.showInformationMessage("Hello Again!");
    }
  );

  const disposable3 = vscode.commands.registerCommand(
    "tottiwashere.newPanel",
    () => {
      const panel = vscode.window.createWebviewPanel(
        "tottiwashere",
        "Totti was here",
        vscode.ViewColumn.One,
        {}
      );

      panel.webview.html = "<h1>Totti was here</h1>";
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable2);
  context.subscriptions.push(disposable3);
}

export function deactivate() {}
