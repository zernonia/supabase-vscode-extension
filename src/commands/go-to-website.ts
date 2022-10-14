import * as vscode from "vscode";

const defineQuickPath = (command: string, path: string) => {
  return vscode.commands.registerCommand(`supabase-vscode.${command}`, () => {
    vscode.env.openExternal(vscode.Uri.parse(`https://supabase.com${path}`));
  });
};

const navList = [
  { command: "goToWebsite", path: "/" },
  { command: "goToGuides", path: "/docs" },
  { command: "goToReference", path: "/docs/reference" },
];

export default navList.map((i) => defineQuickPath(i.command, i.path));
