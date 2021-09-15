
import { UrlMatcher, UrlSegment } from '@angular/router';
import { Router } from '@angular/router';

export function startsWith(prefix: string): UrlMatcher {
    return (url: UrlSegment[]) => {
        const fullUrl = url.map(u => u.path).join('/');
        if (fullUrl.startsWith(prefix)) {
            return ({ consumed: url});
        }
        return null;
    };
}

export function endsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
      const fullUrl = url.map(u => u.path).join('/');
      if (fullUrl.endsWith(prefix)) {
          return ({consumed: url});
      }
      return null;
  };
}

export function byPassRouting(router: Router, window: Window): void {
  router.navigateByUrl(location.pathname.substr(1));
  window.addEventListener('popstate', () => {
    router.navigateByUrl(location.pathname.substr(1));
  });
}
