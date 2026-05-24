const requests = new Map();

export function rateLimit(ip: string) {

  const now = Date.now();

  const windowMs = 60 * 1000;

  const limit = 30;

  const data = requests.get(ip);

  if (!data) {

    requests.set(ip, {
      count: 1,
      start: now,
    });

    return true;
  }

  if (now - data.start > windowMs) {

    requests.set(ip, {
      count: 1,
      start: now,
    });

    return true;
  }

  if (data.count >= limit) {
    return false;
  }

  data.count++;

  return true;
}