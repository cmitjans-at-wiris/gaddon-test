/* global DocumentApp, HtmlService */

const onOpen = () => {
  const addonMenu = DocumentApp.getUi().createAddonMenu();
  addonMenu.addItem('Open sidebar', 'openTaskpane');
  addonMenu.addToUi();
};

const openTaskpane = () => {
  const htmlServer = HtmlService.createTemplateFromFile('taskpane-html.html');
  const html = htmlServer.evaluate();

  const ui = DocumentApp.getUi();
  ui.showSidebar(html);
};

export {
  onOpen,
  openTaskpane,
};
