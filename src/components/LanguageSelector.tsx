import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from '../constants'
import { type FromLanguage, type Language } from '../types'

type Props =
  | { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: 'to', value: Language, onChange: (language: Language) => void }

export const LanguageSelector = ({ onChange, value, type }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
        <Form.Select aria-label='Selección de idioma' onChange={handleChange} value={value}>
          {type === 'from' && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                {literal}
                </option>
            ))}
            </Form.Select>
  )
}
