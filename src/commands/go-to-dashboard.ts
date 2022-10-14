import * as vscode from "vscode";

const defineQuickPath = (command: string, path: string) => {
  return vscode.commands.registerCommand(`supabase-vscode.${command}`, () => {
    if (!supabaseRef) {
      return vscode.window.showErrorMessage("[Error] Supabase: Couldn't find Supabase's Ref from your .env file");
    }

    vscode.env.openExternal(vscode.Uri.parse(`https://app.supabase.com/project/${supabaseRef}${path}`));
  });
};

const navList = [
  { command: "goToEditor", path: "/editor" },
  { command: "goToAuth", path: "/auth/policies" },
  { command: "goToStorage", path: "/storage/buckets" },
  { command: "goToSQL", path: "/sql" },
  { command: "goToEdgeFunction", path: "/functions" },
  { command: "goToSettings", path: "/settings/general" },
];

export default navList.map((i) => defineQuickPath(i.command, i.path));
