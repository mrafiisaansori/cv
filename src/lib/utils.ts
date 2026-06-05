export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isInternalHash(href: string) {
  return href.startsWith("#");
}
