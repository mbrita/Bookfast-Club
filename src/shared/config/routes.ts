enum AppRoutes {
  MAIN = 'main',
  BOOK = 'book',
}

export const routes: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.BOOK]: '/book',
};
