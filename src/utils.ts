import * as vscode from 'vscode'

/**
 * get workspace configuration of vscode
 */
export function getWorkspaceConfiguration (section?: string): vscode.WorkspaceConfiguration {
  return vscode.workspace.getConfiguration(section)
}
