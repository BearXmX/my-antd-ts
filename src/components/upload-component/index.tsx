import React, { useState } from 'react'
import { Progress } from 'antd'

const chunkSize = 1024 * 1024 * 5

const UploadComponent: React.FC = () => {
  const [progress, setProgress] = useState<number>(0)

  const [imgUrl, setImgUrl] = useState<string>('')

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    let allChunkSize = 0

    let count = 0

    // const count = Math.ceil(file.size / chunkSize)

    while (allChunkSize < file.size) {
      const part = file.slice(allChunkSize, allChunkSize + chunkSize > file.size ? file.size : allChunkSize + chunkSize)

      allChunkSize += part.size

      count++

      console.log(count, 'count')

      setProgress(Math.ceil((allChunkSize / file.size) * 100))
    }

    console.log('切片结束', allChunkSize)
  }

  const onchangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    // 读一半
    const newFile = new File([file.slice(0, file.size / 2)], 'img')

    console.log(newFile)

    const fileReader = new FileReader()

    fileReader.readAsDataURL(newFile)

    fileReader.onload = e => {
      setImgUrl(e.target?.result as string)
    }
  }

  return (
    <div style={{ padding: 16 }}>
      <input type="file" onChange={onchange} />
      <br />
      <br />
      <Progress percent={progress} status="active" />
      <br />
      <br />
      <div>
        <input type="file" onChange={onchangeImg} />
        <br />
        <br />
        <br />
        <img width={500} height={500} src={imgUrl} alt="" />
      </div>
    </div>
  )
}
export default UploadComponent
