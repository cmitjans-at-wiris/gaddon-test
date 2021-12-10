import { insertImage, onOpen, openTaskpane } from '@src/simple_triggers';

(global as any).onOpen = onOpen;
(global as any).openTaskpane = openTaskpane;
(global as any).insertImage = insertImage;
