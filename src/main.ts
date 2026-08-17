import './style.css';

import { initAtlas } from './atlas';
import { initClock, initCounters, initSpy, initStart, initTheme, initWindows, mountIcons } from './chrome';
import { initDesk } from './desk';
import { initRepos } from './github';
import { initLanguage } from './i18n';
import { initLinks } from './links';
import { initNotes } from './notes';
import { initSparks } from './sparks';

mountIcons();
initTheme();
initWindows();
initSpy();
initStart();
initClock();
initCounters();
initAtlas();
initNotes();
initLinks();
initLanguage();
initDesk();
initSparks();

void initRepos();
