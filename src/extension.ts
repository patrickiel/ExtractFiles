// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.extract', async (uri: vscode.Uri) => {
        const basePath = uri.fsPath;
        let result = '';

        const readDirectoryRecursive = async (dir: string) => {
            const entries = await vscode.workspace.fs.readDirectory(vscode.Uri.file(dir));
            for (const [entry, type] of entries) {
                const fullPath = path.join(dir, entry);
                const relativePath = path.relative(basePath, fullPath);
                if (type === vscode.FileType.Directory) {
                    await readDirectoryRecursive(fullPath);
                } else if (type === vscode.FileType.File) {
                    const content = await vscode.workspace.fs.readFile(vscode.Uri.file(fullPath));
                    result += `\nFilepath: \\${relativePath}\nContent:\n${content.toString()}\n`;
                }
            }
        };

        await readDirectoryRecursive(basePath);

        // copy the result to the clipboard
        await vscode.env.clipboard.writeText(result);

        // notify the user that the operation was successful
        vscode.window.showInformationMessage('Copied to clipboard');
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
