import './style.css';
import { mount } from './dom';
import { wireTheme } from './theme';
import { mapSection, wireMap } from './parts/atlas';
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

const themeButton = document.getElementById('theme');

if (themeButton !== null)
{
    wireTheme(document.documentElement, themeButton);
}

const pin = document.getElementById('pin');
const leg = document.getElementById('leg');
const legend = document.getElementById('legend');

if (pin !== null && leg !== null && legend !== null)
{
    wireMap({
        pin: pin as unknown as SVGGElement,
        leg: leg as unknown as SVGPathElement,
        legend,
        buttons: document.querySelectorAll<HTMLButtonElement>('.cities button'),
    });
}
