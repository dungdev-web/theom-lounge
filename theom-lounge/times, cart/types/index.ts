export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration?: number; // minutes
  image?: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  anchor: string;
  services: Service[];
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export type CartItem = {
  service: Service;
  quantity?: number;  // Optional - chỉ có khi parentId có (child items)
  effect?: string;
  parentId?: string;
};

export interface BookingInfo {
  customerName: string;
  phone: string;
  date: string;
  time: string;
  technicianName: string;
  technicianAvatar: string;
}

export type PanelState = 'closed' | 'cart' | 'booking';