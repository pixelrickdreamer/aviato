import {Tag, TagGroup, Label} from '@midas-ds/components'

import './App.css'
import '@midas-ds/components/global.css'

function App() {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className={'group'}>
        <Label>Border</Label>
      <TagGroup className={'standardTags'}>
        <Tag className={'tag green'}>Standard tag</Tag>
        <Tag className={'tag blue'}>Standard tag</Tag>
        <Tag className={'tag'}>Standard tag</Tag>
        <Tag className={'tag red'}>Standard tag</Tag>
      </TagGroup>
      </div>
      <div className={'group'}>
        <Label>BoxShadow</Label>
        <TagGroup className={'boxShadow'}>
          <Tag className={'tag green box-shadow'}>Standard tag</Tag>
          <Tag className={'tag box-shadow blue'}>Standard tag</Tag>
          <Tag className={'tag box-shadow'}>Standard tag</Tag>
          <Tag className={'tag red box-shadow'}>Standard tag</Tag>
        </TagGroup>
      </div>

    </div>
  )
}

export default App
