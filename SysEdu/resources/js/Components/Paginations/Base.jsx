import React from 'react';
import { Link } from '@inertiajs/react';

function Base({ link }) {
    return (
        <div className='flex justify-end mt-4'>
            {link.map((link, key) => (
                <Link 
                    key={key}
                    href={link.url}
                    className={`w-8 h-8 flex items-center justify-center mx-1 rounded-full ${
                        link.active
                            ? 'bg-graydark text-white'
                            : 'bg-white text-graydark border border-graydark'
                    } ${!link.url && 'opacity-50 cursor-not-allowed'} ${
                        (link.label === '&laquo; Previous' || link.label === 'Next &raquo;') && 'border-none'
                    }`}
                >
                    {link.label === '&laquo; Previous' ? (
                        <i className="fa fa-angle-left"></i>
                    ) : link.label === 'Next &raquo;' ? (
                        <i className="fa fa-angle-right"></i>
                    ) : (
                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                    )}
                </Link>
            ))}
        </div>
    );
}

export default Base;