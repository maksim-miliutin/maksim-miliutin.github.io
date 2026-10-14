import { afterEach, describe, expect, it, vi } from 'vitest';
import { readStored, writeStored } from './stored';

const refuse = (): never =>
{
    throw new DOMException('The operation is insecure.', 'SecurityError');
};

afterEach(() =>
{
    vi.unstubAllGlobals();
});

describe('a kept setting', () =>
{
    it('comes back as it was kept', () =>
    {
        const shelf = new Map<string, string>();

        vi.stubGlobal('localStorage',
        {
            getItem: (key: string) => shelf.get(key) ?? null,
            setItem: (key: string, value: string) => shelf.set(key, value),
        });

        writeStored('theme', 'dark');

        expect(readStored('theme')).toBe('dark');
    });

    it('reads as nothing kept when the browser refuses storage', () =>
    {
        vi.stubGlobal('localStorage', { getItem: refuse, setItem: refuse });

        expect(readStored('theme')).toBeNull();
    });

    it('is let go quietly when the browser refuses to keep it', () =>
    {
        vi.stubGlobal('localStorage', { getItem: refuse, setItem: refuse });

        expect(() => writeStored('theme', 'dark')).not.toThrow();
    });
});
