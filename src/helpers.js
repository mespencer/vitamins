export const generateId = (label = 'id') => `${label}-${Math.random().toString(36).substr(2, 9)}`;
