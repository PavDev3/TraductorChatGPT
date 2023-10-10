import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  autofocus?: boolean
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: '0px', height: '200px', resize: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introduce el texto a traducir'
  if (loading === true) return 'Traduciendo...'
  return 'Traducción'
}

export const TextArea = ({ type, loading, onChange, value }: Props) => {
  const style = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
        <Form.Control
        autoFocus={type === SectionType.From}
        as='textarea'
        disabled={type === SectionType.To}
        placeholder={getPlaceholder({ type, loading })}
        style={style}
        value={value}
        onChange={handleChange}
        />
  )
}
