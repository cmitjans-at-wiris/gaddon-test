import { onOpen, openTaskpane } from '@src/simple_triggers';

(global as any).onOpen = onOpen;
(global as any).openTaskpane = openTaskpane;
