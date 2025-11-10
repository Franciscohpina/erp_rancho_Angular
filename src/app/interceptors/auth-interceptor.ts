import { inject } from '@angular/core';
import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service';

/**
 * Interceptor funcional para añadir el token JWT a las peticiones.
 */
export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {

  // Inyectamos el AuthService
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    // Si hay token, clonamos la petición y añadimos el header
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(cloned);
  }

  // Si no hay token, la petición sigue su curso normal
  return next(req);
};

