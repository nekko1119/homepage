module.exports = {
  '*.{ts,tsx,json,md,js}': ['prettier --write', 'git add'],
  '*.{ts,tsx,js}': ['yarn lint']
};
