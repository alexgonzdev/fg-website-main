import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import HomePageClient from '@/components/home/HomePageClient';

export const metadata: Metadata = generatePageMetadata('home');

export default function Home() {
  return <HomePageClient />;
}
