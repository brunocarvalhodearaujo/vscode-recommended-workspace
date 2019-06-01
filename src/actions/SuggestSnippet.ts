import { CodeActionKind, TextDocument, Range, CodeAction, WorkspaceEdit } from 'vscode'

export class SuggestSnippet {
  public static readonly providedCodeActionKinds = [
    CodeActionKind.Empty,
    CodeActionKind.QuickFix
  ]

  private createFix (document: TextDocument, range: Range, emoji: string): CodeAction {
		const fix = new CodeAction(`Convert to ${emoji}`, CodeActionKind.Empty)
    fix.edit = new WorkspaceEdit()
    fix.edit.replace(document.uri, new Range(range.start, range.start.translate(0, 2)), emoji)

		return fix
	}

  public provideCodeActions (document: TextDocument, range: Range): CodeAction[] | undefined {
    const replaceWithSmileyFix = this.createFix(document, range, '😺');
		// Marking a single fix as `preferred` means that users can apply it with a
    // single keyboard shortcut using the `Auto Fix` command.
    replaceWithSmileyFix.isPreferred = true

    return [
      replaceWithSmileyFix
    ]
  }
}
