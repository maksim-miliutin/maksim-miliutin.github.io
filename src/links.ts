import { $, $$ } from './dom';
import { t } from './i18n';

const ADDRESS = 'maksim.milutin06@gmail.com';

const COPIED_MS = 1400;

/** Reveals the repository link on a product row and wires the copy-address button. */
export function initLinks(): void
{
    for (const row of $$('.files li[data-href]'))
    {
        const href = row.dataset.href;
        const link = $<HTMLAnchorElement>('.fopen', row);

        // an empty data-href means the repository is not public yet, so nothing is shown
        if (href === undefined || href === '' || link === null)
        {
            return;
        }

        link.href = href;
        link.hidden = false;
    }

    const copy = $<HTMLButtonElement>('#copy-mail');

    if (copy === null)
    {
        return;
    }

    copy.addEventListener('click', () =>
    {
        // a machine with no mail client does nothing on a mailto click, which reads as broken
        navigator.clipboard.writeText(ADDRESS).then(() =>
        {
            const label = copy.lastChild;

            if (label === null)
            {
                return;
            }

            label.textContent = t('ui.copied');
            setTimeout(() => { label.textContent = t('ui.copyAddress'); }, COPIED_MS);
        },
        () =>
        {
            // clipboard denied: the address is still on screen and selectable
        });
    });
}
