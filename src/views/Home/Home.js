import React, { useState } from 'react'

import Preview from '../../components/Preview/Preview'
import Editor from '../../components/Editor/Editor'

import './Home.css'

export default function Home() {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [titleFont, setTitleFont] = useState('titillium')
  const [align, setAlign] = useState('center')
  const [text, setText] = useState('')

  return (
    <main>
      <Preview {...{ title, subtitle, titleFont, align, text }} />
      <Editor
        {...{
          title,
          setTitle,
          titleFont,
          setTitleFont,
          subtitle,
          setSubtitle,
          align,
          setAlign,
          text,
          setText,
        }}
      />
    </main>
  )
}
