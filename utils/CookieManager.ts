export class CookieManager {
  // Get cookie by name
  static get(name: string): string | undefined {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return undefined;
  }

  // Set or update a cookie
  static set(name: string, value: string, daysToExpire: number = 30): void {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    const encodedValue = encodeURIComponent(value);
    document.cookie = `${name}=${encodedValue}; expires=${expirationDate.toUTCString()}`;
  }

  // Delete cookie by name
  static delete(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
