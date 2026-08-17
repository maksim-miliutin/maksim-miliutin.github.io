import { $, $$ } from './dom';
import { t } from './i18n';

const ADDRESS = 'maksim.milutin06@gmail.com';

export function initLinks() {
    const copy = document.querySelector<HTMLButtonElement>('#copy-mail');

    copy?.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(ADDRESS);
        } catch {
            return;
        }

        const label = copy.lastChild;
        if (!label) return;

        label.textContent = t('ui.copied');
        setTimeout(() => {
            label.textContent = t('ui.copyAddress');
        }, 1400);
    });

    for (const row of $$('.files li[data-href]')) {
        const href = row.dataset.href;
        const link = $<HTMLAnchorElement>('.fopen', row);
        if (!href || !link) continue;

        link.href = href;
        link.hidden = false;
    }
}
