"use client";

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isMounted) return null;
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 h-14 bg-black flex items-center justify-between px-6 z-10 border-b border-white/10">
                    <span className="text-white font-italiana text-lg">Quick Quote & Reserve</span>
                    <button
                        onClick={onClose}
                        className="text-white/60 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Iframe Container */}
                <div className="pt-14 h-full">
                    <iframe
                        src="https://dispatch.deversoftware.com/Dispatch/Booking/?cRegNo=oyHr8V4xISzpZ40&coID=1&embed=1"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', borderRadius: '24px' }}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
