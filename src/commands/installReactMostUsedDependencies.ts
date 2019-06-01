import * as vscode from 'vscode'

export default async function installReactMostUsedDependencies () {
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
