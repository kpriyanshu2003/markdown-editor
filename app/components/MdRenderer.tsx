import MarkdownIt from "markdown-it";
import implicitFigures from "markdown-it-implicit-figures";
import highlight from "markdown-it-highlightjs";
import table from "markdown-it-multimd-table";

const MarkdownRenderer = () => {
  const md = localStorage.getItem("text");
  const renderMarkdown = (md: string) => {
    const mdParser = new MarkdownIt({
      html: true,
      linkify: false,
      typographer: true,
    });
    mdParser.use(implicitFigures, {
      dataType: false,
      figcaption: false,
      tabindex: false,
      link: true,
    });
    mdParser.use(highlight);
    mdParser.use(table, {
      multiline: false,
      rowspan: false,
      headerless: false,
      multibody: true,
      aotolabel: true,
    });
    return { __html: mdParser.render(md) };
  };
  return (
    <div className="p-8 overflow-x-auto">
      <div dangerouslySetInnerHTML={renderMarkdown(md || "")} />
    </div>
  );
};

export default MarkdownRenderer;
