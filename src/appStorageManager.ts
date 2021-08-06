export function getItem<T>(key: string): T | null {
  const stringItem = localStorage.getItem(key);

  if (!stringItem) {
    return null;
  }

  return JSON.parse(stringItem);
}

export function setItem(key: string, item: any) {
  const stringItem: string = JSON.stringify(item);
  localStorage.setItem(key, stringItem);
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}