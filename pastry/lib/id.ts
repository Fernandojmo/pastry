export function encodeId(id: string): string {
  const base64 = Buffer.from(id, 'utf8').toString('base64');
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function decodeId(encoded: string): string {
  let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
  const pad = base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4));
  base64 += pad;
  return Buffer.from(base64, 'base64').toString('utf8');
}
