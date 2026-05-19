'use client';
import EscrowForm from '@/features/properties/components/escrow/escrow-form';
import { useParams } from 'next/navigation';

export default function EscrowPage() {
  const params = useParams();
  const id = params.id as string;
  return <EscrowForm id={id} />;
}
