/* global DocumentApp, HtmlService */

export const onOpen = () => {
  const addonMenu = DocumentApp.getUi().createAddonMenu();
  addonMenu.addItem('Open sidebar', 'openTaskpane');
  addonMenu.addToUi();
};

export const openTaskpane = () => {
  console.log('Hello world');
  const htmlServer = HtmlService.createTemplateFromFile('taskpane.html');
  console.log(`HtmlServer: ${htmlServer}`);
  const html = htmlServer.evaluate();
  console.log(html);

  const ui = DocumentApp.getUi();
  ui.showSidebar(html);
};
