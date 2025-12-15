// vulnerable: dangerouslySetInnerHTML
import DOMPurify from 'DOMPurify';
function Comment({ html }) {
  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
