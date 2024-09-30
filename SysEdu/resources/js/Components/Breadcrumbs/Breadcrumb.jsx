import React from 'react';
import { Link } from '@inertiajs/react';

const Breadcrumb = ({ items }) => {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className="my-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                {items[items.length - 1].label}
            </h2>

            <nav>
                <ol className="flex items-center gap-2 flex-wrap">
                    <li>
                        <Link className="font-medium hover:underline" href="/admin" >
                            Dashboard
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

export default Breadcrumb;