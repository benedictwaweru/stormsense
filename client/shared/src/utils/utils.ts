export function relativeTimeFormat(value: number, unit: Intl.RelativeTimeFormatUnit): string {
	return new Intl.RelativeTimeFormat(`en`, { style: `short` }).format(value, unit);
}
