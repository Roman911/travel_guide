import React from 'react'
import dynamic from 'next/dynamic'
import { Controller, useFormContext } from 'react-hook-form'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const QuillComponent: React.FC = () => {
  const { control } = useFormContext()

  const [value, setValue] = React.useState('')
  const [file, setFile] = React.useState<File | null>(null)

  const quillRef = React.useRef()

  console.log(quillRef.current)

  const imageHandler = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = () => {
      //@ts-ignore
      const file = input.files[0]

      if (file) {
        setFile(file)

        //@ts-ignore
        const range = quillRef.current.getEditorSelection()

        console.log(range)
        //@ts-ignore
        //quillRef.getEditor().insertEmbed(range.index, 'image', res)
      }
    }
  }

  const modules = {
    toolbar: {
      container: [
        [{ header: '1' }, { header: '2' }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
      },
    },

    clipboard: {
      matchVisual: false,
    },
  }
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

  return (
    <ReactQuill
      //@ts-ignore
      ref={el => {
        //@ts-ignore
        quillRef = el
      }}
      modules={modules}
      formats={formats}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  )

  //return (
  //<Controller
  //control={control}
  //name="editor"
  //render={({ field: { onChange, value } }) => (
  //<ReactQuill
  //modules={modules}
  //formats={formats}
  //  theme="snow"
  //  value={value}
  //  onChange={onChange}
  // />
  // )}
  //  />
  // )
}

export default QuillComponent
