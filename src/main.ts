import { onOpen, openTaskpane } from '@src/hello';

(global as any).onOpen = onOpen;
(global as any).openTaskpane = openTaskpane;
