import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { Box } from '@mui/material'

const Editor = dynamic(
  () => {
    return import('react-draft-wysiwyg').then(mod => mod.Editor)
  },
  { ssr: false }
)

const ReactEditor = () => {
  const [editor, setEditor] = React.useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState: any) => {
    setEditor(editorState)
  }

  console.log(draftToHtml(convertToRaw(editor.getCurrentContent())))

  const uploadImageCallBack = (file: any) => {
    console.log(file)
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          link: 'https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png',
        },
      })
    })
  }

  const toolbar = {
    inline: { inDropdown: true },
    list: { inDropdown: true },
    textAlign: { inDropdown: true },
    link: { inDropdown: true },
    history: { inDropdown: true },
    image: {
      uploadCallback: uploadImageCallBack,
    },
  }

  return (
    <div>
      <Editor
        editorState={editor}
        onEditorStateChange={onEditorStateChange}
        toolbar={toolbar}
      />
      <Box
        className="editorWrapper"
        dangerouslySetInnerHTML={{
          __html: draftToHtml(convertToRaw(editor.getCurrentContent())),
        }}
      />
    </div>
  )
}

export default ReactEditor
