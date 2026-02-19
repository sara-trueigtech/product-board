export function loginToken() {
  localStorage.setItem("access-token", "logged-in");

  document.cookie = "access-token=logged-in; path=/";
}

export function logoutToken() {
  localStorage.removeItem("access-token");

  document.cookie =
    "access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

export function getToken() {
  return localStorage.getItem("access-token");
}
