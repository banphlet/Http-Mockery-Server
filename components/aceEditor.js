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
      name="Request_Body"
      editorProps={{
        $blockScrolling: true,
      }}
      fontSize={18}
      height={props.height || '40vh'}
      width="100%"
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  </div>
)

export default textEditor
