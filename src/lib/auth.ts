export interface User {
  name: string;
  email: string;
  picture: string;
  mobile: string;
}

export interface AuthSession {
  user: User;
  timestamp: number;
}

// Iranian mobile number validation
export const validateIranianMobile = (mobile: string): boolean => {
  // Remove all spaces and non-numeric characters except +
  const cleaned = mobile.replace(/[\s-]/g, '');
  
  // Valid Iranian mobile formats:
  // 09xxxxxxxxx (11 digits)
  // +989xxxxxxxxx (13 digits with +98)
  // 00989xxxxxxxxx (14 digits with 0098)
  const patterns = [
    /^09\d{9}$/, // 09xxxxxxxxx
    /^\+989\d{9}$/, // +989xxxxxxxxx
    /^00989\d{9}$/ // 00989xxxxxxxxx
  ];
  
  return patterns.some(pattern => pattern.test(cleaned));
};

// Normalize mobile number to standard format (09xxxxxxxxx)
export const normalizeMobile = (mobile: string): string => {
  const cleaned = mobile.replace(/[\s-]/g, '');
  
  if (cleaned.startsWith('+989')) {
    return '09' + cleaned.slice(4);
  }
  if (cleaned.startsWith('00989')) {
    return '09' + cleaned.slice(5);
  }
  return cleaned;
};

// Save user session to localStorage
export const saveUserSession = (user: User): void => {
  const session: AuthSession = {
    user,
    timestamp: Date.now()
  };
  localStorage.setItem('auth-session', JSON.stringify(session));
};

// Get user session from localStorage
export const getUserSession = (): User | null => {
  try {
    const sessionData = localStorage.getItem('auth-session');
    if (!sessionData) return null;
    
    const session: AuthSession = JSON.parse(sessionData);
    
    // Check if session is less than 24 hours old
    const twentyFourHours = 24 * 60 * 60 * 1000;
    if (Date.now() - session.timestamp > twentyFourHours) {
      clearUserSession();
      return null;
    }
    
    return session.user;
  } catch {
    return null;
  }
};

// Clear user session
export const clearUserSession = (): void => {
  localStorage.removeItem('auth-session');
};

// Fetch user data from randomuser.me API
export const fetchUserData = async (): Promise<{ name: string; email: string; picture: string }> => {
  const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
  
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  
  const data = await response.json();
  const user = data.results[0];
  
  return {
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    picture: user.picture.large
  };
};