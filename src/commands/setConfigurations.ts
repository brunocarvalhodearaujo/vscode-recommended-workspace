import * as console from 'console'
import * as vscode from 'vscode'
import * as settings from '../settings.json'
import { getWorkspaceConfiguration } from '../utils'

export default async function setConfigurations () {
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
