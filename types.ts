
// Fix: Import React to resolve React namespace for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatProps {
  label: string;
  value: string;
  subtext?: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ValuePropProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}