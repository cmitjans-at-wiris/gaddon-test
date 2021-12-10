/* global DocumentApp, HtmlService */

import DocumentService from '@services/document_service';

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

export const insertImage = () => {
  console.log('Hello World');
  DocumentService.insertImage();
};
