import React from 'react'
import dynamic from 'next/dynamic'
import { Controller, useFormContext } from 'react-hook-form'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const QuillComponent: React.FC = () => {
  const { control } = useFormContext()

  const imageHandler = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = () => {
      const file = input.files[0]

      console.log(file)
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
      //handlers: {
      //image: imageHandler,
      //},
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
    <Controller
      control={control}
      name="editor"
      render={({ field: { onChange, value } }) => (
        <ReactQuill
          modules={modules}
          formats={formats}
          theme="snow"
          value={value}
          onChange={onChange}
        />
      )}
    />
  )
}

export default QuillComponent
