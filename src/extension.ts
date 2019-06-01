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

const installReactMostUsedDependencies = async () => {
  const dependencies: string = [
    'redux',
    'react-redux',
    'redux-thunk',
    'styled-components'
  ].join(' ')

  const exactVersion = await vscode.window.showQuickPick(
    [ 'Yes', 'No' ],
    { placeHolder: 'Install with exact version?' }
  ) === 'Yes' ? '--save-exact' : ''

  const terminal = vscode.window.createTerminal()

  terminal.show()

  terminal.sendText(`npm i ${exactVersion} ${dependencies}`)

  vscode.window.showInformationMessage('Installing commom dependencies')
}

export async function activate (context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.setConfigurations', setConfigurations)
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.installReactMostUsedDependencies', installReactMostUsedDependencies)
  )
}

export function deactivate () {}
