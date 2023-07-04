const mapping: Record<string, string> = {
  organizations: 'organization',
  'time-off-requests': 'time_off_request',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
