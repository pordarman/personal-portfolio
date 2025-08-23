import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import DateUtils from '../utils/DateUtils';

const POSTS_PER_PAGE = 15;

// Akıllı sayfalama fonksiyonu
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleGoToPage = (ellipsisPosition) => {
        let targetPage;
        // Hangi üç noktaya tıklandığına göre varsayılan bir sayfa önerisi sunalım
        if (ellipsisPosition === 'start') {
            targetPage = Math.floor(currentPage / 2);
        } else {
            targetPage = Math.floor((currentPage + totalPages) / 2);
        }

        const pageStr = prompt(`Please enter a page number (1 - ${totalPages}):`, targetPage);
        if (pageStr) {
            let pageNum = parseInt(pageStr, 10);
            // Girilen değerin geçerli bir sayı ve aralıkta olup olmadığını kontrol et
            if (isNaN(pageNum)) {
                alert('Please enter a valid page number.');
                return;
            }

            if (pageNum < 1) pageNum = 1;
            else if (pageNum > totalPages) pageNum = totalPages;

            onPageChange(pageNum);
        }
    };

    const pageNumbers = useMemo(() => {
        const pages = [];
        const maxVisiblePages = 7; // Ekranda görünecek maksimum sayfa butonu sayısı (tek sayı olması tercih edilir)

        if (totalPages <= maxVisiblePages) {
            // Eğer toplam sayfa sayısı az ise, hepsini göster
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Çok fazla sayfa varsa, akıllı kırpma yap
            pages.push(1); // Her zaman ilk sayfayı göster

            let startPage = Math.max(2, currentPage - 2);
            let endPage = Math.min(totalPages - 1, currentPage + 2);

            if (currentPage - 1 > 3) {
                pages.push('...'); // Başta boşluk varsa ... ekle
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (totalPages - currentPage > 3) {
                pages.push('...'); // Sonda boşluk varsa ... ekle
            }

            pages.push(totalPages); // Her zaman son sayfayı göster
        }
        return pages;
    }, [currentPage, totalPages]);

    return (
        <div className="flex justify-center items-center space-x-1 sm:space-x-2 mt-12">
            {/* Önceki Sayfa Butonu */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-cyan-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
                &larr;
            </button>

            {pageNumbers.map((page, index) =>
                page === '...' ? (
                    // --- GÜNCELLENMİŞ ÜÇ NOKTA BUTONU ---
                    <button
                        key={`ellipsis-${index}`}
                        onClick={() => handleGoToPage(index < 3 ? 'start' : 'end')} // Hangi üç nokta olduğunu belirle
                        className="px-4 py-2 text-slate-500 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors"
                        title="Go to page..."
                    >
                        ...
                    </button>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${currentPage === page
                            ? 'bg-cyan-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-cyan-500 hover:text-white'
                            }`}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Sonraki Sayfa Butonu */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-cyan-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
                &rarr;
            </button>
        </div>
    );
}

function BlogList() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const selectedPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const createSummary = (content) => {
        const cleanText = content.replace(/```[\s\S]*?```/g, '').replace(/#[#\s]*/g, '').replace(/(\*|_|`)/g, '');
        return cleanText.trim().slice(0, 100) + '...';
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">Blog</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">My thoughts, experiences, and learnings.</p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
                {selectedPosts.map(post => (
                    <Link to={`/blogs/${post.id}`} key={post.id} className="block group">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{post.title}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                Published on: {DateUtils.formatDate(post.createdAt)}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                {createSummary(post.content)}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="bg-gray-200 dark:bg-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-full text-gray-800 dark:text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Eski sayfalama kodunu yeni bileşenimizle değiştiriyoruz */}
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
}

export default BlogList;