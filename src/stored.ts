export function readStored(key: string): string | null
{
	try
	{
		return localStorage.getItem(key);
	}
	catch
	{
		return null;
	}
}

export function writeStored(key: string, value: string): void
{
	try
	{
		localStorage.setItem(key, value);
	}
	catch
	{
		// Refused, as in a private window: the choice lasts until the page closes and
		// is asked for again next time, which is all a refusal leaves room for.
	}
}
