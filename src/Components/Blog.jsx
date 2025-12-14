import { useState, useEffect } from 'react';
import { ExternalLink, Calendar, Clock, Loader2 } from 'lucide-react';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHashnodeBlogs();
  }, []);

  const fetchHashnodeBlogs = async () => {
    try {
      const response = await fetch('https://gql.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query Publication {
              publication(host: "understanding-about-ssrssgcsr.hashnode.dev") {
                posts(first: 10) {
                  edges {
                    node {
                      title
                      brief
                      url
                      coverImage {
                        url
                      }
                      publishedAt
                      readTimeInMinutes
                      tags {
                        name
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      });

      const data = await response.json();

      if (data.data?.publication?.posts?.edges) {
        const posts = data.data.publication.posts.edges.map((edge) => ({
          title: edge.node.title,
          description: edge.node.brief,
          url: edge.node.url,
          image:
            edge.node.coverImage?.url ||
            'https://via.placeholder.com/400x250/e5e7eb/6b7280?text=Blog+Post',
          date: new Date(edge.node.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          }),
          readTime: `${edge.node.readTimeInMinutes} min read`,
          tags: edge.node.tags?.map((tag) => tag.name).slice(0, 3) || [],
        }));
        setBlogs(posts);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blogs');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center mt-28">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center mt-28">
        <div className="text-center">
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-8 py-16 mt-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">My Blog</h1>
          <p className="text-gray-600 text-lg">
            Sharing my knowledge and experiences in web development
          </p>
        </div>

        {/* Blog Grid */}
        {blogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-black hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Blog Image */}
                <div className="overflow-hidden border-b-2 border-black">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-black mb-3 group-hover:underline">
                    {blog.title}
                  </h2>

                  <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Tags */}
                  {blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs border border-black text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-gray-600 text-sm pt-4 border-t border-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-black font-medium mt-4 group-hover:gap-3 transition-all">
                    <span>Read on Hashnode</span>
                    <ExternalLink
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <p>No blogs found</p>
          </div>
        )}
      </div>
    </div>
  );
}
