import { Documents } from '@/containers/doc/doc';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Documents/>
  </>;
}
