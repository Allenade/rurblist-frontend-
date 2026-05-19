export type LocalPropertyReaction = 'like' | 'unlike' | null;

export type LocalPropertyState = {
  reaction?: LocalPropertyReaction;
  isSaved?: boolean;
  likes?: number;
  unlikes?: number;
};

function getPropertyStateKey(propertyId: string, userId?: string) {
  return `property-state:${userId || 'guest'}:${propertyId}`;
}

export function getLocalPropertyState(propertyId: string, userId?: string) {
  if (typeof window === 'undefined' || !propertyId) return null;

  const raw = window.localStorage.getItem(getPropertyStateKey(propertyId, userId));
  if (!raw) return null;

  try {
    return JSON.parse(raw) as LocalPropertyState;
  } catch {
    return null;
  }
}

export function setLocalPropertyState(
  propertyId: string,
  userId: string | undefined,
  state: LocalPropertyState,
) {
  if (typeof window === 'undefined' || !propertyId) return;

  const previous = getLocalPropertyState(propertyId, userId) ?? {};
  const next = { ...previous, ...state };

  window.localStorage.setItem(getPropertyStateKey(propertyId, userId), JSON.stringify(next));
}
