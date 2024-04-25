import ReactMarkdown from 'react-markdown';
import Carousel from './Carousel'; // Your carousel component

function BlogPost({ markdownContent }) {
  const renderers = {
    text: (text) => {
      const carouselMatch = text.match(/\[\[carousel:(.+?)\]\]/);
      if (carouselMatch) {
        const images = carouselMatch[1].split(',');
        return <Carousel images={images} />;
      }
      return text;
    },
  };

  return (
    <div>
      <ReactMarkdown renderers={renderers}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
