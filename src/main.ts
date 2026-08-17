import './style.css';

import { initAtlas } from './atlas';
import { initClock, initSpy, initStart, initTheme, initWindows, mountIcons } from './chrome';
import { initDesk } from './desk';
import { initRepos } from './github';
import { initLanguage } from './i18n';
import { initLinks } from './links';
import { initNotes } from './notes';

mountIcons();
initTheme();
initWindows();
initSpy();
initStart();
initClock();
initAtlas();
initNotes();
initLinks();
initLanguage();
initDesk();

void initRepos();
