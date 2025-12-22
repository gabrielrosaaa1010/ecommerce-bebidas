export const generateReferralCode = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

export const saveReferralCode = (code: string): void => {
  localStorage.setItem('referralCode', code);
};

export const getReferralCode = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('referralCode');
};
