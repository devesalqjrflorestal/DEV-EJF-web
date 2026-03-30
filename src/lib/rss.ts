import Parser from 'rss-parser';

export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  image: string;
  author: string;
};

const parser = new Parser({
  customFields: {
    item: [
      ['dc:creator', 'author'],
      ['enclosure', 'enclosure', { keepArray: false }],
    ],
  },
});

export async function getBlogPosts(limit: number = 12): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL('https://www.esalqjrflorestal.org.br/blog-feed.xml');
    
    return feed.items.slice(0, limit).map((item: any) => {
      // Extract thumbnail from enclosure or fallback to a default forest image
      const imageUrl = item.enclosure?.url || '/hero-bg.png';
      
      // Clean up description (Wix descriptions often end with "...")
      const description = item.contentSnippet || item.description || "";
      
      return {
        title: item.title || "Sem título",
        link: item.link || "#",
        pubDate: item.pubDate || new Date().toISOString(),
        excerpt: description.substring(0, 160) + (description.length > 160 ? "..." : ""),
        image: imageUrl,
        author: item.author || "ESALQ Júnior Florestal",
      };
    });
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return [];
  }
}
