import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import DateUtils from '../utils/DateUtils';
import { markdownToHtml } from '../utils/GithubUtils';
import me from '../assets/me.webp';

// Bu sayfada da GitHub stilini kullanmak harika olur!
import "../assets/github-markdown-styles.css";

function BlogDetail() {
    const { blogId } = useParams();
    const [postContent, setPostContent] = useState('');
    const post = blogPosts.find(p => p.id === blogId);

    useEffect(() => {
        if (post) {
            const fetchData = async () => {
                const html = await markdownToHtml(post.content);
                setPostContent(html);
            };
            fetchData();
        }
    }, [post]);

    // Eğer URL'de belirtilen ID'ye sahip bir blog yoksa, 404 sayfasına yönlendir.
    if (!post) {
        return <Navigate to="/404" />;
    }


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8">

                {/* Ana İçerik Alanı (Sol Taraf) */}
                <main className="lg:col-span-9">
                    <div className="mb-8">
                        <Link to="/blogs" className="text-cyan-600 dark:text-cyan-400 hover:underline mb-4 inline-block">
                            &larr; Back to all posts
                        </Link>
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">{post.title}</h1>
                    </div>
                    <div
                        className="markdown-body bg-white dark:bg-[#0d1117] p-6 sm:p-8 rounded-lg"
                        dangerouslySetInnerHTML={{ __html: postContent }}
                    />
                </main>

                {/* Yan Panel (Sağ Taraf) */}
                <aside className="lg:col-span-3 mt-8 lg:mt-0">
                    <div className="sticky top-24 bg-white dark:bg-slate-800 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-2 mb-4">About the Author</h3>
                        <div className="flex items-center mb-4">
                            <img src={post.authorImage || me} alt="Ali İhsan Çelik" className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">{post.author}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Computer Engineer</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-2 mb-4 mt-6">Post Information</h3>
                        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                            <li><strong>Published on:</strong> {DateUtils.formatDate(post.createdAt)}</li>
                            <li><strong>Updated on:</strong> {DateUtils.formatDate(post.updatedAt)}</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-2 mb-4 mt-6">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-gray-200 dark:bg-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-full text-gray-800 dark:text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>

            </div>
        </div>
    );
}

export default BlogDetail;