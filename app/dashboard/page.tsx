import { Objectifs } from '@/containers/dashboard/objectifs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Objectifs/>
  </>;
}
