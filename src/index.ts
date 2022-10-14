import * as vscode from "vscode";
import { join } from "path";
import goToDashboard from "./commands/go-to-dashboard";
import goToWebsite from "./commands/go-to-website";

export function activate(context: vscode.ExtensionContext) {
  let rootDir = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  if (rootDir) {
    vscode.workspace.openTextDocument(join(rootDir, ".env")).then((document) => {
      const text = document.getText();
      const envList = text.split("\n");
      const supabaseUrl = envList.find((i) => i.includes("supabase.co"));
      global.supabaseRef = supabaseUrl?.split("https://")[1].split(".supabase")[0] ?? "";
      // console.log(text.split("\n"));
      // console.log({ supabaseUrl, supabaseRef });
    });
  }

  context.subscriptions.concat(goToWebsite);
  context.subscriptions.concat(goToDashboard);
}

export function deactivate() {}
