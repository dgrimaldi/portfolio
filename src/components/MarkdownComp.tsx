import showdown from 'showdown';
import {sanitize} from 'dompurify';
import {memo} from "react"
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'


const MarkdownComp = memo(function MarkdownComp({text, title}: {text: string, title?: string | ""}) {

  const converter = new showdown.Converter();
  const cleanHTML = sanitize(converter.makeHtml(text))

  return (
      <>
      <title>{title}</title>
          <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
      </>
  )
})

export default MarkdownComp