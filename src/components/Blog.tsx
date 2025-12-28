import { Calendar, Tag } from 'lucide-react';
import blogEntries from '../assets/blogEntries.json';

interface BlogEntry {
    id: string;
    title: string;
    date: string;
    tags: string[];
    body: string;
}

const Blog = () => {
    const entries: BlogEntry[] = blogEntries;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-cream-100 pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif text-navy-900 mb-4">
                        Blog
                    </h1>
                    <p className="text-lg text-navy-800/70">
                        Insights on business process optimization, strategy, and growth.
                    </p>
                </div>

                {/* Blog Entries */}
                <div className="space-y-12">
                    {entries.map((entry) => (
                        <article
                            key={entry.id}
                            className="bg-white p-8 rounded-sm border border-navy-100 hover:border-gold-500 transition-colors"
                        >
                            {/* Title */}
                            <h2 className="text-3xl font-serif text-navy-900 mb-4">
                                {entry.title}
                            </h2>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-4 mb-6 text-sm text-navy-800/60">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <time dateTime={entry.date}>{formatDate(entry.date)}</time>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Tag size={16} />
                                    <span>{entry.tags.join(', ')}</span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="prose prose-lg max-w-none text-navy-800/80 leading-relaxed whitespace-pre-line">
                                {entry.body}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
