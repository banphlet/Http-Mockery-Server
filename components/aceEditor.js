'use strict'
import brace from 'brace'
import 'brace/mode/javascript'
import 'brace/mode/markdown'
import 'brace/ext/language_tools'
import 'brace/theme/github'

import AceEditor from 'react-ace'

const textEditor = props => (
  <div>
    <AceEditor
      readOnly={props.disabled || false}
      mode={props.lan}
      theme={props.theme}
      onChange={props.onChange}
      value={props.value}
      editorProps={{
        $blockScrolling: true,
      }}
      fontSize={props.fontSize || 18}
      height={props.height || '40vh'}
      width={props.width || "100%"}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers:  true,
      }}
    />
  </div>
)

export default textEditor
