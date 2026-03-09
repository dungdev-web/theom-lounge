/**
 * Format number thành định dạng tiền tệ Việt Nam
 */
export function fmt(n: number): string {
  return new Intl.NumberFormat('vi-VN').format(n) + ' đ';
}

/**
 * Format time string (HH:MM)
 */
export function formatTime(time: string): string {
  return time;
}

/**
 * Filter times theo khoảng thời gian
 */
export function getAMTimes(times: string[]): string[] {
  return times.filter((t) => {
    const h = parseInt(t.split(':')[0]);
    return h >= 9 && h < 12;
  });
}

export function getPMTimes(times: string[]): string[] {
  return times.filter((t) => {
    const h = parseInt(t.split(':')[0]);
    return h >= 12;
  });
}