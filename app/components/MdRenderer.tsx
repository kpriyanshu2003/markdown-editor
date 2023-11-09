import MarkdownIt from "markdown-it";
import implicitFigures from "markdown-it-implicit-figures";

const MarkdownRenderer = () => {
  const md = localStorage.getItem("text");

  const renderMarkdown = (md: string) => {
    const mdParser = new MarkdownIt({
      html: true,
    });
    mdParser.use(implicitFigures, {
      dataType: false,
      figcaption: false,
      tabindex: false,
      link: true,
    });
    return { __html: mdParser.render(md) };
  };
  return (
    <div className="p-8">
      {md ? (
        <div dangerouslySetInnerHTML={renderMarkdown(md)} />
      ) : (
        <div>No markdown to preview</div>
      )}
    </div>
  );
};

export default MarkdownRenderer;
