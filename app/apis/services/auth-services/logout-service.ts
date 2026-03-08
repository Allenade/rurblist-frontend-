export function clearAuthAndRedirect() {
  document.cookie =
    "auth_token=; path=/; max-age=0; samesite=strict";

  window.location.href = "/auth/login";
}