/* global DocumentApp, HtmlService */

export const onOpen = () => {
  const addonMenu = DocumentApp.getUi().createAddonMenu();
  addonMenu.addItem('Open sidebar', 'openTaskpane');
  addonMenu.addToUi();
};

export const openTaskpane = () => {
  const htmlServer = HtmlService.createTemplateFromFile('taskpane-html.html');
  const html = htmlServer.evaluate();

  const ui = DocumentApp.getUi();
  ui.showSidebar(html);
};
