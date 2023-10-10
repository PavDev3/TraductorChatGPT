import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  autofocus?: boolean
  placeholder: string
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: '0px', height: '200px' }

export const TextArea = ({ placeholder, autofocus, type, loading, value, onChange }: Props) => {
  const style = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }
  return (
        <Form.Control
        autoFocus={type === SectionType.From}
        as='textarea'
        placeholder={placeholder}
        style={style}
        />
  )
}
