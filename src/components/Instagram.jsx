const InstagramEmbed = () => {
    return (
      <div>
        <h3>Recent Instagram Posts</h3>
        <div dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE/" data-instgrm-version="14"></blockquote><script async src="//www.instagram.com/embed.js"></script>` }} />
      </div>
    );
  };
  
  export default InstagramEmbed;
  