const PREFIX = "ot_v1_";

export function getProgress(slug: string): number {
  if (typeof window === "undefined") return 0;
  return parseFloat(localStorage.getItem(`${PREFIX}prog_${slug}`) || "0");
}

export function saveProgress(slug: string, pct: number) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`${PREFIX}prog_${slug}`, String(pct));
  localStorage.setItem(`${PREFIX}last`, slug);
}

export function getLastRead(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(`${PREFIX}last`);
}

export function isRead(slug: string): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(`${PREFIX}read_${slug}`) === "1";
}

export function isComplete(slug: string): boolean {
  return isRead(slug) || getProgress(slug) >= 95;
}

export function markRead(slug: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`${PREFIX}read_${slug}`, "1");
  localStorage.setItem(`${PREFIX}prog_${slug}`, "100");
  localStorage.setItem(`${PREFIX}last`, slug);
}

export function isQuizPassed(volumeNumero: number): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(`${PREFIX}quiz_${volumeNumero}`) === "passed";
}

export function markQuizPassed(volumeNumero: number) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`${PREFIX}quiz_${volumeNumero}`, "passed");
}

export function getFavorites(): { tipo: string; id: string; titulo: string }[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(`${PREFIX}favs`) || "[]");
}

export function isFavorite(tipo: string, id: string): boolean {
  if (typeof window === "undefined") return false;
  const favs = getFavorites();
  return favs.some((f) => f.tipo === tipo && f.id === id);
}

export function toggleFavorite(tipo: string, id: string, titulo: string): boolean {
  if (typeof window === "undefined") return false;
  const favs = getFavorites();
  const idx = favs.findIndex((f) => f.tipo === tipo && f.id === id);
  if (idx >= 0) {
    favs.splice(idx, 1);
    localStorage.setItem(`${PREFIX}favs`, JSON.stringify(favs));
    return false;
  }
  favs.push({ tipo, id, titulo });
  localStorage.setItem(`${PREFIX}favs`, JSON.stringify(favs));
  return true;
}
