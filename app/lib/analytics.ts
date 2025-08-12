// Google Analytics tracking utilities

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      parameters?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Track phone call clicks
export const trackPhoneCall = (source: string, phoneNumber: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call_clicked', {
      source: source,
      phone_number: phoneNumber,
      event_category: 'contact',
      event_label: 'phone_call'
    });
  }
};

// Track WhatsApp clicks
export const trackWhatsApp = (source: string, phoneNumber: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_clicked', {
      source: source,
      phone_number: phoneNumber,
      event_category: 'contact',
      event_label: 'whatsapp'
    });
  }
};

// Generic event tracking function
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};