import * as console from 'console'
import * as vscode from 'vscode'
import * as settings from './settings.json'

class ConfigurationService {
  /**
   * get configuration of vscode
   */
  getConfig (section?: string): vscode.WorkspaceConfiguration {
    return vscode.workspace.getConfiguration(section)
  }
}

const setConfigurations = async () => {
  const service = new ConfigurationService()

  try {
    for (const section of Object.keys(settings)) {
      await service.getConfig().update(section, settings[section], true)
    }

    vscode.window.showInformationMessage('Success on apply recommended configurations!')
  } catch (error) {
    console.log(error)
  }
}

export async function activate (context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.helloWorld', setConfigurations)

  context.subscriptions.push(disposable)
}

export function deactivate () {}
