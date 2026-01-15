import React from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoId, platform = 'youtube' }) => {
    if (!isOpen) return null;

    // Load TikTok script when modal opens if platform is tiktok
    React.useEffect(() => {
        if (isOpen && platform === 'tiktok') {
            const script = document.createElement('script');
            script.src = 'https://www.tiktok.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [isOpen, platform]);

    const isTikTok = platform === 'tiktok';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div
                className={`relative w-full bg-black rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 ring-1 ring-white/10 flex items-center justify-center ${isTikTok ? 'max-w-[340px] aspect-[9/16]' : 'max-w-5xl aspect-video'
                    }`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-[#FE0D15] text-white rounded-full transition-colors backdrop-blur-sm"
                >
                    <X className="w-6 h-6" />
                </button>

                {isTikTok ? (
                    <div className="w-full h-full flex items-center justify-center overflow-y-auto">
                        <blockquote
                            className="tiktok-embed"
                            cite={`https://www.tiktok.com/video/${videoId}`}
                            data-video-id={videoId}
                            style={{ maxWidth: '605px', minWidth: '325px' }}
                        >
                            <section> <a target="_blank" href="https://www.tiktok.com/@reliable.sg?refer=embed">@reliable.sg</a> </section>
                        </blockquote>
                    </div>
                ) : (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default VideoModal;
