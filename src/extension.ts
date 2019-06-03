import * as vscode from 'vscode'
import * as commands from './commands'

export async function activate ({ subscriptions }: vscode.ExtensionContext) {
  for (const command of Object.keys(commands)) {
    const disposable = vscode.commands
      .registerCommand(`extension.${command}`, commands[command])

    subscriptions.push(disposable)
  }
}

export function deactivate () {}
