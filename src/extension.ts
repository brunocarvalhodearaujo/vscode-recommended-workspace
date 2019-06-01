import * as console from 'console'
import * as vscode from 'vscode'
import * as settings from './settings.json'

/**
 * get workspace configuration of vscode
 */
const getWorkspaceConfiguration = (section?: string): vscode.WorkspaceConfiguration => {
  return vscode.workspace.getConfiguration(section)
}

const setConfigurations = async () => {
  try {
    vscode.window.showInformationMessage('Starting apply recommended configurations')

    for (const section of Object.keys(settings)) {
      await getWorkspaceConfiguration().update(section, settings[section], true)
    }

    vscode.window.showInformationMessage('Success on apply recommended configurations!')
  } catch (error) {
    console.log(error)
  }
}

export async function activate (context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.setConfigurations', setConfigurations)

  context.subscriptions.push(disposable)
}

export function deactivate () {}
