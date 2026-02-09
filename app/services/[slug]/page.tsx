'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import ServiceDetailContent from '../../components/ServiceDetailContent';
import { servicesDetailsData } from '../../../data/servicesDetails';

interface ServiceDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
    const { slug } = use(params);
    
    // Debug: Log the slug and available services
    console.log('Requested slug:', slug);
    console.log('Available services:', Object.keys(servicesDetailsData));
    
    const service = servicesDetailsData[slug];

    // Debug: Log the service data
    console.log('Service data:', service);

    if (!service) {
        console.error(`Service not found for slug: ${slug}`);
        notFound();
    }

    return <ServiceDetailContent service={service} slug={slug} />;
}