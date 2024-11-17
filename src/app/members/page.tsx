import React from 'react';
import Link from 'next/link';

export default function MembersPage() {
    return (
        <div>
            <h1 className="text-3xl">This is the member page</h1>
            <Link href="/">Go back to Dashboard</Link>
        </div>
    )
};
