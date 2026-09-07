import './style.css';
import { mount } from './dom';
import { wireTheme } from './theme';
import { mapSection, wireMap } from './atlas';
import { mastheadSection } from './masthead';
import { heroSection } from './hero';
import { worksSection } from './works';
import { kitSection } from './kit';
import { footSection, reachSection } from './foot';

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
