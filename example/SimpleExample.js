import React from 'react'
import ReactUeditor from '../lib'

class SimpleExample extends React.Component {
  updateEditorContent = content => {
    this.content = content
  }

  render() {
    return (
      <ReactUeditor
        debug
        // ueditorPath='../vendor/ueditor'
        onChange={this.updateEditorContent}
      />
    )
  }
}

export default SimpleExample
