import * as vscode from 'vscode'
import * as commands from './commands'
import { SuggestSnippet } from './actions'

export async function activate ({ subscriptions }: vscode.ExtensionContext) {
  // load commands
  for (const command of Object.keys(commands)) {
    const disposable = vscode.commands.registerCommand(
      `extension.${command}`,
      commands[command]
    )

    subscriptions.push(disposable)
  }

  // load actions
  subscriptions.push(
    vscode.languages.registerCodeActionsProvider('javascript', new SuggestSnippet(), {
			providedCodeActionKinds: SuggestSnippet.providedCodeActionKinds
    })
  )
}

export function deactivate () {}
