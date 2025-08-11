'use client';
import React from 'react';

type Props = { json: any };

export default function LDJson({ json }: Props) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}


