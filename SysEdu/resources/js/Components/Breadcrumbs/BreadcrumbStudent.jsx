import React from 'react';
import { Link } from '@inertiajs/react';

function BreadcrumbStudent({ items }) {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className="my-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <nav>
                <ol className="flex items-center gap-2 flex-wrap">
                    <li>
                        <Link className="font-medium hover:underline" href="/admin" >
                            Trang chủ
                        </Link>
                        <span className="mx-2">/</span>
                    </li>

                    {items.map((item, index) => (
                        <li key={index}>
                            {item.link ? (
                                <Link className="font-medium hover:underline" href={`${item.link}`} to={item.link}>
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="font-medium">{item.label}</span>
                            )}
                            {index < items.length - 1 && <span className="mx-2">/</span>}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default BreadcrumbStudent;