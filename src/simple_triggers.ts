/* global DocumentApp, HtmlService */

export const onOpen = () => {
  const addonMenu = DocumentApp.getUi().createAddonMenu();
  addonMenu.addItem('Open sidebar', 'openTaskpane');
  addonMenu.addToUi();
};

export const openTaskpane = () => {
  const html = HtmlService.createHtmlOutputFromFile('taskpane.html');
  const ui = DocumentApp.getUi();
  ui.showSidebar(html);
};
