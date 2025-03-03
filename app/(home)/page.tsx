import { Metadata } from 'next';
import { Hello } from '@/containers/home/Hello';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Hello/>
  </>;
}
