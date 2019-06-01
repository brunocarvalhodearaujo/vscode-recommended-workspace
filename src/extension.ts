import * as vscode from 'vscode'
import * as commands from './commands'

export async function activate (context: vscode.ExtensionContext) {
  for (const command of Object.keys(commands)) {
    const disposable = vscode.commands.registerCommand(
      `extension.${command}`,
      commands[command]
    )

    context.subscriptions.push(disposable)
  }
}

export function deactivate () {}
