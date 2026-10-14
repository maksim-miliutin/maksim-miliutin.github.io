import './style.css';
import { mount } from './dom';
import { mapSection } from './parts/atlas';
import { mastheadSection } from './parts/masthead';
import { heroSection } from './parts/hero';
import { worksSection } from './parts/works';
import { kitSection } from './parts/kit';
import { footSection, reachSection } from './parts/foot';

mount('masthead', mastheadSection());
mount('hero', heroSection());
mount('works', worksSection());
mount('reach', reachSection());
mount('atlas', mapSection());
mount('kit', kitSection());
mount('foot', footSection());
